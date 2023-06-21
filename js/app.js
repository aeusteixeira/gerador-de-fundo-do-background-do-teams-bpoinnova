const form = document.getElementById('gerador-form');
const resultadoDiv = document.getElementById('resultado');
const previewDiv = document.getElementById('preview');
const nomeText = document.getElementById('nome-text');
const departamentoText = document.getElementById('departamento-text');

form.addEventListener('submit', function (event) {
    
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const departamento = document.getElementById('departamento').value;

  // Atualiza o texto nos locais mapeados
  nomeText.textContent = nome;
  departamentoText.textContent = departamento;

  // Crie uma imagem com o texto inserido pelo usuário
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = new Image();
  image.src = '/background.png';
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    
    const nomeCoords = [1514, 438, 1863, 495];
    const departamentoCoords = [1509, 498, 1858, 555];

    const nomeX = (nomeCoords[0] + nomeCoords[2]) / 2;
    const nomeY = (nomeCoords[1] + nomeCoords[3]) / 2;
    const departamentoX = (departamentoCoords[0] + departamentoCoords[2]) / 2;
    const departamentoY = (departamentoCoords[1] + departamentoCoords[3]) / 2;

    context.fillStyle = '#000000'; // Cor do texto
    context.font = 'bold 30px Arial';
    context.textAlign = 'center';
    context.fillText(nome, nomeX, nomeY);
    context.fillText(departamento, departamentoX, departamentoY);

    // Exiba o preview da imagem de fundo gerada
    previewDiv.innerHTML = '';
    const previewImage = new Image();
    previewImage.src = canvas.toDataURL('image/png');
    previewImage.className = 'img-fluid';
    previewDiv.appendChild(previewImage);

    // Converta o canvas em uma imagem usando html2canvas
    html2canvas(canvas).then(function (canvas) {
      resultadoDiv.innerHTML = '';
      resultadoDiv.style.display = 'block';
      resultadoDiv.appendChild(canvas);

      // Crie um link para download da imagem gerada
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'background_teams.png';
      link.textContent = 'Baixar Fundo';
      resultadoDiv.appendChild(link);
    });
  };
});