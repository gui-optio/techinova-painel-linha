const lista = document.querySelector('#lista-alertas');
const LIMITE = 60;

async function carregarAlertas() {
  const resposta = await fetch('dados/sensores.json');
  const sensores = await resposta.json();
  console.log(sensores);

  for (i = 0; i < sensores.length; i++) {
    if (sensores[i].valor > LIMITE) {
      const item = document.createElement('li');
      item.className = 'alerta';
      item.innerHTML = 'ALERTA: ' + sensores[i].descricao + ' esta em ' + sensores[i].valor + ' C';
      lista.appendChild(item);
    }
  }
}

carregarAlertas();
setInterval(carregarAlertas, 2000);
