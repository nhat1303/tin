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



document.getElementById("page-2").style.backgroundColor= "rgb(137, 137, 137)"
document.getElementById("page-2").style.border="none"



////
let carts = document.querySelectorAll(".add");
let products = [
    {
        name: 'ADIDAS X SPEEDFLOW .1 FG SAPPHIRE EDGE',
        tag : 'ADIDAS X SPEEDFLOW .1 FG SAPPHIRE EDGE',
        price : 1099,
        inCart:0
    },
    {
        name: 'ADIDAS X SPEEDFLOW .1 AG WHITESPARK',
        tag : 'ADIDAS X SPEEDFLOW .1 AG WHITESPARK',
        price : 1269,
        inCart:0
    },
    {
        name: 'ADIDAS COPA SENSE .1 FG METEORITE',
        tag : 'ADIDAS COPA SENSE .1 FG METEORITE',
        price : 2250,
        inCart:0
    },
    {
        name: 'ADIDAS X GHOSTED .1 FG-AG SUPERSPECTRAL',
        tag : 'ADIDAS X GHOSTED .1 FG-AG SUPERSPECTRAL',
        price : 1069,
        inCart:0
    },
    {
        name: 'ADIDAS PREDATOR 20.1 LOW FG/AG INFLIGHT',
        tag : 'ADIDAS PREDATOR 20.1 LOW FG-AG INFLIGHT',
        price : 1269,
        inCart:0
    },
    {
        name: 'NIKE MERCURIAL SUPERFLY 7 ACADEMY MG BLACK X CHILE RED',
        tag : 'NIKE MERCURIAL SUPERFLY 7 ACADEMY MG BLACK X CHILE RED',
        price : 2250,
        inCart:0
    },
    {
        name: 'NIKE MERCURIAL VAPOR 14 PRO FG RECHARGE',
        tag : 'NIKE MERCURIAL VAPOR 14 PRO FG RECHARGE',
        price : 2000,
        inCart:0
    },
    {
        name: 'NIKE PHANTOM GT 2 ACADEMY MG GENERATION',
        tag : 'NIKE PHANTOM GT 2 ACADEMY MG GENERATION',
        price : 3200,
        inCart:0
    },
    {
        name: 'PUMA ULTRA ULTIMATE FG/AG FEARLESS',
        tag : 'PUMA ULTRA ULTIMATE FG-AG FEARLESS',
        price : 2159,
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