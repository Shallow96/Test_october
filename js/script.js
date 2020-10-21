let body = document.querySelector('body')
let menuOpen = document.querySelector('.menu_btn')
let menuClose = document.querySelector('.close_mob_menu')
let menuList = document.querySelector('.mobile_menu')
let overlay = document.querySelector('.overlay')

let category_menu = document.querySelector('.cat_icon')
let mainBtn = document.querySelector('.mainBtn')
let contactBtn = document.querySelector('.contactBtn')
let categoryBtn = document.querySelector('.categoryBtn')


let main_menu = document.querySelector('.main_menu')
let contact_menu = document.querySelector('.contact_menu')
let cat_menu = document.querySelector('.cat_menu')
let cat_menu_list = document.querySelector('.category_menu_list')


let popupLogin = document.querySelector('.popup_login')
let popupLoginOpen = document.querySelectorAll('.login_user')
let popupLoginClose = document.querySelectorAll('.popup_login_close')

let popupCallback = document.querySelector('.popup_callback')
let popupCallbackOpen = document.querySelectorAll('.popup_callback_open')
let popupCallbackClose = document.querySelectorAll('.popup_callback_close')



let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let formLogin = document.getElementById('login-form')
let loginInputs = formLogin.querySelectorAll('input.for_check')
let login = document.getElementById('login')
let password = document.getElementById('password')
let unlockPassword = document.querySelector('.veiw_password')

let formCallback = document.getElementById('callback-form')
let phone = document.getElementById('phone')

formCallback.addEventListener('submit', function (event) {
    if (phone.value.length < 18 ) {
        addError(phone, '.input-wrap')
        event.preventDefault()
    }
})

formLogin.addEventListener('submit', function (event) {
    let check = true
    if (!emailPattern.test(login.value)) {
        addError(login, '.input-wrap')
        check = false
    }
    if(password.value.length < 4 ) {
        addError(password, '.input-wrap')
        check = false
    }
    if(!check){
        event.preventDefault()
    }
})
for (let i = 0; i < loginInputs.length; i++){
    loginInputs[i].addEventListener('input', removeError(loginInputs[i],'.input-wrap'))
}
unlockPassword.addEventListener('click', function () {
    if(password.getAttribute('type') === 'password')password.setAttribute('type','text')
    else password.setAttribute('type','password')
})

let subscribeForm = document.getElementById('subscribe_form')
let subscribeInput = document.getElementById('subscribe_email')

subscribeForm.addEventListener('submit', function (event) {
    if (!emailPattern.test(subscribeInput.value)) {
        addError(subscribeInput,'form')
        event.preventDefault()
    }
    else {
        toggleClass(overlay,'visible')
        document.querySelector('.succes_subscribe').classList.add('show')
        setTimeout(function () {
            document.querySelector('.succes_subscribe').classList.remove('show')
            toggleClass(overlay,'visible')
            subscribeInput.value =''
        },3000)
        setTimeout(function () {
            subscribeForm.submit()
        },3100)
        event.preventDefault()
    }
})
subscribeInput.addEventListener('input', removeError(subscribeInput, 'form'))

let searchForm = document.getElementById('search_form')
let searchFormInput =searchForm.querySelector('input')
searchForm.addEventListener('submit', function (event) {
    if (searchFormInput.value.length < 2) {
        addError(searchFormInput,'.page_search')
        event.preventDefault()
    }
})
searchFormInput.addEventListener('input',removeError(searchFormInput, '.page_search'))

var phoneInput = document.getElementById("phone");
phoneInput.addEventListener('click', function () {
    if( phoneInput.value.length < 4 ) phoneInput.value = "+38("
})
phoneInput.addEventListener('keydown', function (event) {
    if(!/^\d+$/.test(event.key) && event.code !== 'Backspace') event.preventDefault()
    let presentValue = phoneInput.value.length;
    if (presentValue < 4 ) {
        phoneInput.value = "+38("
        return false
    }
    if (presentValue === 3 && event.code !== 'Backspace') phoneInput.value = phoneInput.value + "("
    if (presentValue === 7 && event.code !== 'Backspace') phoneInput.value = phoneInput.value + ") "
    if (presentValue === 12 && event.code !== 'Backspace') phoneInput.value = phoneInput.value + "-"
    if (presentValue === 15 && event.code !== 'Backspace') phoneInput.value = phoneInput.value + "-"
    if (presentValue > 17 && event.code !== 'Backspace') event.preventDefault()
})
phoneInput.addEventListener('input', removeError(phoneInput,'.input-wrap'))

function removeError(targetForm, errorMes) {
    return function(){
        targetForm.classList.remove('input_error')
        targetForm.closest(errorMes).classList.remove('show')
    }
}
function addError(input, closestParent) {
    input.classList.add('input_error')
    input.closest(closestParent).classList.add('show')
}

menuOpen.addEventListener('click', toggleMenu)
menuClose.addEventListener('click', toggleMenu)

function toggleMenu(){
    toggleClass(menuList,'hide_menu')
    toggleClass(overlay,'visible')
}

category_menu.addEventListener('click', toggleClassAttr(cat_menu_list, 'open', category_menu))
mainBtn.addEventListener('click', toggleClassAttr(main_menu, 'open', mainBtn))
contactBtn.addEventListener('click', toggleClassAttr(contact_menu, 'open', contactBtn))
categoryBtn.addEventListener('click', toggleClassAttr(cat_menu, 'open', categoryBtn))

function toggleClassAttr(key,choseClass,btnTarget,bodyFix){
    return function () {
        if(key.classList.contains(choseClass)){
            key.classList.remove(choseClass)
            if(btnTarget) btnTarget.classList.remove(choseClass)
            if(bodyFix) document.querySelector('body').classList.remove(bodyFix)
        }
        else {
            key.classList.add(choseClass)
            if(btnTarget) btnTarget.classList.add(choseClass)
            if(bodyFix) document.querySelector('body').classList.add(bodyFix)
        }
    }
}
function toggleClass(key,choseClass){
    if(key.classList.contains(choseClass))key.classList.remove(choseClass)
    else key.classList.add(choseClass)
}

for (let i = 0; i < popupLoginOpen.length; i++) {popupLoginOpen[i].addEventListener('click', toggleClassAttr( popupLogin, 'show','','untouch'))}
for (let i = 0; i < popupLoginClose.length; i++) {popupLoginClose[i].addEventListener('click', toggleClassAttr( popupLogin, 'show','','untouch'))}
for (let i = 0; i < popupCallbackOpen.length; i++) {popupCallbackOpen[i].addEventListener('click', toggleClassAttr( popupCallback, 'show','','untouch'))}
for (let i = 0; i < popupCallbackClose.length; i++) {popupCallbackClose[i].addEventListener('click', toggleClassAttr( popupCallback, 'show','','untouch'))}
// ---------------------------------------------------STICKY HEADER----------------------------------------------
let stickyNavigation = document.querySelector('.main_header')
let stickyWrap = document.querySelector('.under_header')
let sticky = stickyNavigation.offsetTop

document.addEventListener('scroll', stickyHeader)
document.addEventListener('DOMContentLoaded', stickyHeader)
function stickyHeader() {
    let parentHeight = stickyNavigation.clientHeight
    if (window.pageYOffset > sticky) {
        stickyNavigation.classList.add('sticky')
        stickyWrap.style.display = 'block'
        stickyWrap.style.height = parentHeight + 'px'
    }
    else {
        stickyNavigation.classList.remove('sticky')
        stickyWrap.style.display = 'none'
    }
}
document.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky +150){
        cat_menu_list.classList.remove('open')
    }
    else {
        cat_menu_list.classList.add('open')
    }
})

function tabulation(tabLink, tabContent){
    let nav_tab = document.querySelectorAll(tabLink);
    let sections = document.querySelectorAll(tabContent);
    for(let i =0; i<nav_tab.length; i++){
        nav_tab[i].addEventListener('click', function (){
            let Role = this.getAttribute('role');
            for(let i =0; i < nav_tab.length; i++){
                nav_tab[i].classList.remove('active');
                nav_tab[Role-1].classList.add('active');
                sections[i].classList.remove('active');
                sections[Role-1].classList.add('active');
            }
        })
    }
}
for (let i=0; i < document.querySelectorAll('.nav_tab').length; i++ ) document.querySelectorAll('.nav_tab')[i].addEventListener('click', tabulation('.nav_tab','.tab_content'))
for (let i=0; i < document.querySelectorAll('.form_tab').length; i++ ) document.querySelectorAll('.form_tab')[i].addEventListener('click', tabulation('.form_tab','.form_content'))


let filterForm = document.querySelectorAll('.form_content')
for (let i = 0; i < filterForm.length; i++){
    let currentFilter = filterForm[i]
    let filterClear = filterForm[i].querySelector('.clear_filter')
    let filterSelects = filterForm[i].querySelectorAll('select')
    let filterInputs = filterForm[i].querySelectorAll('input')
    for(let k = 0; k < filterInputs.length; k++){
        filterInputs[k].addEventListener('input', function () {
            if(filterInputs[k].value < 1) this.value = ''
        })
    }
    filterClear.addEventListener('click', function (event) {
        currentFilter.reset()
        event.preventDefault()
    })
}


let addToCompare = document.querySelectorAll('.to_compare')
let addToFavorit = document.querySelectorAll('.to_favorite')
let addToCart = document.querySelectorAll('.product_buy')
let countCompare = document.getElementById('compare')
let countFavorite = document.getElementById('favorite')
let countCart = document.getElementById('cart')

for (let i = 0; i < addToCompare.length; i++) addToCompare[i].addEventListener('click', countAction(countCompare,'.compare_text', 'Сравнить товар', 'В сравнении', 'data-compare'))
for (let i = 0; i < addToFavorit.length; i++) addToFavorit[i].addEventListener('click', countAction(countFavorite,'.favorite_text', 'В избранное', 'В избранном', 'data-favorite'))
for (let i = 0; i < addToCart.length; i++) addToCart[i].addEventListener('click', countAction(countCart,'.cart_text', 'Купить товар', 'Добавлен', 'data-favorite'))
function countAction(countTarget, textTarget, textDefault, textChange, adedAttr ) {
    return function () {
        if(this.getAttribute(adedAttr) === 'added'){
            this.querySelector(textTarget).textContent = textDefault
            this.removeAttribute(adedAttr, 'added')
            countTarget.textContent = --countTarget.textContent
            checkCounter(countTarget)
        }
        else{
            this.querySelector(textTarget).textContent = textChange
            this.setAttribute(adedAttr, 'added')
            countTarget.textContent = ++countTarget.textContent
            checkCounter(countTarget)
        }
        function checkCounter(quantity) {
            if(parseInt(quantity.textContent) < 1 )quantity.classList.add('hide_quantity')
            else quantity.classList.remove('hide_quantity')
        }
    }
}

let mobFootBtn = document.querySelectorAll('.foot_links')
for (let i =0; i < mobFootBtn.length; i++){
    mobFootBtn[i].addEventListener('click', function () {
        let submenu = this.querySelector('.link_list')
        let submenuLi = this.querySelectorAll('.link_list li')
        if(this.classList.contains('sublinks')){
            this.classList.remove('sublinks')
            submenu.style.maxHeight = 0
        }
        else {
            for (let i = 0; i < submenuLi.length; i++) {
                let height = window.getComputedStyle(submenuLi[i], null).height;
                submenu.style.maxHeight = parseInt(height)*submenuLi.length + 'px'
            }
            this.classList.add('sublinks')
        }
    })
}
