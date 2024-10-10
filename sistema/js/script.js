const imgBanner = ['assets/img/detroit_become_human_art.jpg','assets/img/maxresdefault connor.jpg',
'assets/img/markus-in-detroit-become-human-canrcac45oqll2mr.jpg','assets/img/detroit kara.jpg'];

//definimos as imagens do banner

let fotoInicial = 0;
// index inicial da foto do banner

function slider(){
    //encontrar o banner na pg
    const banner = document.getElementById('banner');
    banner.style.backgroundImage =
         `url('${imgBanner[fotoInicial]}')`;

    fotoInicial++;
    // mudar para a proxima foto
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 2500)

