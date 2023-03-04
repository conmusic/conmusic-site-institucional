/*=============== Pegando valores do menu ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== Mostrando o menu =====*/
/* validando se o menu existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== Escondendo o menu =====*/
/* validando se o menu existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Removendo o menu no modo mobile ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Ao clicar em cada nav__link, remova a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== Mudando a cor de fundo do header ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe scroll-header à tag do cabeçalho
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Carrosel ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});

/*=============== Ativando o link atráves do scroll ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== Mudando a cor do botão de rolagem para cima ===============*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // Quando a rolagem for superior a 350 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll-top
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== Tema escuro ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tópico previamente selecionado (se selecionado pelo usuário)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos se o usuário escolheu previamente um tema
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos o dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Ative/desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicione ou remova o tema escuro/ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== Exibindo a animação através do scroll ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__img, .new__container, .footer__container`)
sr.reveal(`.home__data`, {delay: 500})
sr.reveal(`.giving__content, .gift__card`,{interval: 100})
sr.reveal(`.celebrate__data, .message__form, .footer__img1`,{origin: 'left'})
sr.reveal(`.celebrate__img, .message__img, .footer__img2`,{origin: 'right'})