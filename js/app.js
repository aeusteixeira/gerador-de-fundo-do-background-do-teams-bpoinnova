const form = document.getElementById('gerador-form');
const resultadoDiv = document.getElementById('resultado');
const previewDiv = document.getElementById('preview');
const nomeText = document.getElementById('nome-text');
const departamentoText = document.getElementById('departamento-text');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const departamento = document.getElementById('departamento').value;

  const originalCanvas = document.createElement('canvas');
  const originalContext = originalCanvas.getContext('2d');
  const image = new Image();
  image.src = 'img/background_default.png';
  image.onload = function () {
    originalCanvas.width = image.width;
    originalCanvas.height = image.height;
    originalContext.drawImage(image, 0, 0);

    const nomeX = originalCanvas.width / 2 + 730;
    const nomeY = originalCanvas.height / 2 - 30;
    const departamentoX = originalCanvas.width / 2 + 730;
    const departamentoY = originalCanvas.height / 2 + 30;

    originalContext.fillStyle = '#000000'; // Cor do texto

    // Texto do nome com fonte maior
    originalContext.font = 'bold 42px Arial';
    originalContext.textAlign = 'center';
    originalContext.fillText(nome, nomeX, nomeY);

    // Texto do departamento com fonte padrão
    originalContext.font = 'bold 34px Arial';
    originalContext.textAlign = 'center';
    originalContext.fillText(departamento, departamentoX, departamentoY);

    previewDiv.innerHTML = '';
    const previewImage = new Image();
    previewImage.src = originalCanvas.toDataURL('image/png');
    previewImage.className = 'img-fluid';
    previewDiv.appendChild(previewImage);

    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = originalCanvas.width;
    tempCanvas.height = originalCanvas.height;
    tempContext.drawImage(originalCanvas, 0, 0);

    const link = document.createElement('a');
    link.href = tempCanvas.toDataURL('image/png');
    link.download = 'background_teams.png';
    link.click();

  };
  
});
