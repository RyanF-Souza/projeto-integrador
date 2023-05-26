const loginActive=document.querySelector('#loginActive')
const loginModal=document.querySelector('#loginSingUp')
const loginDesable=document.querySelector('#goBack')
const message=document.querySelector('#message')
const change=document.querySelector('#change')
const login=document.querySelector('#login')
const singUp=document.querySelector('#singUp')
const makeF=document.querySelector('#criarFaClube')
const modalF=document.querySelector('#id1')
const buttonX=document.querySelector('#btnX')
const imageclick=document.querySelector('#imagefan')
const modalfan=document.querySelector('#modal-fan')
const buttonmfclose=document.querySelector('#button-mf-close')
const criarCart=document.querySelector('#criarCart')
const criarCarte=document.querySelector('#criarCarte')
const carteClose=document.querySelector('#button-carte-close')

loginActive.addEventListener('click',()=>{
    loginModal.style.display='flex'
    document.body.style.overflow='hidden'
})
loginDesable.addEventListener('click',()=>{
    loginModal.style.display='none'
    document.body.style.overflow='scroll'
})
change.addEventListener('click',()=>{
    if(login.style.display!='none'){
        login.style.display='none'
        singUp.style.display='block'
        message.textContent='Bem vindo de volta! Faça o login para acessar recursos exclusivos, personalizar sua experiência e se juntar à diversas comunidades online. Não perca tempo, faça o login agora e aproveite todos os benefícios que temos para você!'
        change.textContent='FAÇA LOGIN JÁ!'
    }else{
        login.style.display='block'
        singUp.style.display='none'
        message.textContent='Registre-se agora e desfrute de uma experiência incrível em nosso site! Seja parte da nossa comunidade online e aproveite todos os benefícios exclusivos. Não perca tempo, inscreva-se hoje mesmo!'
        change.textContent='CADASTRE-SE JÁ!'
    }
})

makeF.addEventListener('click',()=>{
    console.log(modalF.style.display);
    modalF.style.display='flex'
    document.body.style.overflow='hidden'
})
buttonX.addEventListener('click',()=>{
    modalF.style.display='none'
    document.body.style.overflow='scroll'
})
imageclick.addEventListener('click',()=>{
    modalfan.style.display='flex'
    document.body.style.overflow='hidden'
})
buttonmfclose.addEventListener('click',()=>{
    modalfan.style.display='none'
    document.body.style.overflow='scroll'
})
criarCart.addEventListener('click',()=>{
    if(modalfan.style.display!= 'none'){
        modalfan.style.display='none'
    }
    criarCarte.style.display='flex'
        document.body.style='hidden'
})
carteClose.addEventListener('click',()=>{
    criarCarte.style.display='none'
    document.body.style.overflow='scroll'
})