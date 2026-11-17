const translations = {
  it: {
    page_title: "InfinityCase — I tuoi dati, sempre con te",
    description: "InfinityCase: i tuoi dati, sempre con te. Richiedi la disponibilità della versione che desideri.",
    brand_home: "InfinityCase, pagina iniziale",
    nav_project: "Il progetto",
    nav_request: "Richiedi disponibilità",
    main_nav_label: "Navigazione principale",
    language_label: "Seleziona lingua",
    hero_alt: "Confezione InfinityCase aperta con custodia bianca per smartphone",
    eyebrow: "Più spazio. Più libertà. Più privacy.",
    hero_title: "I tuoi dati.<br><span>Sempre con te.</span>",
    intro: "Dimentica i limiti di spazio sul telefono. InfinityCase è pensata per portare i tuoi dati con te, senza abbonamenti e mantenendo il controllo delle tue informazioni.",
    hero_cta: "Scopri la disponibilità",
    features_label: "Caratteristiche di InfinityCase",
    feature_space: "Più spazio",
    feature_subscription: "Senza abbonamenti",
    feature_control: "Più controllo",
    project_eyebrow: "Un progetto indipendente",
    project_title: "Nato a Pisa.<br>Costruito insieme.",
    project_p1: "InfinityCase è realizzato da studenti dell'Università di Pisa.",
    project_p2: "Le versioni dipendono dalla produzione: non tutti i modelli di telefono potrebbero essere già stati realizzati o essere disponibili.",
    request_eyebrow: "Il prossimo passo",
    request_title: "Verifica la disponibilità per il tuo telefono.",
    request_copy: "Indicaci il modello che ti interessa: ti ricontatteremo via email indicando le versioni e le colorazioni disponibili per il modello richiesto. Verranno indicati anche costo, tempi di consegna e altre informazioni relative alla procedura di acquisto.",
    request_assurance: "ATTENZIONE: La compilazione del seguente modulo NON comporta alcun obbligo di acquisto.",
    form_title: "Richiedi disponibilità",
    form_intro: "Compila il modulo per ricevere aggiornamenti.",
    name_label: "Nome e cognome",
    name_placeholder: "Il tuo nome",
    email_label: "Indirizzo email",
    email_title: "Inserisci un indirizzo email valido, ad esempio nome@dominio.it",
    model_label: "Versione desiderata",
    model_select: "Seleziona il tuo modello",
    other_model: "Altro modello",
    submit: "RICHIEDI DISPONIBILITÀ",
    privacy: "L'invio del modulo non comporta alcun obbligo di acquisto.",
    footer_rights: "© 2026 InfinityCase · Tutti i diritti riservati",
    back_top: "Torna su ↑",
    thank_title: "Richiesta non inviata — InfinityCase",
    thank_eyebrow: "Richiesta non inviata",
    thank_p1: "Il fatto che tu sia arrivato fino a qui ci rende molto felici. Questo è un esperimento e il prodotto non è ancora disponibile, non abbiamo raccolto nessuno dei tuoi dati personali quindi non verrai ricontattato.",
    thank_p2: "Ci spiace che tu non possa ricevere ciò che cercavi, ma se sei veramente interessato rimani aggiornato perché potrebbe diventare disponibile in futuro se riusciamo a realizzarlo!",
    interest_label: "Se sei interessato, premi il pulsante.",
    interest_help: "Ci aiuterà a capire se continuare la ricerca.",
    interest_submit: "SONO INTERESSATO",
    interest_confirmed: "Grazie, abbiamo registrato il tuo interesse.",
    thank_time: "Grazie per il tuo tempo!",
    thank_back: "Torna alla pagina principale"
  },
  en: {
    page_title: "InfinityCase — Your data, always with you",
    description: "InfinityCase: your data, always with you. Request availability for the version you want.",
    brand_home: "InfinityCase, home page",
    nav_project: "The project",
    nav_request: "Check availability",
    main_nav_label: "Main navigation",
    language_label: "Select language",
    hero_alt: "Open InfinityCase packaging with a white smartphone case",
    eyebrow: "More space. More freedom. More privacy.",
    hero_title: "Your data.<br><span>Always with you.</span>",
    intro: "Forget the limits of your phone's storage. InfinityCase lets you carry your data with you without subscriptions while keeping control of your information.",
    hero_cta: "Check availability",
    features_label: "InfinityCase features",
    feature_space: "More space",
    feature_subscription: "No subscriptions",
    feature_control: "More control",
    project_eyebrow: "An independent project",
    project_title: "Born in Pisa.<br>Built together.",
    project_p1: "InfinityCase is developed by students at the University of Pisa.",
    project_p2: "Versions depend on production: not every phone model may have been manufactured or may be available yet.",
    request_eyebrow: "The next step",
    request_title: "Check availability for your phone.",
    request_copy: "Tell us which model you are interested in. We will contact you by email with the available versions and colors for your requested model. We will also provide the price, delivery times, and other purchase procedure details.",
    request_assurance: "PLEASE NOTE: Completing this form does NOT create any obligation to purchase.",
    form_title: "Request availability",
    form_intro: "Complete the form to receive updates.",
    name_label: "Full name",
    name_placeholder: "Your name",
    email_label: "Email address",
    email_title: "Enter a valid email address, for example name@domain.com",
    model_label: "Desired version",
    model_select: "Select your model",
    other_model: "Other model",
    submit: "REQUEST AVAILABILITY",
    privacy: "Submitting this form does not create any obligation to purchase.",
    footer_rights: "© 2026 InfinityCase · All rights reserved",
    back_top: "Back to top ↑",
    thank_title: "Request not submitted — InfinityCase",
    thank_eyebrow: "Request not submitted",
    thank_p1: "We are happy that you made it this far. This is an experiment and the product is not available yet. We have not collected any personal data, so we will not contact you.",
    thank_p2: "We are sorry you cannot get what you were looking for. If you are truly interested, keep an eye out: it may become available in the future if we can make it!",
    interest_label: "If you are interested, press the button.",
    interest_help: "It will help us decide whether to continue the research.",
    interest_submit: "I AM INTERESTED",
    interest_confirmed: "Thank you, we have recorded your interest.",
    thank_time: "Thank you for your time!",
    thank_back: "Return to the main page"
  }
};

(function () {
  const stored = localStorage.getItem("infinitycase-language");
  const browser = navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "it";
  let language = stored || browser;
  if (!translations[language]) language = "it";

  function applyLanguage(lang) {
    const strings = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = strings[element.dataset.i18n] || element.textContent;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = strings[element.dataset.i18nHtml] || element.innerHTML;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = strings[element.dataset.i18nPlaceholder];
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.title = strings[element.dataset.i18nTitle];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.alt = strings[element.dataset.i18nAlt];
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", strings[element.dataset.i18nAriaLabel]);
    });
    document.querySelectorAll("[data-i18n-meta]").forEach((element) => {
      element.setAttribute("content", strings[element.dataset.i18nMeta]);
    });

    const title = document.querySelector("title");
    if (title) title.textContent = strings.thank_title || strings.page_title || title.textContent;

    const interestHelp = document.querySelector("#interesse-descrizione");
    if (interestHelp) {
      interestHelp.innerHTML = `<strong>${strings.interest_label}</strong> ${strings.interest_help}`;
    }

    const selector = document.getElementById("lang-select");
    if (selector) selector.value = lang;
  }

  language = translations[language] ? language : "it";
  applyLanguage(language);

  document.addEventListener("change", (event) => {
    if (event.target.id !== "lang-select") return;
    const lang = event.target.value;
    localStorage.setItem("infinitycase-language", lang);
    applyLanguage(lang);
  });
})();
