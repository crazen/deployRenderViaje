document.addEventListener('DOMContentLoaded', () => {
  // --- RANGE (orçamento) ---
  const range = document.getElementById('orcamento');
  const lbl   = document.getElementById('valorOrcamento');

  function atualizarOrcamento() {
    const min = Number(range.min), max = Number(range.max), val = Number(range.value);
    lbl.textContent = 'R$ ' + val.toLocaleString('pt-BR');
    const pct = ((val - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(to right, #B8C3CC 0%, #B8C3CC ${pct}%, #E6EBEE ${pct}%, #E6EBEE 100%)`;
  }
  range.addEventListener('input', atualizarOrcamento);
  atualizarOrcamento();

  // --- PARTICIPANTES ---
  const input     = document.getElementById('novoParticipante');
  const btnAdd    = document.getElementById('btnAdd');
  const chipsWrap = document.getElementById('participantes');

  function sanitize(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  function addParticipant() {
    const name = input.value.trim();
    if (!name) return;

    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `${sanitize(name)} <button class="remove" title="Remover">&times;</button>`;

    chipsWrap.appendChild(chip);
    input.value = '';
    input.focus();
  }

  // Enter no input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addParticipant();
    }
  });

  // Clique no botão +
  btnAdd.addEventListener('click', addParticipant);

  // Remoção
  chipsWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      e.target.closest('.chip').remove();
    }
  });
});

// --- Próxima etapa (placeholder) ---
function irParaEtapa2() {
  alert('Avançando para a etapa 2…');
}