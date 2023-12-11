function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
console.log(instrumento);
tecla.onclick = function () {
tocaSom('#som_tecla_splash');
}

const idAudio = `#som_${instrumento}`;

tecla.onkeydown = function (evento) {
    console.log(evento.code);
    if (evento.code == 'Enter') {
    tecla.classList.add('ativa');
    }
    }

    if (evento.code === 'Enter' || evento.code === 'Space' ) {
        tecla.classList.add('ativa');
        }

alert('Olá, mundo');