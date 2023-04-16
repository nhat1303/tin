function displayCart(){
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
let productContainer = document.querySelector
( ".products");
let cartCost = localStorage.getItem('totalCost');
console.log(cartItems);
if(cartItems && productContainer ) {
productContainer.innerHTML = '';
Object.values(cartItems).map(item =>{


  productContainer.innerHTML += `
  <div class="product">
       <ion-icon name="close-circle-outline"></ion-icon>
       <img src="${item.tag}.webp" >
          <span>${item.name}</span>
      </div>
      <div  class="price">${item.price}</div>
      <div class="quantity">    
      <ion-icon name="caret-back-circle-outline"></ion-icon>
      <span>${item.inCart}</span>
      <ion-icon name="caret-forward-circle-outline"></ion-icon>
      </div>
      <div class="total">
      ${item.inCart * item.price},00$
      </div>
  `    
});
productContainer.innerHTML += `
   <div class="basketTotalContainer">
   <h4 class="basketTotalTitle">
       Basket Total
       </h4>
       <h4 class="basketTotal">
       ${cartCost},00$
       </h4>
`
}
}

displayCart()