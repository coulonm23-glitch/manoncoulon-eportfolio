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
	  'btn.civique' : 'Engagement civique et durable',
	  'btn.sport' : 'Sports & Activités',
	  'btn.dev' : 'Développement de carrière',
	  'btn.contact' : 'Contact',
      'nav.accueil': 'Accueil',
      'nav.cv': 'CV',
      'nav.hobbies': 'Centres d\'intérêt',
      'nav.engagement': 'Engagement civique et durable',
      'engagement.intro': "Mes actions dans le bénévolat, l'événementiel, le service communautaire et les projets citoyens.",
      'engagement1.title': 'Volontariat sportif – Ligue des Nations de Volley (Aix-en-Provence, 2018)',
      'engagement1.description1': 'Participation à un événement international (ramasseuse de balle).',
      'engagement1.description2': 'Esprit d’équipe, sens du service, responsabilité.',
	  'engagement1.description3': 'Accueil du public et assistance logistique pendant la compétition.',
	  'engagement2.title': 'Volontaire – Jeux Olympiques de Paris 2024',
      'engagement2.description1': 'Accueil, orientation et accompagnement des spectateurs (français et étrangers).',
	  'engagement2.description2': 'Mise en avant de qualités humaines : diplomatie, écoute, gestion du stress, adaptabilité.',
      'engagement2.description3': 'Contribution à un événement d’intérêt national et collectif.',
	  'engagement3.title': "Projet solidaire – Voyage humanitaire au Chili (été 2026)",
	  'engagement3.description1' : "Projet de voyage solidaire avec le club <strong>Human7</strong> visant à <strong>aider, tutorer et sensibiliser des enfants</strong> dans des écoles ou des orphelinats au Chili.",
	  'engagement3.description2' : "Objectifs : favoriser l’accès à l’éducation, encourager l’ouverture culturelle et renforcer les valeurs de solidarité internationale.",
	  'engagement3.description3' : "Une expérience humaine et éducative centrée sur l’échange et l’entraide.",
	  	  'engagement3.infographie_intro' : "Retrouvez ci-dessous l'infographie complète du <strong>Projet Chili 2026</strong>, détaillant notre organisation, nos objectifs pédagogiques en partenariat avec l'Ambassade de France, ainsi que notre plan de financement solidaire.",
	  'nav.mobilite': 'Mobilité',
      'nav.contact': 'Contact',
      'sections.accueil': 'Accueil',
      'sections.cv': 'CV',
      'sections.experiences': 'Expériences',
      'sections.hobbies': 'Sport & Activités',
      'sections.contact': 'Contact',
      'accueil.intro1': 'Bonjour, je suis',
      'accueil.intro2': "Agée de 20 ans, je suis actuellement étudiante en première année d'ingénierie à l'<strong>ENSEEIHT</strong> à Toulouse, avec une spécialisation en électronique, énergie électrique et automatisation(3EA). J'ai toujours été passionnée par la manière dont les systèmes intelligents et les technologies renouvelables peuvent fonctionner ensemble pour façonner un monde plus durable et plus connecté.</span>",
	  'facts.domain': 'Domaine',
	  'facts1.domain': "Étudiante en 1ère année à l'ENSEEIHT",
      'facts.skills': 'Compétences clés',
      'facts.skills.list1': "Qualité d'écoute",
      'facts.skills.list2': "Esprit d'équipe",
      'facts.skills.list3': 'Autonomie',
      'facts.skills.list4': 'Organisée',
      'facts.location': 'Localisation',
      'cta.viewCv': 'Voir mon CV',
      'cta.download': 'Télécharger le CV (PDF)',
      'cta.downloadShort': 'Télécharger le CV',
      'languages.title': 'Langues',
      'languages.english': '🇬🇧 Anglais : niveau B2',
      'languages.spanish': '🇪🇸 Espagnol : niveau B1',
      'exp.stage3.title': 'Stage de 3ème (2020)',
      'exp.stage3.description': "Lors de cette première immersion dans le monde professionnel, j’ai découvert les différents métiers et l’environnement de travail au sein d’une entreprise technologique. J’ai pu observer plusieurs domaines d’activité tels que l’<strong>ingénierie</strong>, le <strong>contrôle qualité</strong>, les <strong>méthodes</strong>, la <strong>production</strong> et la <strong>logistique</strong>. J’ai également été initiée à divers outils professionnels, notamment le logiciel SAP, la conception assistée par ordinateur (Pro-Engineer). <br> Cette expérience m’a aidé à développer des qualités essentielles en milieu professionnel comme <strong>l’écoute, la rigueur, la curiosité, la capacité d’adaptation et le travail en équipe.</strong>",
	  'ingenierie.item1.title' : 'Projet scientifique – Transition énergétique (TIPE)',
	  'ingenierie.item1.description' : "Dans le cadre de mon TIPE, projet axé sur les <strong>énergies renouvelables</strong> et la <strong>transition écologique</strong>, j’ai étudié l’influence néfaste de la température sur les performances des panneaux photovoltaïques et recherché des solutions pour <strong>améliorer leur rendement et réduire les pertes énergétiques</strong>.<br> Après une analyse théorique, j’ai effectué des <strong>mesures expérimentales</strong> afin de quantifier ces effets et de tester plusieurs méthodes de refroidissement, actives et passives. J’ai ensuite <strong>interprété, comparé</strong> et <strong>validé</strong> mes résultats expérimentaux par rapport aux modèles théoriques, ce qui m’a permis de retenir deux solutions passives efficaces, alliant performance énergétique, contraintes environnementales et faisabilité technique : ",
	  'ingenierie.sol1' : "<strong>1ère solution : poser les panneaux sur les lacs</strong><br> <em>Avantages :</em> simplicité, exploitation de la fraîcheur naturelle de l’eau.<br> <em>Inconvénient :</em> efficacité très limitée.",
	  'ingenierie.sol2' : "<strong>2ème solution : ailettes de refroidissement</strong><br> <em>Avantages :</em> capacité à dissiper efficacement la chaleur.<br> <em>Inconvénients :</em> contrainte d’installation, système plus encombrant.",
	  'cv.intro': 'Vous pouvez parcourir mon CV ci‑dessous ou le',
      'cv.download': 'télécharger',
      'contact.text': 'Vous pouvez me contacter à l’adresse :',
      'contact.note': '.',
      'contact.linkedin': 'Retrouvez-moi sur LinkedIn :',
      'btn.lang': 'FR/EN',
      'aria.themeToggle': 'Basculer thème',
      'hobbies.intro': 'Mes passions et activités extra-professionnelles.',
      'hobbies.volleyball.title': 'Volley-ball',
      'hobbies.volleyball.description': "J'ai joué en club pendant <strong>12 ans</strong> :",
      'hobbies.volleyball.list1': '9 ans dans le club de Venelles (<strong>PAVVB</strong>, club professionnel féminin),',
      'hobbies.volleyball.list2': '3 ans dans le club de Velaux (<strong>CVF</strong>, <strong>National 3</strong>).',
      'hobbies.volleyball.team': "J’ai participé à de nombreuses compétitions nationales :",
      'hobbies.volleyball.national1': 'Coupes de France jeune (de M13 à M18)',
      'hobbies.volleyball.national2': 'Tournois internationaux (Hyères et Mougins, à plusieurs reprises)',
      'hobbies.volleyball.AS': "Passionnée de sport, je me suis investie dans l’AS depuis le collège jusqu’au lycée, et fais aujourd’hui partie de l’équipe féminine 1 de l’<strong>AS INP</strong>, ainsi que de l’équipe mixte engagée pour la Coupe de France.",
      'hobbies.piano.title': 'Piano',
      'hobbies.piano.description': "J'ai joué du piano pendant <strong>5 ans</strong> ainsi qu'un peu de solvège. J'ai notamment participé à des représentations.",
      'hobbies.hiking.title': 'Randonnée',
      'hobbies.hiking.description1': 'Je suis passionnée par la <strong>montagne</strong> et la découverte de nouveaux paysages, notamment les sentiers des Alpes.',
	  'hobbies.hiking.description2': 'Mon projet est de faire le <strong>GR20</strong> en Corse',
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
	  'btn.civique' : 'Sustainability & Civic Engagement ',
	  'btn.sport' : 'Sports & Activities',
	  'btn.dev' : 'Career Development',
	  'btn.contact' : 'Contact',
      'nav.cv': 'Resume',
      'nav.hobbies': 'Hobbies',
      'nav.engagement': 'Sustainability & Civic engagement',
      'sections.engagement': 'Sustainability & Civic engagement',
      'engagement.intro': 'My involvement in volunteering, events, community service, and civic projects.',
      'engagement1.title': 'Sports volunteering – Volleyball Nations League (Aix-en-Provence, 2018)',
      'engagement1.description1': 'Participation in an international event (volleyball ball girl).',
      'engagement1.description2': 'Team spirit, service attitude, responsibility.',
	  'engagement1.description3': 'Audience welcome and logistical support during the competition.',	  
	  'engagement2.title': 'Volunteer – Paris 2024 Olympic Games',
      'engagement2.description1': 'Welcoming, guiding and assisting spectators (French and international).',
	  'engagement2.description2': 'Showcasing human qualities : diplomacy, listening, stress management, adaptability.',
      'engagement2.description3': 'Contribution to a national and collective event.',  
	  'engagement3.title': "Solidarity project – Humanitarian trip to Chile (summer 2026)",
	  'engagement3.description1' : "Solidarity travel project with the <strong>Human7</strong> club aimed at <strong>helping, tutoring, and raising awareness among children</strong> in schools and orphanages in Chile.",
	  'engagement3.description2' : "Objectives : to promote access to education, encourage cultural openness, and reinforce the values of international solidarity.",
	  'engagement3.description3' : "A human and educational experience focused on exchange and mutual aid.",
	  'engagement3.infographie_intro' : "Below you will find the complete infographic for the <strong>Chile 2026 Project</strong>, detailing our organization, our educational objectives in partnership with the French Embassy, and our solidarity-based financing plan.",	
	  'nav.mobilite': 'Mobility',
      'nav.contact': 'Contact',
      'sections.accueil': 'Home',
      'sections.cv': 'Resume',
      'sections.experiences': 'Experiences',
      'sections.hobbies': 'Hobbies',
      'sections.contact': 'Contact',
      'accueil.intro1': 'Hello, my name is',
      'accueil.intro2': 'I’m 20 years old, and I’m currently a first-year engineering student at <strong>ENSEEIHT</strong> in Toulouse, specializing in Electronics, Electrical Energy and Automation(3EA). I’ve always been passionate about how intelligent systems and renewable technologies can work together to shape a more sustainable and connected world.',
      'facts.domain': 'Field',
	  'facts1.domain': "1st year student et ENSEEIHT",
      'facts.skills': 'Key skills',
      'facts.skills.list1': 'Good listening skills',
      'facts.skills.list2': 'Team spirit',
      'facts.skills.list3': 'Autonomy',
      'facts.skills.list4': 'Organized',
      'facts.location': 'Location',
      'cta.viewCv': 'View my resume',
      'cta.download': 'Download resume (PDF)',
      'cta.downloadShort': 'Download resume',
      'languages.title': 'Languages',
      'languages.english': '🇬🇧 English: B2 level',
      'languages.spanish': '🇪🇸 Spanish: B1 level',
      'exp.stage3.title': 'Middle school internship(2020)',
      'exp.stage3.description': "During this first immersion in the professional world, I discovered the different jobs and working environment within a technology company. I was able to observe several areas of activity such as <strong>engineering, quality control, methods, production</strong>, and <strong>logistics</strong>. I was also introduced to various professional tools, including SAP software and computer-aided design (Pro-Engineer). <br> This experience helped me develop essential qualities in the professional environment, such as <strong>listening, rigor, curiosity, adaptability and teamwork.</strong>.",
      'ingenierie.item1.title': 'Scientific project – Energy transition (TIPE)',
      'ingenierie.item1.description': "As part of my TIPE project, which focuses on <strong>renewable energies</strong> and the <strong>ecological transition</strong>, I studied the negative influence of temperature on the performance of photovoltaic panels and researched solutions to <strong>improve their efficiency and reduce energy losses</strong>.<br> After a theoretical analysis, I carried out <strong>experimental measurements</strong> to quantify these effects and test several active and passive cooling methods. Then, I <strong>interpreted, compared</strong>, and <strong>validated</strong> my experimental results against theoretical models, which allowed me to identify two effective passive solutions that combine energy performance, environmental constraints, and technical feasibility:",
	  'ingenierie.sol1' : "<strong>First solution: install panels on lakes</strong><br> <em>Advantages : </em> simplicity, use of the natural coolness of the water.<br> <em>Disadvantage : </em> very limited efficiency.",
	  'ingenierie.sol2' : "<strong>Second solution: cooling fins</strong><br> <em>Advantages : </em> ability to dissipate heat efficiently.<br> <em>Disadvantages : </em> installation constraints, more cumbersome system.",
	  'cv.intro': 'You can view my resume below or',
      'cv.download': 'download it',
      'contact.text': 'You can contact me at:',
      'contact.note': '.',
      'contact.linkedin': 'Find me on LinkedIn:',
      'btn.lang': 'FR/EN',
      'aria.themeToggle': 'Toggle theme',
      'hobbies.intro': 'My passions and extracurricular activities.',
      'hobbies.volleyball.title': 'Volleyball',
      'hobbies.volleyball.description': 'I have played in clubs for <strong>12 years</strong>:',
      'hobbies.volleyball.list1': '9 years in the Venelles club (<strong>PAVVB</strong>, women’s professional club),',
      'hobbies.volleyball.list2': '3 years in the Velaux club (<strong>CVF</strong>,<strong> National level in division 3)</strong>).',
      'hobbies.volleyball.team': 'I  have participated in numerous national competitions:',
      'hobbies.volleyball.national1': 'French Youth Cups (from U13 to U18)',
	  'hobbies.volleyball.national2': 'International tournaments (Hyères and Mougins, on several occasions)',
      'hobbies.volleyball.AS': "Passionate about sports, I have been involved in the AS since middle school through high school, and am now part of the <strong>AS INP</strong> women's team, as well as the mixed team competing in the Coupe de France.",
      'hobbies.piano.title': 'Piano',
      'hobbies.piano.description': "I played the piano for <strong>5 years</strong> and also a little bit of the accordion. I participated in performances.",
      'hobbies.hiking.title': 'Hiking',
	  'hobbies.hiking.description1': 'I am passionate about the <strong>mountains</strong> and discovering new landscapes, especially the trails in the Alps.',
	  'hobbies.hiking.description2': 'My plan is to hike the <strong>GR20</strong> in Corsica',
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
	  'mobilite.destination2.description' : "To deepen technical and scientific skills in AI and embedded systems in a renowned and stimulating research environment. Especially Montreal, Toronto, or Vancouver, which are internationally recognized for their research in artificial intelligence and embedded technologies.",
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
