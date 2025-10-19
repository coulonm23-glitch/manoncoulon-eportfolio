(function () {
  const STORAGE_THEME = 'pref-theme';
  const STORAGE_LANG = 'pref-lang';

  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const langBtn = document.getElementById('lang-toggle');

  // ======== Traductions FR / EN ========
  const messages = {
    fr: {
      name: 'Manon Coulon',
      subtitle: 'E‑Portfolio',
      'nav.presentation': 'Présentation',
      'nav.cv': 'CV',
      'nav.hobbies': 'Centres d\'intérêt',
      'nav.engagement': 'Engagement civique',
      'sections.engagement': 'Engagement civique',
      'engagement.intro': 'Mettez en avant vos actions citoyennes, associatives ou solidaires.',
      'engagement.item1.title': 'Volontariat sportif – Ligue des Nations de Volley (Aix-en-Provence, 2018)',
      'engagement.item1.meta': 'Bénévolat sportif et événementiel',
      'engagement.item1.description': 'Participation à un événement international (ramasseuse de balle, accueil du public).<br>Esprit d’équipe, sens du service, responsabilité.<br>Accueil du public et assistance logistique pendant la compétition.',
      'engagement.item2.title': 'Volontaire – Jeux Olympiques de Paris 2024',
      'engagement.item2.meta': 'Service civique / Engagement citoyen international',
      'engagement.item2.description': 'Accueil, orientation et accompagnement des spectateurs (français et étrangers).<br>Mise en avant de qualités humaines : diplomatie, écoute, gestion du stress, adaptabilité.<br>Contribution à un événement d’intérêt national et collectif.<br>Accueil et information des spectateurs, gestion de situations variées, médiation et communication interculturelle.',
      'engagement.item3.title': 'Projet scientifique – Transition énergétique (TIPE)',
      'engagement.item3.meta': 'Scientifique et environnemental',
      'engagement.item3.description': 'Projet axé sur les énergies renouvelables et la transition écologique.<br>Recherche de solutions pour améliorer le rendement et réduire les pertes énergétiques.<br>Étude de l’influence de la température sur les performances des panneaux photovoltaïques et des solutions de refroidissement.',
      'nav.mobilite': 'Mobilité',
      'nav.contact': 'Contact',
      'sections.presentation': 'Présentation',
      'sections.cv': 'CV',
      'sections.experiences': 'Expériences',
      'sections.hobbies': 'Centres d\'intérêt',
      'sections.contact': 'Contact',
      'presentation.intro1': 'Bonjour, je suis',
      'presentation.intro2': 'Sur cette page, vous trouverez une vue d’ensemble de mon parcours, mes engagements et mes expériences de mobilité. Les détails complets se trouvent dans mon CV (visionnable et téléchargeable ci‑dessous).',
      'facts.domain': 'Domaine',
      'facts.skills': 'Compétences clés',
      'facts.skills.list1': "Qualité d'écoute",
      'facts.skills.list2': "Esprit d'équipe",
      'facts.skills.list3': 'Autonomie',
      'facts.skills.list4': 'Être organisée',
      'facts.location': 'Localisation',
      'cta.viewCv': 'Voir mon CV',
      'cta.download': 'Télécharger le CV (PDF)',
      'cta.downloadShort': 'Télécharger le CV',
      'goal.title': 'Objectif',
      'goal.text': 'Décrire en quelques lignes votre objectif professionnel. Par exemple : « Contribuer à des projets à impact où je peux mettre en œuvre mes compétences techniques et humaines. »',
      'skills.title': 'Compétences',
      'languages.title': 'Langues',
      'languages.english': '🇬🇧 Anglais : niveau B2',
      'languages.spanish': '🇪🇸 Espagnol : niveau B1',
      'experiences.intro': 'Mes expériences professionnelles et événementielles.',
      'exp.stage3.title': 'Stage de 3ème',
      'exp.stage3.dates': '2020',
      'exp.stage3.description': 'Première immersion dans le monde professionnel, découverte des métiers et de l\'environnement de travail.',
      'exp.vnl.title': 'Volleyball Nations League (VNL)',
      'exp.vnl.dates': '2018',
      'exp.vnl.description': 'Participation à la Volleyball Nations League, événement international de haut niveau. Expérience enrichissante dans l\'organisation d\'événements sportifs majeurs.',
      'exp.olympics.title': 'Jeux Olympiques Paris 2024',
      'exp.olympics.dates': '2024',
      'exp.olympics.description': 'Participation aux Jeux Olympiques de Paris 2024, une expérience exceptionnelle dans l\'organisation d\'événements sportifs majeurs et la gestion d\'équipes internationales.',
      'cv.intro': 'Vous pouvez parcourir mon CV ci‑dessous ou le',
      'cv.download': 'télécharger',
      'contact.text': 'Vous pouvez me contacter à l’adresse :',
      'contact.note': '.',
      'contact.linkedin': 'Retrouvez-moi sur LinkedIn :',
      'btn.lang': 'FR/EN',
      'aria.themeToggle': 'Basculer thème',
      'hobbies.intro': 'Mes passions et activités extra-professionnelles.',
      'hobbies.volleyball.title': 'Volley-ball',
      'hobbies.volleyball.duration': 'Pendant 12 ans',
      'hobbies.volleyball.description': "J'ai joué au volley-ball en club pendant 12 ans :",
      'hobbies.volleyball.list1': '9 ans dans le club de Venelles (<strong>PAVVB</strong>, club professionnel féminin),',
      'hobbies.volleyball.list2': '3 ans dans le club de Velaux (<strong>CVF</strong>, niveau prénational).',
      'hobbies.volleyball.team': "Je suis dans l’équipe 1 de l’AS INP et j’ai participé à de nombreuses compétitions nationales :",
      'hobbies.volleyball.national1': 'Coupes de France jeune (de M13 à M18)',
      'hobbies.volleyball.national2': 'Tournois internationaux (Hyères et Mougins, à plusieurs reprises)',
      'hobbies.volleyball.level': 'J’ai finalement atteint un niveau National 3.',
      'hobbies.piano.title': 'Piano',
      'hobbies.piano.duration': 'Pendant 5 ans',
      'hobbies.piano.description': 'Pratique du piano classique et moderne. Participation à des concerts et représentations.',
      'hobbies.hiking.title': 'Randonnée',
      'hobbies.hiking.duration': 'Depuis plusieurs années',
      'hobbies.hiking.description': 'Passion pour la randonnée en montagne et la découverte de nouveaux paysages. Exploration des sentiers pyrénéens.',
      'elevator.title': 'Elevator Speech',
      'elevator.intro': 'Découvrez mes atouts professionnels et mes inspirations en quelques minutes :',
      'elevator.videoTitle': 'Vidéo de présentation professionnelle',
      'elevator.fallback': 'Votre navigateur ne supporte pas la lecture vidéo.',
      'elevator.download': 'Téléchargez la vidéo',
      'elevator.note': 'Durée : ~2 minutes • Format : MP4/WebM'
    },
    en: {
      name: 'Manon Coulon',
      subtitle: 'E-Portfolio',
      'nav.presentation': 'About',
      'nav.cv': 'Resume',
      'nav.hobbies': 'Hobbies',
      'nav.engagement': 'Civic engagement',
      'sections.engagement': 'Civic engagement',
      'engagement.intro': 'Highlight your citizen, associative or solidarity actions.',
      'engagement.item1.title': 'Sports volunteering – Volleyball Nations League (Aix-en-Provence, 2018)',
      'engagement.item1.meta': 'Sports and event volunteering',
      'engagement.item1.description': 'Participation in an international event (ball retriever, audience welcome).<br>Team spirit, service attitude, responsibility.<br>Audience welcome and logistical support during the competition.',
      'engagement.item2.title': 'Volunteer – Paris 2024 Olympic Games',
      'engagement.item2.meta': 'Civic service / International citizen engagement',
      'engagement.item2.description': 'Welcoming, guiding and assisting spectators (French and international).<br>Showcasing human qualities: diplomacy, listening, stress management, adaptability.<br>Contribution to a national and collective event.<br>Welcoming and informing spectators, managing various situations, intercultural mediation.',
      'engagement.item3.title': 'Scientific project – Energy transition (TIPE)',
      'engagement.item3.meta': 'Scientific and environmental',
      'engagement.item3.description': 'Project focused on renewable energies and ecological transition.<br>Researching solutions to improve efficiency and reduce energy losses.<br>Study of the influence of temperature on photovoltaic panel performance and cooling solutions.',
      'nav.mobilite': 'Mobility',
      'nav.contact': 'Contact',
      'sections.presentation': 'About',
      'sections.cv': 'Resume',
      'sections.experiences': 'Experiences',
      'sections.hobbies': 'Hobbies',
      'sections.contact': 'Contact',
      'presentation.intro1': 'Hello, I am',
      'presentation.intro2': 'On this page, you will find an overview of my background, my commitments, and my mobility experiences. Full details are available in my resume (viewable and downloadable below).',
      'facts.domain': 'Field',
      'facts.skills': 'Key skills',
      'facts.skills.list1': 'Good listening skills',
      'facts.skills.list2': 'Team spirit',
      'facts.skills.list3': 'Autonomy',
      'facts.skills.list4': 'Organized and methodical',
      'facts.location': 'Location',
      'cta.viewCv': 'View my resume',
      'cta.download': 'Download resume (PDF)',
      'cta.downloadShort': 'Download resume',
      'goal.title': 'Objective',
      'goal.text': 'Describe your professional goal in a few lines. For example: “Contribute to impactful projects where I can apply both my technical and interpersonal skills.”',
      'skills.title': 'Skills',
      'languages.title': 'Languages',
      'languages.english': '🇬🇧 English: B2 level',
      'languages.spanish': '🇪🇸 Spanish: B1 level',
      'experiences.intro': 'My professional and event-related experiences.',
      'exp.stage3.title': 'Middle school internship',
      'exp.stage3.dates': '2020',
      'exp.stage3.description': 'First immersion in the professional world, discovering careers and work environments.',
      'exp.vnl.title': 'Volleyball Nations League (VNL)',
      'exp.vnl.dates': '2018',
      'exp.vnl.description': 'Participation in the Volleyball Nations League, a high-level international event. A rewarding experience in organizing major sporting events.',
      'exp.olympics.title': 'Paris 2024 Olympic Games',
      'exp.olympics.dates': '2024',
      'exp.olympics.description': 'Participation in the Paris 2024 Olympic Games — an exceptional experience in organizing large-scale sports events and managing international teams.',
      'cv.intro': 'You can view my resume below or',
      'cv.download': 'download it',
      'contact.text': 'You can contact me at:',
      'contact.note': '.',
      'contact.linkedin': 'Find me on LinkedIn:',
      'btn.lang': 'FR/EN',
      'aria.themeToggle': 'Toggle theme',
      'hobbies.intro': 'My passions and extracurricular activities.',
      'hobbies.volleyball.title': 'Volleyball',
      'hobbies.volleyball.duration': 'For 12 years',
      'hobbies.volleyball.description': 'I have played volleyball in clubs for 12 years:',
      'hobbies.volleyball.list1': '9 years in the Venelles club (<strong>PAVVB</strong>, women’s professional club),',
      'hobbies.volleyball.list2': '3 years in the Velaux club (<strong>CVF</strong>, pre-national level).',
      'hobbies.volleyball.team': 'I am part of the AS INP first team and have participated in numerous national competitions:',
      'hobbies.volleyball.national1': 'French Youth Cups (from U13 to U18)',
      'hobbies.volleyball.level': 'I finally reached a National 3 level.',
      'hobbies.piano.title': 'Piano',
      'hobbies.piano.duration': 'For 5 years',
      'hobbies.piano.description': 'Practice of classical and modern piano. Participation in concerts and performances.',
      'hobbies.hiking.title': 'Hiking',
      'hobbies.hiking.duration': 'For several years',
      'hobbies.hiking.description': 'Passionate about mountain hiking and discovering new landscapes. Exploration of the Pyrenean trails.',
      'elevator.title': 'Elevator speech',
      'elevator.intro': 'Discover my professional strengths and inspirations in a few minutes:',
      'elevator.videoTitle': 'Professional presentation video',
      'elevator.fallback': 'Your browser does not support video playback.',
      'elevator.download': 'Download video',
      'elevator.note': 'Duration: ~2 minutes • Format: MP4/WebM'
    }
  };

  // ======== Gestion thème clair/sombre ========
  function getPreferredTheme() {
    return localStorage.getItem(STORAGE_THEME) || 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  // ======== Gestion langue FR/EN ========
  function getPreferredLang() {
    const stored = localStorage.getItem(STORAGE_LANG);
    if (stored) return stored;
    const nav = navigator.language || 'fr';
    return nav.toLowerCase().startsWith('en') ? 'en' : 'fr';
  }

  function applyI18n(lang) {
    const dict = messages[lang] || messages.fr;

    // Texte simple
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });

    // Attributs (ex: title)
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const pairs = el.getAttribute('data-i18n-attr').split(',');
      for (const pair of pairs) {
        const [attr, key] = pair.split(':');
        if (attr && key && dict[key]) el.setAttribute(attr, dict[key]);
      }
    });

    document.documentElement.lang = lang;

    // Update LinkedIn URL
    const linkedinLink = document.getElementById('linkedin-link');
    if (linkedinLink) {
      const urlAttr = lang === 'en' ? 'data-url-en' : 'data-url-fr';
      const newUrl = linkedinLink.getAttribute(urlAttr);
      if (newUrl) linkedinLink.href = newUrl;
    }

    // Update CV links
    const cvElements = ['cv-download-top','cv-download-bottom','pdf-object','pdf-iframe'];
    cvElements.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const urlAttr = lang === 'en' ? 'data-url-en' : 'data-url-fr';
      const newUrl = el.getAttribute(urlAttr);
      if (!newUrl) return;

      if (id === 'pdf-object') el.setAttribute('data', newUrl);
      else if (id === 'pdf-iframe') el.setAttribute('src', newUrl);
      else el.href = newUrl;
    });

    // Update hero download link
    const heroLink = document.querySelector('a.btn[href$=".pdf"][download]');
    if (heroLink) {
      const urlAttr = lang === 'en' ? 'data-url-en' : 'data-url-fr';
      const newUrl = heroLink.getAttribute(urlAttr);
      if (newUrl) heroLink.href = newUrl;
    }
  }

  // ======== Initialisation ========
  function init() {
    // Thème
    applyTheme(getPreferredTheme());
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(STORAGE_THEME, newTheme);
      });
    }

    // Langue
    applyI18n(getPreferredLang());
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const current = document.documentElement.lang;
        const next = current === 'fr' ? 'en' : 'fr';
        applyI18n(next);
        localStorage.setItem(STORAGE_LANG, next);
        window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang: next } }));
      });
    }
  }

  // Chargement DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
