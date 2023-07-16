

const btHamb = document.querySelector('.bt-hamb');

const menuMobile = document.querySelector('.menu-mobile');
const barraSuperior = document.querySelector('.barra-superior');


btHamb.addEventListener('click', () => {

    

    if (!menuMobile.classList.contains('on')) {

        menuMobile.classList.add('on');
        btHamb.classList.remove('on');
        barraSuperior.classList.add('on');

        return
    }else {

        btHamb.classList.add('on')
        menuMobile.classList.remove('on');
        barraSuperior.classList.remove('on');

    }


})
