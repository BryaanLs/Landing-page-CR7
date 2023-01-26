const elementos = document.querySelectorAll('[data-anime]');
const posicaoScroll = window.innerHeight * 0.5;

function fadeScroll() {
    elementos.forEach((elemento) => {
        const elementoTop = elemento.getBoundingClientRect().top - posicaoScroll;
        if (elementoTop < 120) {
            elemento.classList.add('animate');
        } else if (elementoTop > 120) {
            elemento.classList.remove('animate');
        }
    })

}
const animationScroll = () => {
    window.addEventListener('scroll', fadeScroll);
};


animationScroll();
