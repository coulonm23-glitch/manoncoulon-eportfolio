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
      subtitle: 'E-Portfolio',
	  'btn.accueil' : 'Accueil',
	  'btn.ingenierie' : "Cours d'ingénierie",
	  'btn.mob':'Mobilité',
	  'btn.civique' : 'Engagement civique',
	  'btn.sport' : 'Sports & Activités',
	  'btn.dev' : 'Développement de carrière',
	  'btn.contact' : 'Contact',
      'nav.accueil': 'Accueil',
      'nav.cv': 'CV',
      'nav.hobbies': 'Centres d\'intérêt',
      'nav.engagement': 'Engagement civique',
      'engagement.intro': "Mes actions dans le bénévolat, l'événementiel, le service communautaire et les projets citoyens.",
      'engagement1.title': 'Volontariat sportif – Ligue des Nations de Volley (Aix-en-Provence, 2018)',
      'engagement1.description': 'Participation à un événement international (ramasseuse de balle, accueil du public).<br>Esprit d’équipe, sens du service, responsabilité.<br>Accueil du public et assistance logistique pendant la compétition.',
      'engagement2.title': 'Volontaire – Jeux Olympiques de Paris 2024',
      'engagement2.description': 'Accueil, orientation et accompagnement des spectateurs (français et étrangers).<br>Mise en avant de qualités humaines : diplomatie, écoute, gestion du stress, adaptabilité.<br>Contribution à un événement d’intérêt national et collectif.<br>Accueil et information des spectateurs, gestion de situations variées, médiation et communication interculturelle.',
      'nav.mobilite': 'Mobilité',
      'nav.contact': 'Contact',
      'sections.accueil': 'Accueil',
      'sections.cv': 'CV',
      'sections.experiences': 'Expériences',
      'sections.hobbies': 'Sport & Activités',
      'sections.contact': 'Contact',
      'accueil.intro1': 'Bonjour, je suis',
      'accueil.intro2': "J'ai 20 ans et je suis actuellement étudiant en première année d'ingénierie à l'ENSEEIHT à Toulouse, avec une spécialisation en électronique, énergie électrique et automatisation(3EA). J'ai toujours été passionné par la manière dont les systèmes intelligents et les technologies renouvelables peuvent fonctionner ensemble pour façonner un monde plus durable et plus connecté.",
      'facts.domain': 'Domaine',
	  'facts1.domain': "Étudiante en 1ère année à l'ENSEEIHT",
      'facts.skills': 'Compétences clés',
      'facts.skills.list1': "Qualité d'écoute",
      'facts.skills.list2': "Esprit d'équipe",
      'facts.skills.list3': 'Autonomie',
      'facts.skills.list4': 'Être organisée',
      'facts.location': 'Localisation',
      'cta.viewCv': 'Voir mon CV',
      'cta.download': 'Télécharger le CV (PDF)',
      'cta.downloadShort': 'Télécharger le CV',
      'languages.title': 'Langues',
      'languages.english': '🇬🇧 Anglais : niveau B2',
      'languages.spanish': '🇪🇸 Espagnol : niveau B1',
      'exp.stage3.title': 'Stage de 3ème (2020)',
      'exp.stage3.description': "Première immersion dans le monde professionnel, découverte des métiers et de l'environnement de travail.Découverte du fonctionnement global d’une entreprise technologique et de la gestion de projet industriel.<br> Observation de plusieurs métiers : ingénierie, contrôle qualité, méthodes, production et logistique. <br> Initiation aux outils professionnels : logiciel SAP, CAO (Pro-Engineer), instruments de mesure et de test.<br> Développement de qualités d’écoute, de rigueur, de curiosité et d’adaptation en milieu professionnel. <br>",
	  'ingenierie.item1.title' : 'Projet scientifique – Transition énergétique (TIPE)',
	  'ingenierie.item1.description' : "Projet axé sur les énergies renouvelables et la transition écologique.<br> Recherche de solutions pour améliorer le rendement et réduire les pertes énergétiques.<br> Étude de l’influence de la température sur les performances des panneaux photovoltaïques et des solutions de refroidissement.<br> Etude de l'influence néfaste de la température sur les performances des panneaux photovoltaïques<br> Mesures expérimentales <br> Interprétation, comparaison et validation de résultats expérimentaux par rapport aux modèles théoriques<br>",			  
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
      'hobbies.piano.description': 'Pratique du piano classique et moderne. Participation à des concerts et reaccueils.',
      'hobbies.hiking.title': 'Randonnée',
      'hobbies.hiking.duration': 'Depuis plusieurs années',
      'hobbies.hiking.description': 'Passion pour la randonnée en montagne et la découverte de nouveaux paysages. Exploration des sentiers pyrénéens.',
      'elevator.title': 'Elevator Speech',
      'elevator.intro': 'Découvrez mes atouts professionnels et mes inspirations en quelques minutes :',
      'elevator.videoTitle': 'Vidéo de accueil professionnelle',
      'elevator.fallback': 'Votre navigateur ne supporte pas la lecture vidéo.',
      'elevator.download': 'Téléchargez la vidéo',
      'elevator.note': 'Durée : ~3 minutes • Format : MP4',
	  'mobilite.subtitle': 'Projets futurs',
	  'mobilite.destination1.title' : "Pays d'Europe du Nord (Danemark, la Suède, la Norvège ou les Pays-Bas)",
	  'mobilite.destination1.description' :"Pour découvrir une approche concrète et avancée des réseaux d’énergie intelligents dans des pays leaders en matière de durabilité.",
	  'mobilite.destination2.title' :'Canada',
	  'mobilite.destination2.description' : "Pour approfondir les compétences techniques et scientifiques en IA et systèmes embarqués dans un environnement de recherche réputé et stimulant. Notamment Montréal, Toronto ou Vancouver, qui sont reconnus internationalement pour leurs recherches en intelligence artificielle et en technologies embarquées.",
	  'futur.description1': "En effet, l'ingénierie ne concerne pas seulement la science et la technologie, mais aussi les personnes, le progrès et les objectifs. En apprenant auprès de professionnels inspirants et en travaillant sur des projets internationaux, j'espère contribuer à un avenir",
	  'futur.description2': "plus propre, plus intelligent et plus connecté."
	  
    },
    en: {
      name: 'Manon Coulon',
      subtitle: 'E-Portfolio',
      'nav.accueil': 'About',
	  'btn.accueil' : 'Home',
	  'btn.ingenierie' : "Engineering Courses",
	  'btn.mob':'Mobility',
	  'btn.civique' : 'Civic Engagement ',
	  'btn.sport' : 'Sports & Activities',
	  'btn.dev' : 'Career Development',
	  'btn.contact' : 'Contact',
      'nav.cv': 'Resume',
      'nav.hobbies': 'Hobbies',
      'nav.engagement': 'Civic engagement',
      'sections.engagement': 'Civic engagement',
      'engagement.intro': 'My involvement in volunteering, events, community service, and civic projects.',
      'engagement1.title': 'Sports volunteering – Volleyball Nations League (Aix-en-Provence, 2018)',
      'engagement1.description': 'Participation in an international event (ball retriever, audience welcome).<br>Team spirit, service attitude, responsibility.<br>Audience welcome and logistical support during the competition.',
      'engagement2.title': 'Volunteer – Paris 2024 Olympic Games',
      'engagement2.description': 'Welcoming, guiding and assisting spectators (French and international).<br>Showcasing human qualities: diplomacy, listening, stress management, adaptability.<br>Contribution to a national and collective event.<br>Welcoming and informing spectators, managing various situations, intercultural mediation.',
      'nav.mobilite': 'Mobility',
      'nav.contact': 'Contact',
      'sections.accueil': 'Home',
      'sections.cv': 'Resume',
      'sections.experiences': 'Experiences',
      'sections.hobbies': 'Hobbies',
      'sections.contact': 'Contact',
      'accueil.intro1': 'Hello, my name is',
      'accueil.intro2': 'I’m 20 years old, and I’m currently a first-year engineering student at ENSEEIHT in Toulouse, specializing in Electronics, Electrical Energy and Automation(3EA). I’ve always been passionate about how intelligent systems and renewable technologies can work together to shape a more sustainable and connected world.',
      'facts.domain': 'Field',
	  'facts1.domain': "1st year student et ENSEEIHT",
      'facts.skills': 'Key skills',
      'facts.skills.list1': 'Good listening skills',
      'facts.skills.list2': 'Team spirit',
      'facts.skills.list3': 'Autonomy',
      'facts.skills.list4': 'Organized and methodical',
      'facts.location': 'Location',
      'cta.viewCv': 'View my resume',
      'cta.download': 'Download resume (PDF)',
      'cta.downloadShort': 'Download resume',
      'languages.title': 'Languages',
      'languages.english': '🇬🇧 English: B2 level',
      'languages.spanish': '🇪🇸 Spanish: B1 level',
      'exp.stage3.title': 'Middle school internship(2020)',
      'exp.stage3.description': "First immersion in the professional world, discovering different professions and the work environment. Discovering the overall functioning of a technology company and industrial project management.<br> Observing several professions: engineering, quality control, methods, production, and logistics. <br> Introduction to professional tools: SAP software, CAD (Pro-Engineer), measurement and testing instruments.<br> Development of listening skills, rigor, curiosity, and adaptability in a professional environment. <br>",
      'ingenierie.item1.title': 'Scientific project – Energy transition (TIPE)',
      'ingenierie.item1.description': "Project focused on renewable energies and ecological transition.<br> Search for solutions to improve efficiency and reduce energy losses. <br> Study of the influence of temperature on the performance of photovoltaic panels and cooling solutions.<br> Study of the adverse influence of temperature on the performance of photovoltaic panels<br> Experimental measurements <br> Interpretation, comparison, and validation of experimental results against theoretical models<br>",		
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
      'elevator.title': 'Elevator Speech',
      'elevator.intro': 'Discover my professional strengths and inspirations in a few minutes:',
      'elevator.videoTitle': 'Professional accueil video',
      'elevator.fallback': 'Your browser does not support video playback.',
      'elevator.download': 'Download video',
      'elevator.note': 'Duration: ~3 minutes • Format: MP4',
	  'mobilite.subtitle': 'Future projects',
	  'mobilite.destination1.title' : "Northern European countries (Denmark, Sweden, Norway, or the Netherlands)",
	  'mobilite.destination1.description' :"To discover a concrete and advanced approach to smart energy networks in countries that are leaders in sustainability.",
	  'mobilite.destination2.title' :'Canada',
	  'mobilite.destination2.description' : "To deepen technical and scientific skills in AI and embedded systems in a renowned and stimulating research environment. Notably Montreal, Toronto, or Vancouver, which are internationally recognized for their research in artificial intelligence and embedded technologies.",
	  'futur.description1': "Indeed engineering is not only about science and technology, but also about people, progress, and purpose. By learning from inspiring professionals and working on global projects, I hope to contribute to a",
	  'futur.description2': " cleaner, smarter, and more connected future."
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
