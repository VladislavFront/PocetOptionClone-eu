const menu = document.querySelector('.burger-menu')
const menuBtn = document.querySelector('.open-btn')

const body = document.body


if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })
}

const btnRegister = document.querySelector('.btn-register')
const btnLogin = document.querySelector('.btn-login')

const checkLogin = document.querySelector('.check-conainer-login')
const checkREgister = document.querySelector('.check-conainer-register')

const promoInput = document.querySelector('.promo-input')

const formSubmit = document.querySelector('.form-submit')

btnRegister.addEventListener('click', () => {
  btnRegister.classList.toggle('active')
  checkREgister.classList.toggle('active')
  promoInput.classList.toggle('active')

  btnLogin.classList.remove('active')
  checkLogin.classList.remove('active')
  
  formSubmit.innerHTML = 'Sign Up'
})

btnLogin.addEventListener('click', () => {
  btnLogin.classList.toggle('active')
  checkLogin.classList.toggle('active')

  btnRegister.classList.remove('active')
  checkREgister.classList.remove('active')
  promoInput.classList.remove('active')

  formSubmit.innerHTML = 'Log In'
})