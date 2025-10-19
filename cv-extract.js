// Heuristic client-side extraction of skills, languages, and experiences from a PDF CV
// Uses PDF.js (loaded in index.html) to read text content. Results depend on PDF structure.

(function () {
  const PDF_FR = 'CV_2025-10-13_Manon_Coulon.pdf';
  const PDF_EN = 'CV_2025-10-13_Manon_Coulon_Anglais.pdf';
  const statusEl = document.getElementById('cv-extract-status');
  const skillsEl = document.getElementById('skills-list');
  const languagesEl = document.getElementById('languages-list');
  const experiencesEl = document.getElementById('experiences-list');
  const factDomainEl = document.getElementById('fact-domain');
  const factLocationEl = document.getElementById('fact-location');
  const factKeySkillsEl = document.getElementById('fact-keyskills');
  const contactEmailEl = document.getElementById('contact-email');

  function setStatus(message, type) {
    if (!statusEl) return;
    if (type === 'error') {
      // Hide the status element for errors instead of showing them
      statusEl.style.display = 'none';
      return;
    }
    statusEl.style.display = 'block';
    statusEl.textContent = message;
  }

  function safeClear(el, placeholder) {
    if (!el) return;
    el.innerHTML = '';
    if (placeholder) {
      const li = document.createElement('li');
      li.textContent = placeholder;
      el.appendChild(li);
    }
  }

  async function loadPdfText(url) {
    // Some browsers block file: fetch. When served via HTTP(s) this works best.
    try {
      const pdf = await window.pdfjsLib.getDocument({ url }).promise;
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((it) => (it.str || '').trim());
        fullText += '\n' + strings.join(' ');
      }
      return fullText;
    } catch (err) {
      throw err;
    }
  }

  function normalize(text) {
    return text
      .replace(/\s+/g, ' ')
      .replace(/[\u2022\u2023\u25E6\u2043\u2219]/g, '•') // bullets → •
      .trim();
  }

  function extractSection(text, labels) {
    // Returns text between one of labels and the next uppercase section label or end
    const idx = labels
      .map((l) => ({ l, i: text.toLowerCase().indexOf(l.toLowerCase()) }))
      .filter((x) => x.i >= 0)
      .sort((a, b) => a.i - b.i)[0];
    if (!idx) return '';
    const start = idx.i + idx.l.length;
    const tail = text.slice(start);
    const m = tail.match(/\n?\s*[A-ZÉÈÀÂÎÔÛÄËÏÖÜÇ][A-ZÉÈÀÂÎÔÛÄËÏÖÜÇ\s\-]{3,}\s*:?/);
    const end = m ? start + m.index : text.length;
    return text.slice(start, end).trim();
  }

  function extractEmail(text) {
    const m = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    return m ? m[0] : '';
  }

  function extractLocation(text) {
    // Look for a 'Adresse' or city/country hints in header or contact info
    const header = text.slice(0, 800);
    const locLabel = /(?:Adresse|Address|Localisation|Location)\s*[:\-]?\s*([^\n]+)/i;
    const m = header.match(locLabel);
    if (m) return m[1].trim();
    // Fallback: detect common French city words (very heuristic)
    const cityMatch = header.match(/\b(Paris|Toulouse|Lyon|Marseille|Bordeaux|Nantes|Lille|Rennes|Grenoble|Montpellier)\b[^\n]*/i);
    return cityMatch ? cityMatch[0].trim() : '';
  }

  function extractDomain(text) {
    // Try to infer from title line (e.g., "Étudiante en X", "Ingénieure ...")
    const header = text.slice(0, 600);
    const titleMatch = header.match(/(?:Étudiant[e]?|Etudiant[e]?|Ingénieur[e]?|Engineer|Apprenti[e]?|Alternant[e]?)[^\n]{5,}/i);
    if (titleMatch) return titleMatch[0].trim();
    const profile = extractSection(text, ['Profil', 'Profile', 'Résumé', 'Summary']);
    if (profile) return profile.split(/\.|;|\n/)[0].trim();
    return '';
  }

  function splitList(sectionText) {
    if (!sectionText) return [];
    // split by bullets, commas, or semicolons
    const byBullet = sectionText.split(/\s*[•\-]\s+/).filter(Boolean);
    const items = (byBullet.length > 1 ? byBullet : sectionText.split(/[,;]\s+/)).map((s) => s.trim());
    return items
      .map((s) => s.replace(/^•\s*/, '').replace(/\s*•\s*$/, '').trim())
      .filter((s) => s && s.length > 1)
      .slice(0, 20);
  }

  function renderList(el, items) {
    if (!el) return;
    el.innerHTML = '';
    if (!items.length) {
      const li = document.createElement('li');
      li.textContent = 'Aucun élément détecté automatiquement.';
      el.appendChild(li);
      return;
    }
    for (const it of items) {
      const li = document.createElement('li');
      li.textContent = it;
      el.appendChild(li);
    }
  }

  function renderExperiences(el, lines) {
    if (!el) return;
    el.innerHTML = '';
    if (!lines.length) {
      const li = document.createElement('li');
      li.className = 'card';
      li.textContent = 'Aucune expérience détectée automatiquement.';
      el.appendChild(li);
      return;
    }
    for (const line of lines.slice(0, 6)) {
      const li = document.createElement('li');
      li.className = 'card';
      const p = document.createElement('p');
      p.textContent = line;
      li.appendChild(p);
      el.appendChild(li);
    }
  }

  function extractExperiences(text) {
    const section = extractSection(text, ['Expériences', 'Experience', 'Professional Experience', 'Parcours professionnel']);
    if (!section) return [];
    // Split into plausible entries by line breaks with years/months
    const entries = section.split(/(?=\b(20\d{2}|19\d{2})\b|\b(janv\.|févr\.|mars|avr\.|mai|juin|juil\.|août|sept\.|oct\.|nov\.|déc\.)\b)/i);
    return entries
      .map((s) => s.replace(/\s+/g, ' ').trim())
      .filter((s) => s.length > 8)
      .slice(0, 8);
  }

  function updateDownloadLinks(pdfUrl) {
    const top = document.getElementById('cv-download-top');
    const bottom = document.getElementById('cv-download-bottom');
    if (top) top.href = pdfUrl;
    if (bottom) bottom.href = pdfUrl;
    // update viewer
    const obj = document.querySelector('#cv object');
    const iframe = document.querySelector('#cv iframe');
    if (obj) obj.setAttribute('data', pdfUrl);
    if (iframe) iframe.setAttribute('src', pdfUrl);
    // Update hero download link too
    const hero = document.querySelector('a.btn[href$=\'.pdf\'][download]');
    if (hero) hero.setAttribute('href', pdfUrl);
  }

  async function main(lang) {
    if (!window.pdfjsLib) {
      // Hide the extraction status completely if PDF.js is not available
      if (statusEl) {
        statusEl.style.display = 'none';
      }
      return;
    }
    setStatus('Extraction des données depuis le CV…', 'info');
    let raw = '';
    try {
      const pdfUrl = (lang || document.documentElement.lang) === 'en' ? PDF_EN : PDF_FR;
      updateDownloadLinks(pdfUrl);
      raw = await loadPdfText(pdfUrl);
    } catch (e) {
      // Hide the extraction status if PDF reading fails
      if (statusEl) {
        statusEl.style.display = 'none';
      }
      return;
    }
    const text = normalize(raw);

    // Compétences
    const skillsText = extractSection(text, ['Compétences', 'Skills', 'Compétences techniques']);
    const skills = splitList(skillsText);
    renderList(skillsEl, skills);
    if (skills.length && factKeySkillsEl) {
      factKeySkillsEl.textContent = skills.slice(0, 5).join(', ');
    }

    // Langues
    const languagesText = extractSection(text, ['Langues', 'Languages']);
    const languages = splitList(languagesText);
    renderList(languagesEl, languages);

    // Expériences
    const expItems = extractExperiences(text);
    renderExperiences(experiencesEl, expItems);

    // Contact + facts
    const email = extractEmail(text);
    if (email && contactEmailEl) {
      contactEmailEl.textContent = email;
      contactEmailEl.href = 'mailto:' + email;
    }
    const location = extractLocation(text);
    if (location && factLocationEl) factLocationEl.textContent = location;
    const domain = extractDomain(text);
    if (domain && factDomainEl) factDomainEl.textContent = domain;

    setStatus('Extraction terminée. Vous pouvez ajuster manuellement si nécessaire.', 'ok');
  }

  // Run after load
  function boot() {
    const lang = document.documentElement.lang || 'fr';
    main(lang);
    window.addEventListener('language-changed', (e) => {
      const l = e.detail && e.detail.lang ? e.detail.lang : 'fr';
      main(l);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();


