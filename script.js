// Portfolio language switch and shared interactions.
const translations = {
  "nav.home": {
    "de": "Start",
    "en": "Home"
  },
  "nav.about": {
    "de": "Über mich",
    "en": "About"
  },
  "nav.projects": {
    "de": "Projekte",
    "en": "Projects"
  },
  "nav.contact": {
    "de": "Kontakt",
    "en": "Contact"
  },
  "home.hero.kicker": {
    "de": "Automatisierung · Machine Learning · Industrie 4.0",
    "en": "Industrial Automation · Machine Learning · Industry 4.0"
  },
  "home.hero.text": {
    "de": "Ich studiere derzeit Interactive Technologies mit Schwerpunkt Industrie 4.0 an der FH St. Pölten. Besonders interessieren mich Automatisierung, Machine Learning, Prozessanalyse und die Entwicklung digitaler Lösungen für industrielle Anwendungen.",
    "en": "I am currently studying Interactive Technologies with a focus on Industry 4.0 at the University of Applied Sciences St. Pölten. My interests include industrial automation, machine learning, process data analysis and the development of data-driven solutions for industrial applications."
  },
  "home.hero.projects": {
    "de": "Projekte ansehen",
    "en": "View Projects"
  },
  "home.hero.about": {
    "de": "Über mich",
    "en": "About Me"
  },
  "home.about.label": {
    "de": "ÜBER MICH",
    "en": "ABOUT"
  },
  "home.projects.label": {
    "de": "PROJEKTE",
    "en": "PROJECTS"
  },
  "home.contact.label": {
    "de": "KONTAKT",
    "en": "CONTACT"
  },
  "home.about.lead": {
    "de": "Meine Arbeit verbindet Automatisierung, Elektrotechnik und Produktion. Dabei setze ich Machine Learning und Prozessanalyse dort ein, wo sie im industriellen Alltag einen konkreten Mehrwert schaffen können.",
    "en": "My work sits at the intersection of industrial automation, electrical engineering and manufacturing, applying machine learning and process data analysis to build data-driven solutions for Industry 4.0."
  },
  "home.about.text": {
    "de": "Besonders spannend finde ich die Frage, wie sich aus komplexen Prozessdaten verständliche und nutzbare Erkenntnisse gewinnen lassen. Dazu gehören für mich das Analysieren von Zeitreihen, das Erkennen von Auffälligkeiten und die praktische Verbesserung von Produktionsprozessen.",
    "en": "I focus on turning complex industrial process data into actionable insight: understanding multivariate time-series, detecting anomalies, and contributing to the optimization of real production systems through practical, methodologically sound approaches."
  },
  "home.interests.title": {
    "de": "INTERESSENSGEBIETE",
    "en": "AREAS OF INTEREST"
  },
  "home.interests.1": {
    "de": "Automatisierung",
    "en": "Industrial Automation"
  },
  "home.interests.2": {
    "de": "Machine Learning",
    "en": "Machine Learning"
  },
  "home.interests.3": {
    "de": "Zeitreihenanalyse",
    "en": "Time Series Analysis"
  },
  "home.interests.4": {
    "de": "Industrielle Prozessdaten",
    "en": "Industrial Data"
  },
  "home.interests.5": {
    "de": "Anomalieerkennung",
    "en": "Anomaly Detection"
  },
  "home.interests.6": {
    "de": "Prozessoptimierung",
    "en": "Process Optimization"
  },
  "home.interests.7": {
    "de": "Industrie 4.0",
    "en": "Industry 4.0"
  },
  "home.timeline.title": {
    "de": "WERDEGANG",
    "en": "CAREER TIMELINE"
  },
  "home.timeline.subtitle": {
    "de": "Ausbildung und Berufserfahrung",
    "en": "Education and professional experience"
  },
  "home.timeline.1.date": {
    "de": "2025 — HEUTE",
    "en": "2025 — PRESENT"
  },
  "home.timeline.1.type": {
    "de": "AUSBILDUNG",
    "en": "EDUCATION"
  },
  "home.timeline.1.title": {
    "de": "Master Interactive Technologies",
    "en": "Master Interactive Technologies"
  },
  "home.timeline.1.desc": {
    "de": "FH St. Pölten · Schwerpunkt Industrie 4.0 mit Fokus auf vernetzte Produktionssysteme sowie die Konzeption und Umsetzung digitaler Lösungen für industrielle Anwendungen.",
    "en": "University of Applied Sciences St. Pölten · Focus on Industry 4.0 systems and the conception and implementation of digital industrial solutions."
  },
  "home.timeline.2.date": {
    "de": "2025 — HEUTE",
    "en": "2025 — PRESENT"
  },
  "home.timeline.2.type": {
    "de": "BERUF",
    "en": "WORK"
  },
  "home.timeline.2.title": {
    "de": "Manufacturing Technician",
    "en": "Manufacturing Technician"
  },
  "home.timeline.2.desc": {
    "de": "TE Connectivity, Waidhofen/Thaya · Betreuung von Produktionsplanungssystemen, SAP und HYDRA, Stammdatenmanagement, IBP sowie Mitarbeit an Digitalisierungsprojekten.",
    "en": "TE Connectivity, Waidhofen/Thaya · Production planning systems, SAP and HYDRA, master data management, IBP and digitalization projects."
  },
  "home.timeline.3.date": {
    "de": "2022 — 2025",
    "en": "2022 — 2025"
  },
  "home.timeline.3.type": {
    "de": "AUSBILDUNG",
    "en": "EDUCATION"
  },
  "home.timeline.3.title": {
    "de": "BSc Smart Engineering",
    "en": "BSc Smart Engineering"
  },
  "home.timeline.3.desc": {
    "de": "FH St. Pölten · Abschluss mit Auszeichnung. Bachelorarbeit zur automatisierten Reglerparametrierung mit neuronalen Netzen.",
    "en": "University of Applied Sciences St. Pölten · Graduated Cum Laude. Thesis: Neural networks for automated controller parameterization."
  },
  "home.timeline.4.date": {
    "de": "2021 — 2025",
    "en": "2021 — 2025"
  },
  "home.timeline.4.type": {
    "de": "AUSBILDUNG + BERUF",
    "en": "EDUCATION + WORK"
  },
  "home.timeline.4.title": {
    "de": "Lehre Elektrotechnik",
    "en": "Electrical Engineering Apprenticeship"
  },
  "home.timeline.4.desc": {
    "de": "TE Connectivity & LBS Amstetten · Elektrotechnik, SPS- und Mikrocontrollerprogrammierung, EPLAN, Anlagenwartung und Mitarbeit an Prozessverbesserungen.",
    "en": "TE Connectivity & LBS Amstetten · Electrical engineering, PLC and microcontroller programming, EPLAN, equipment maintenance and process improvement."
  },
  "home.timeline.5.date": {
    "de": "2013 — 2021",
    "en": "2013 — 2021"
  },
  "home.timeline.5.type": {
    "de": "AUSBILDUNG",
    "en": "EDUCATION"
  },
  "home.timeline.5.title": {
    "de": "Matura",
    "en": "General Qualification for University Entrance"
  },
  "home.timeline.5.desc": {
    "de": "Bundesgymnasium Gmünd, Österreich.",
    "en": "Bundesgymnasium Gmünd, Austria."
  },
  "home.project.tags": {
    "de": "FORSCHUNGSPROJEKT · INDUSTRIE 4.0 · MACHINE LEARNING",
    "en": "RESEARCH PROJECT · INDUSTRY 4.0 · MACHINE LEARNING"
  },
  "home.project.title": {
    "de": "Machine-Learning-basierte Anomalieerkennung in industriellen Stoßöfen",
    "en": "Machine Learning Based Anomaly Detection in Industrial Pusher Furnaces"
  },
  "home.project.desc": {
    "de": "Untersuchung geeigneter Machine-Learning-Methoden zur Erkennung von Anomalien in multivariaten Zeitreihendaten eines industriellen Stoßofens.",
    "en": "Research on suitable machine learning methods for detecting anomalies in multivariate industrial time-series data from an industrial pusher furnace."
  },
  "home.project.link": {
    "de": "Projekt ansehen",
    "en": "View Project"
  },
  "home.contact.text": {
    "de": "Für Austausch zu Forschung, Zusammenarbeit oder datenbasierten Industrieprojekten freue ich mich über eine Nachricht.",
    "en": "Get in touch about research, collaboration or industrial data-driven projects."
  },
  "project.back": {
    "de": "← ZURÜCK ZU DEN PROJEKTEN",
    "en": "← BACK TO PROJECTS"
  },
  "project.eyebrow": {
    "de": "PROJEKT 01 · FORSCHUNGSPROJEKT · INDUSTRIE 4.0 · MACHINE LEARNING",
    "en": "PROJECT 01 · RESEARCH PROJECT · INDUSTRY 4.0 · MACHINE LEARNING"
  },
  "project.title": {
    "de": "Machine-Learning-basierte Anomalieerkennung in industriellen Stoßöfen",
    "en": "Machine Learning Based Anomaly Detection in Industrial Pusher Furnaces"
  },
  "project.lead": {
    "de": "Untersuchung geeigneter Machine-Learning-Verfahren zur Erkennung von Anomalien in multivariaten Zeitreihendaten eines industriellen Stoßofens.",
    "en": "Research on suitable machine learning methods for detecting anomalies in multivariate industrial time-series data from an industrial pusher furnace."
  },
  "project.meta.id": {
    "de": "PROJEKT ID",
    "en": "PROJECT ID"
  },
  "project.meta.id.value": {
    "de": "01",
    "en": "01"
  },
  "project.meta.date": {
    "de": "JAHR",
    "en": "DATE"
  },
  "project.meta.date.value": {
    "de": "2026",
    "en": "2026"
  },
  "project.meta.type": {
    "de": "TYP",
    "en": "TYPE"
  },
  "project.meta.type.value": {
    "de": "Forschungsprojekt",
    "en": "Research Project"
  },
  "project.meta.status": {
    "de": "STATUS",
    "en": "STATUS"
  },
  "project.meta.status.value": {
    "de": "Abgeschlossen",
    "en": "Completed"
  },
  "project.fig1": {
    "de": "Abb. 1 · Schematische Darstellung des betrachteten Stoßofenprozesses mit Materialfluss, Heizzonen und Prozessphasen.",
    "en": "Fig. 1 · Schematic representation of the considered pusher furnace process with material flow, heating zones and process phases."
  },
  "project.fig2": {
    "de": "Abb. 2 · Modellgruppen, die für die Anomalieerkennung in Zeitreihendaten betrachtet wurden.",
    "en": "Fig. 2 · Model groups considered for anomaly detection in time-series data."
  },
  "project.fig3": {
    "de": "Abb. 3 · Ablauf des Modellvergleichs von der Literaturrecherche bis zu den priorisierten Modellen.",
    "en": "Fig. 3 · Model comparison workflow from literature review to prioritized models."
  },
  "project.fig4": {
    "de": "Abb. 4 · Zusammenfassung der drei priorisierten Modelle für den Stoßofenprozess.",
    "en": "Fig. 4 · Summary of the three prioritized models for the pusher furnace process."
  },
  "project.context.label": {
    "de": "KONTEXT",
    "en": "CONTEXT"
  },
  "project.context.text": {
    "de": "Industrielle Stoßöfen erzeugen große Mengen an Prozessdaten aus Temperatur-, Gas- und Luftregelung. Auffälliges Prozessverhalten darin manuell zu erkennen, ist aufgrund der Datenmenge und der komplexen Zeitreihen nur schwer praktikabel.",
    "en": "Industrial pusher furnaces generate large amounts of process data from temperature, gas and air control systems. Detecting abnormal process behavior manually is difficult because of the amount and complexity of the available time-series data."
  },
  "project.challenge.label": {
    "de": "HERAUSFORDERUNG",
    "en": "CHALLENGE"
  },
  "project.challenge.text": {
    "de": "Eindeutig gelabelte Anomalien stehen nur in begrenztem Umfang zur Verfügung. Im Mittelpunkt standen deshalb Verfahren, die das Normalverhalten aus den vorhandenen Daten lernen und auch bislang unbekannte Abweichungen erkennen können.",
    "en": "Only a limited number of clearly labelled anomalies are available. Therefore, the research focused on machine learning approaches that can learn normal process behaviour and detect previously unknown deviations."
  },
  "project.approach.title": {
    "de": "Vorgehensweise",
    "en": "Research Approach"
  },
  "project.approach.intro": {
    "de": "In einem strukturierten Auswahlprozess wurden zunächst 12 mögliche Ansätze betrachtet. Sechs Modelle wurden anschließend detailliert verglichen, daraus wurden drei Verfahren für die praktische Erprobung priorisiert.",
    "en": "A structured evaluation process was used to review 12 potential approaches, select six models for detailed comparison and prioritize three models for subsequent practical testing."
  },
  "project.approach.step1": {
    "de": "Literaturrecherche",
    "en": "Literature Research"
  },
  "project.approach.step2": {
    "de": "Modell-Longlist",
    "en": "Model Longlist"
  },
  "project.approach.step3": {
    "de": "Modellauswahl",
    "en": "Model Selection"
  },
  "project.approach.step4": {
    "de": "Bewertungskriterien",
    "en": "Evaluation Criteria"
  },
  "project.approach.step5": {
    "de": "Modellvergleich",
    "en": "Model Comparison"
  },
  "project.approach.step6": {
    "de": "Priorisierte Modelle",
    "en": "Prioritized Models"
  },
  "project.models.heading": {
    "de": "MODELLE IM VERGLEICH",
    "en": "MODELS SELECTED FOR COMPARISON"
  },
  "project.criteria.heading": {
    "de": "BEWERTUNGSKRITERIEN",
    "en": "EVALUATION CRITERIA"
  },
  "project.criteria.1": {
    "de": "Umgang mit ungelabelten Daten",
    "en": "Handling of unlabeled data"
  },
  "project.criteria.2": {
    "de": "Erkennung seltener und unbekannter Anomalien",
    "en": "Detection of rare and unknown anomalies"
  },
  "project.criteria.3": {
    "de": "Robustheit",
    "en": "Robustness"
  },
  "project.criteria.4": {
    "de": "Interpretierbarkeit",
    "en": "Interpretability"
  },
  "project.criteria.5": {
    "de": "Verarbeitung multivariater Zeitreihendaten",
    "en": "Processing of multivariate time-series data"
  },
  "project.criteria.6": {
    "de": "Rechenaufwand",
    "en": "Computational effort"
  },
  "project.criteria.7": {
    "de": "Parametrierungsaufwand",
    "en": "Parameterization effort"
  },
  "project.criteria.8": {
    "de": "Skalierbarkeit",
    "en": "Scalability"
  },
  "project.comparison.title": {
    "de": "Modellvergleich",
    "en": "Model Comparison"
  },
  "project.comparison.intro": {
    "de": "Die sechs ausgewählten Modelle wurden anhand der für den industriellen Einsatz relevanten Anforderungen bewertet. Die Matrix zeigt die Einschätzung der einzelnen Verfahren je Kriterium.",
    "en": "The six selected models were assessed against industrial requirements. The matrix below maps each criterion against the candidate models."
  },
  "project.matrix.criterion": {
    "de": "KRITERIUM",
    "en": "CRITERION"
  },
  "project.matrix.row1": {
    "de": "Leistungsfähigkeit",
    "en": "Performance"
  },
  "project.matrix.row2": {
    "de": "Genauigkeit & Fehlalarme",
    "en": "Accuracy & false alarms"
  },
  "project.matrix.row3": {
    "de": "Seltene & unbekannte Anomalien",
    "en": "Rare & unknown anomalies"
  },
  "project.matrix.row4": {
    "de": "Ungelabelte Daten",
    "en": "Unlabeled data"
  },
  "project.matrix.row5": {
    "de": "Robustheit",
    "en": "Robustness"
  },
  "project.matrix.row6": {
    "de": "Stabilität",
    "en": "Stability"
  },
  "project.matrix.row7": {
    "de": "Interpretierbarkeit",
    "en": "Interpretability"
  },
  "project.matrix.row8": {
    "de": "Multivariate Daten",
    "en": "Multivariate data"
  },
  "project.matrix.row9": {
    "de": "Parametrierungsaufwand",
    "en": "Parameterization effort"
  },
  "project.matrix.row10": {
    "de": "Skalierbarkeit / Erweiterbarkeit",
    "en": "Scalability / extensibility"
  },
  "project.legend.plus": {
    "de": "+ gute Eignung",
    "en": "+ strong fit"
  },
  "project.legend.zero": {
    "de": "0 mittlere Eignung",
    "en": "0 moderate fit"
  },
  "project.legend.minus": {
    "de": "− eingeschränkte Eignung",
    "en": "− limited fit"
  },
  "project.results.title": {
    "de": "Ergebnisse",
    "en": "Results"
  },
  "project.results.1.model": {
    "de": "Modell 01",
    "en": "Model 01"
  },
  "project.results.1.roleLabel": {
    "de": "ROLLE",
    "en": "ROLE"
  },
  "project.results.1.strengthLabel": {
    "de": "STÄRKEN",
    "en": "STRENGTHS"
  },
  "project.results.1.role": {
    "de": "Bevorzugter Ansatz für eine erste praktische Umsetzung.",
    "en": "Preferred model for a first practical implementation."
  },
  "project.results.1.strength": {
    "de": "Effizient, für ungelabelte Daten gut geeignet und auf weitere Ofenzonen und Prozessphasen übertragbar.",
    "en": "Efficient, suitable for unlabeled data and transferable to different furnace zones and process phases."
  },
  "project.results.2.model": {
    "de": "Modell 02",
    "en": "Model 02"
  },
  "project.results.2.roleLabel": {
    "de": "ROLLE",
    "en": "ROLE"
  },
  "project.results.2.strengthLabel": {
    "de": "STÄRKEN",
    "en": "STRENGTHS"
  },
  "project.results.2.role": {
    "de": "Ergänzendes Vergleichsmodell.",
    "en": "Complementary comparison model."
  },
  "project.results.2.strength": {
    "de": "Lernt den Bereich des Normalverhaltens und kann dadurch auch bislang unbekannte Abweichungen erkennen.",
    "en": "Learns a representation of normal process behaviour and can identify previously unknown deviations."
  },
  "project.results.3.model": {
    "de": "Modell 03",
    "en": "Model 03"
  },
  "project.results.3.roleLabel": {
    "de": "ROLLE",
    "en": "ROLE"
  },
  "project.results.3.strengthLabel": {
    "de": "STÄRKEN",
    "en": "STRENGTHS"
  },
  "project.results.3.role": {
    "de": "Weiterführender Ansatz für komplexere Prozessmuster.",
    "en": "Advanced approach for more complex process patterns."
  },
  "project.results.3.strength": {
    "de": "Kann nichtlineare Zusammenhänge zwischen mehreren Prozessgrößen abbilden.",
    "en": "Can model nonlinear relationships between multiple process variables."
  },
  "project.foundation": {
    "de": "Diese Forschungsarbeit bildet die theoretische und methodische Grundlage für die anschließenden praktischen Modelltests mit realen industriellen Prozessdaten.",
    "en": "This research represents the theoretical and methodological foundation for subsequent practical model tests on real industrial process data."
  },
  "project.tech.title": {
    "de": "Technologien und Methoden",
    "en": "Technologies and Methods"
  },
  "project.tech.1": {
    "de": "Machine Learning",
    "en": "Machine Learning"
  },
  "project.tech.2": {
    "de": "Python",
    "en": "Python"
  },
  "project.tech.3": {
    "de": "Anomalieerkennung",
    "en": "Anomaly Detection"
  },
  "project.tech.4": {
    "de": "Zeitreihen",
    "en": "Time Series"
  },
  "project.tech.5": {
    "de": "Industrielle Prozessdaten",
    "en": "Industrial Data"
  },
  "project.tech.6": {
    "de": "Industrie 4.0",
    "en": "Industry 4.0"
  },
  "project.tech.7": {
    "de": "Forschung",
    "en": "Research"
  }
};

const pageMeta = {
  home: {
    de: { title: 'Laila Gruber · Portfolio', description: 'Portfolio von Laila Gruber mit Fokus auf Automatisierung, Machine Learning und Industrie 4.0.' },
    en: { title: 'Laila Gruber · Portfolio', description: 'Laila Gruber portfolio focused on industrial automation, machine learning and Industry 4.0.' }
  },
  project: {
    de: { title: 'Projekt 01 · Laila Gruber', description: 'Machine-Learning-basierte Anomalieerkennung in industriellen Stoßöfen · Forschungsprojekt von Laila Gruber.' },
    en: { title: 'Project 01 · Laila Gruber', description: 'Machine Learning Based Anomaly Detection in Industrial Pusher Furnaces · Research project by Laila Gruber.' }
  }
};

function applyLanguage(lang) {
  const selected = lang === 'en' ? 'en' : 'de';
  document.documentElement.lang = selected;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[key]?.[selected];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('.lang-btn').forEach(button => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const page = document.body.dataset.page;
  const meta = pageMeta[page]?.[selected];
  if (meta) {
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.description);
  }

}


const LANGUAGE_STORAGE_KEY = 'portfolioLanguageV2';
const DEFAULT_LANGUAGE = 'en';

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === 'de' || saved === 'en' ? saved : DEFAULT_LANGUAGE;
  } catch (error) {
    return DEFAULT_LANGUAGE;
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // The language switch still works if storage is unavailable.
  }
}

const originalApplyLanguage = applyLanguage;
applyLanguage = function(lang) {
  const selected = lang === 'de' ? 'de' : 'en';
  originalApplyLanguage(selected);
  saveLanguage(selected);
};

applyLanguage(getSavedLanguage());

document.addEventListener('click', event => {
  const button = event.target.closest('.lang-btn[data-lang]');
  if (!button) return;
  event.preventDefault();
  applyLanguage(button.dataset.lang);
});

// Keep the footer year current.
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Update the active navigation item while scrolling on the home page.
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

if (sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

