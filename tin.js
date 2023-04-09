const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


document.getElementById("account").innerHTML= localStorage.getItem("Current-login")
let logout = document.getElementById("log-out")
let account = document.getElementById("account")
account.addEventListener("click", function(){
    if ( logout.style.display=="none"){
        logout.style.display ="block"
    }
    else{
        logout.style.display="none"
    }
})


logout.addEventListener("click", function(){
    account.innerHTML=""
    logout.style.display="none"
    localStorage.setItem("Current-login","")
})