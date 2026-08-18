const lista = document.querySelector('#lista-alertas');
const LIMITE = 60;

async function carregarAlertas() {
  const resposta = await fetch('dados/sensores.json');

  if (!resposta.ok) {
    lista.textContent = 'Nao foi possivel ler os sensores.';
    return;
  }

  const sensores = await resposta.json();

  lista.innerHTML = '';

  for (let i = 0; i < sensores.length; i++) {
    const celsius = (sensores[i].valor - 32) * 5 / 9;

    if (celsius > LIMITE) {
      const item = document.createElement('li');
      item.className = 'alerta';
      item.textContent = 'ALERTA: ' + sensores[i].descricao + ' esta em ' + celsius.toFixed(1) + ' C';
      lista.appendChild(item);
    }
  }
}

carregarAlertas();
setInterval(carregarAlertas, 2000);
