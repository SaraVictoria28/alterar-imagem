const olimpo = document.getElementById('olimpo');
const imgInicial = './download.jpg';
const mudarImg = './Acampamento_Meio-Sangue.webp'

olimpo.addEventListener('mouseover', function(){
    olimpo.src = mudarImg;
});

olimpo.addEventListener('mouseout', function(){
    olimpo.src = imgInicial;
});