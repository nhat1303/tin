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


document.getElementById("page-1").style.backgroundColor= "rgb(137, 137, 137)"
document.getElementById("page-1").style.border="none"


/////

let carts = document.querySelectorAll(".add");
let products = [
    {
        name: 'NIKE AIR ZOOM MERCURIAL SUPERFLY 9 ACADEMY',
        tag : 'NIKEAIRZOOMMERCURIALSUPERFLY9ACADEMYMGBLAST',
        price : 1099,
        inCart:0
    },
    {
        name: 'PUMA FUTURE ULTIMATE FG/AG CREATIVITY',
        tag : 'PUMAFUTUREULTIMATEFG-AGCREATIVITY',
        price : 1269,
        inCart:0
    },
    {
        name: 'MIZUNO MORELIA NEO III PRO FG - GOLD',
        tag : 'MIZUNO MORELIA NEO III PRO FG',
        price : 2250,
        inCart:0
    },
    {
        name: 'ADIDAS X SPEEDPORTAL .1 FG OWN YOUR FOOTBALL',
        tag : 'ADIDAS X SPEEDPORTAL .1 FG OWN YOUR FOOTBALL',
        price : 1069,
        inCart:0
    },
    {
        name: 'NIKE AIR ZOOM MERCURIAL SUPERFLY ELITE 9 FG GENERATION',
        tag : 'NIKE AIR ZOOM MERCURIAL SUPERFLY ELITE 9 FG GENERATION',
        price : 1269,
        inCart:0
    },
    {
        name: 'ADIDAS X SPEEDPORTAL .1 HG GAME DATA',
        tag : 'ADIDAS X SPEEDPORTAL .1 HG GAME DATA',
        price : 2250,
        inCart:0
    },
    {
        name: 'ADIDAS NEMEZIZ TANGO 18.3 FG ENERGY MODE',
        tag : 'ADIDAS NEMEZIZ TANGO 18.3 FG ENERGY MODE',
        price : 2000,
        inCart:0
    },
    {
        name: 'NIKE HYPERVENOM PHANTOM 3 ELITE DF FG JR FAST AF',
        tag : 'NIKE HYPERVENOM PHANTOM 3 ELITE DF FG JR FAST AF',
        price : 200,
        inCart:0
    },
    {
        name: 'ADIDAS X SPEEDFLOW .1 AG DIAMOND EDGE',
        tag : 'ADIDAS X SPEEDFLOW .1 AG DIAMOND EDGE',
        price : 200,
        inCart:0
    }
    

]
for ( let i = 0; i< carts.length ; i++){
    carts[i].addEventListener("click", function(e){
        e.preventDefault()
        CartNumber(products[i]);
        TotalCost(products[i])
    })
}


function onLoadCartNumbers(){
    let productNumber = localStorage.getItem("cartNumbers")

    if ( productNumber){
        document.querySelector('.cart span').textContent = productNumber;
    }
}
onLoadCartNumbers()

function CartNumber(product){

    let productNumber = localStorage.getItem("cartNumbers")
    productNumber = parseInt(productNumber)
    
    if( productNumber){
    localStorage.setItem("cartNumbers",productNumber + 1)
    document.querySelector('.cart span').textContent =  productNumber + 1;

    } else {
        localStorage.setItem("cartNumbers",1)
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItems(product)
}

function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    
    if( cartItems != null){
        if (cartItems[product.tag] == undefined ){
            cartItems = {
                ...cartItems,[product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1 
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}


function TotalCost(product){
    let cartCost = localStorage.getItem("totalCost")
    localStorage.setItem("totalCost", product.price)

    if ( cartCost != null ){
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)

    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

