const lista = document.querySelector('#lista-alertas');
const LIMITE = 60;

async function carregarAlertas() {
  const resposta = await fetch('dados/sensores.json');
  const sensores = await resposta.json();
  console.log(sensores);

  lista.innerHTML = '';

  for (i = 0; i < sensores.length; i++) {
    const celsius = (sensores[i].valor - 32) * 5 / 9;

    if (celsius > LIMITE) {
      const item = document.createElement('li');
      item.className = 'alerta';
      item.innerHTML = 'ALERTA: ' + sensores[i].descricao + ' esta em ' + celsius.toFixed(1) + ' C';
      lista.appendChild(item);
    }
  }
}

carregarAlertas();
setInterval(carregarAlertas, 2000);
