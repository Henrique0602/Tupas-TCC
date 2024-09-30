const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn")
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; 



let cart =[];

// Abrir o Modal do carrinho
cartBtn.addEventListener("click" , function(){
    updateCartModal();
    cartModal.style.display="flex"
   
})

//Fechar o modal do carrinho 
cartModal.addEventListener("click" , function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})


menu.addEventListener("click" , function(event){

    let parentButton  = event.target.closest(".add-to-cart-btn")

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data_price"))

        //Adicionar ao carrinho 
        addToCart(name, price)

    }
})


//função para adicionar no carrinho 

function addToCart (name, price){

    const existingItem= cart.find(item => item.name === name)

    if(existingItem){
        //Se o item ja existe, aumenta so a quantidade +1

        existingItem.quantity += 1;

    }else{
        cart.push({
            name,
            price,
            quantity: 1,
        })
    }
  
    updateCartModal()
}

// Atualizar o Carrinho

function updateCartModal(){
    cartItemsContainer.innerHTML="";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML =`

            <div class="flex items-center justify-between">
                <div>
                  <p class="font-bold">${item.name}</p>
                  <p>Qtd : ${item.quantity}</p>
                  <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>

              
                <button class="remove-from-cart-btn" data-name="${item.name}">
                    Remover
                </button>
              

            </div>


        `

       total += item.price * item.quantity;
 
        cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR" ,{
        style:"currency",
        currency : "BRL"
    });

    cartCounter.innerText = cart.length;
}


// Remover item

cartItemsContainer.addEventListener("click",function(event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")
       
        removeItemCart(name)
    }
    
  
})

function removeItemCart(name){
    const index = cart.findIndex(item => item.name ===name);

    if(index !== -1){
        const item = cart[index];
        
        if(item.quantity >1){
            item.quantity -= 1;
            updateCartModal()
            return;
        }
        
        cart.splice(index,1);
        updateCartModal();
    }
}

addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value
    if(inputValue !== ""){
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }

})

//Finalizar Pedido

checkoutBtn.addEventListener("click", function(){

    const isOpen = checkrestauranteopen();
    if(!isOpen){
        Toastify({
            text: "Ops, o restaurante esta fechado !!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
          }).showToast();
        return;
    }



    if(cart.length === 0)return
    if(addressInput.value ===""){
        addressWarn.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        return;
    }

    //Enviar Pedido via WPP

    const cartItems = cart.map((item) => {
        return (
            `
            Nome : (${item.name}) 
            Quantidade : (${item.quantity}) 
            Preço : R$ (${item.price}) | 
            `
        )
    }).join("")

    const message = encodeURIComponent(cartItems)

    const phone = "5511995750602"

    window.open( `https://wa.me/${phone}?text=${message} Endereço: ${addressInput.value}` , "_blank")

    cart = []
    updateCartModal()
})

// verificar horario
function checkrestauranteopen(){
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22; // true
}
  
const spanItem = document.getElementById("date-span")
const isOpen = checkrestauranteopen()

if(isOpen){
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600")
}else{
    spanItem.classList.remove("bg-green-600");
    spanItem.classList.add("bg-red-500")
}

