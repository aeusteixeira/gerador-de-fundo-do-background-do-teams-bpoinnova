const form = document.getElementById('gerador-form');
const resultadoDiv = document.getElementById('resultado');
const previewDiv = document.getElementById('preview');
const nomeText = document.getElementById('nome-text');
const departamentoText = document.getElementById('departamento-text');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const departamento = document.getElementById('departamento').value;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = new Image();
  image.src = 'img/background.png';
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);

    const nomeX = canvas.width / 2 + 730;
    const nomeY = canvas.height / 2 - 30;
    const departamentoX = canvas.width / 2 + 730;
    const departamentoY = canvas.height / 2 + 30;

    context.fillStyle = '#000000'; // Cor do texto
    context.font = 'bold 30px Arial';
    context.textAlign = 'center';
    context.fillText(nome, nomeX, nomeY);
    context.fillText(departamento, departamentoX, departamentoY);

    previewDiv.innerHTML = '';
    const previewImage = new Image();
    previewImage.src = canvas.toDataURL('image/png');
    previewImage.className = 'img-fluid';
    previewDiv.appendChild(previewImage);

    html2canvas(canvas).then(function (canvas) {
      resultadoDiv.innerHTML = '';
      resultadoDiv.style.display = 'block';
      resultadoDiv.appendChild(canvas);

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'background_teams.png';
      link.textContent = 'Baixar Fundo';
      resultadoDiv.appendChild(link);
    });
  };
});
