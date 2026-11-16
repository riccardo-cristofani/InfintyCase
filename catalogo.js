const modelFilter = document.getElementById('model-filter');
const styleFilter = document.getElementById('style-filter');
const cards = Array.from(document.querySelectorAll('.cover-card'));
const emptyMessage = document.getElementById('catalog-empty');
const resultsCount = document.getElementById('results-count');
const coverDialog = document.getElementById('cover-dialog');
const coverDialogSelection = document.getElementById('cover-dialog-selection');
const selectedCoverInput = document.getElementById('cover-selezionata');
const closeCoverDialog = document.querySelector('.cover-dialog-close');
const coverRequestForm = document.getElementById('cover-request-form');
const coverDialogConfirmation = document.getElementById('cover-dialog-confirmation');
const cardNumberInput = document.getElementById('cover-carta-numero');
const cardExpiryInput = document.getElementById('cover-carta-scadenza');
const nameInputs = [
  document.getElementById('cover-nome'),
  document.getElementById('cover-cognome')
];

const currentDate = new Date();

nameInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const caret = input.selectionStart === null ? input.value.length : input.selectionStart;
    const allowedBeforeCaret = input.value.slice(0, caret).replace(/[^\p{L} ]/gu, '').length;
    input.value = input.value.replace(/[^\p{L} ]/gu, '');
    const nextCaret = allowedBeforeCaret;
    input.setSelectionRange(nextCaret, nextCaret);
  });
});

function formatDigitInput(input, groupSize, maxDigits) {
  const caret = input.selectionStart || 0;
  const digitsBeforeCaret = input.value.slice(0, caret).replace(/\D/g, '').length;
  const digits = input.value.replace(/\D/g, '').slice(0, maxDigits);
  const formatted = groupSize
    ? (digits ? digits.match(new RegExp(`.{1,${groupSize}}`, 'g')).join(' ') : '')
    : digits.length > 2
      ? `${digits.slice(0, 2)}/${digits.slice(2)}`
      : digits.length === 2 ? `${digits}/` : digits;

  input.value = formatted;
  let newCaret = 0;
  let digitsCounted = 0;
  while (newCaret < formatted.length && digitsCounted < digitsBeforeCaret) {
    if (/\d/.test(formatted[newCaret])) digitsCounted += 1;
    newCaret += 1;
  }
  if (groupSize && digitsBeforeCaret > 0 && digitsBeforeCaret % groupSize === 0 && newCaret < formatted.length) {
    newCaret += 1;
  }
  input.setSelectionRange(newCaret, newCaret);
}

function validateCardNumber() {
  const digits = cardNumberInput.value.replace(/\D/g, '');
  const valid = /^\d{12,19}$/.test(digits);
  cardNumberInput.setCustomValidity(
    cardNumberInput.value && !valid ? 'Inserisci un numero fittizio composto da 12-19 cifre.' : ''
  );
}

function validateCardExpiry() {
  const match = cardExpiryInput.value.match(/^(\d{2})\/(\d{2})$/);
  let message = '';

  if (cardExpiryInput.value && !match) {
    message = 'Inserisci la scadenza nel formato MM/AA.';
  } else if (match) {
    const month = Number(match[1]);
    const year = Number(match[2]);
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    if (month < 1 || month > 12) {
      message = 'Inserisci un mese valido, da 01 a 12.';
    } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
      message = 'La data di scadenza non può essere passata.';
    }
  }

  cardExpiryInput.setCustomValidity(message);
}

cardNumberInput.addEventListener('input', () => {
  formatDigitInput(cardNumberInput, 4, 19);
  validateCardNumber();
});
cardExpiryInput.addEventListener('input', () => {
  formatDigitInput(cardExpiryInput, 0, 4);
  validateCardExpiry();
});

function openCoverRequest(card) {
  const title = card.querySelector('.cover-card-title').textContent.trim();
  const selection = `${title} — ${card.dataset.model} · ${card.dataset.style}`;
  coverDialogSelection.textContent = selection;
  selectedCoverInput.value = selection;
  coverDialog.showModal();
  document.getElementById('cover-nome').focus();
}

cards.forEach((card) => {
  card.setAttribute('aria-label', `Richiedi informazioni per ${card.querySelector('.cover-card-title').textContent.trim()}, ${card.dataset.model}, ${card.dataset.style}`);
  card.addEventListener('click', () => openCoverRequest(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCoverRequest(card);
    }
  });
});

closeCoverDialog.addEventListener('click', () => coverDialog.close());
coverDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
});

coverRequestForm.addEventListener('submit', (event) => {
  event.preventDefault();
  validateCardNumber();
  validateCardExpiry();
  if (!coverRequestForm.reportValidity()) return;
  coverDialogConfirmation.hidden = false;
});

function updateCatalog() {
  const model = modelFilter.value;
  const style = styleFilter.value;
  let visibleCount = 0;

  cards.forEach((card) => {
    const matches = (model === 'all' || card.dataset.model === model) &&
      (style === 'all' || card.dataset.style === style);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultsCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'modello disponibile' : 'modelli disponibili'}`;
  emptyMessage.hidden = visibleCount > 0;
}

modelFilter.addEventListener('change', updateCatalog);
styleFilter.addEventListener('change', updateCatalog);
updateCatalog();
