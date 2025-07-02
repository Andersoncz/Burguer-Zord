const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCheckout = document.getElementById("cart-checkout");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");
let cart = [];

//Abrir modal do carrinho
cartBtn.addEventListener("click", () => {
    updateCart();
    // Atualiza o contador do carrinho
  cartModal.style.display = " flex";
});
//fechar modal do carrinho
cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});
//Fechar modal do carrinho com botão
closeModalBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

menu.addEventListener("click", (e) => {
  let parentButton = e.target.closest(".add-to-cart-btn");
  if (parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parseFloat(parentButton.getAttribute("data-price"));
    addToCart(name, price);
  }
});
//função para add ao carrinho
function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1; //se o item já existe, apenas aumenta a quantidade
  } else {
    cart.push({
      name,
      price,
      quantity: 1,
    });
  }
  updateCart();
}
//Função para atualizar o carrinho
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");

    cartItemElement.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <div>
                <p class="font-bold">${item.name}</p>
                <p>Qtd: ${item.quantity}</p>
                <p class="font-medium mt-2">R$ ${item.price}</p>
            </div>
            
            <button>
                Remover
            </button>
     
    </div>
    `
    total += item.price * item.quantity;

    
    cartItemsContainer.appendChild(cartItemElement);
});
    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        });
// Atualiza o contador do carrinho
    cartCounter.innerHTML = cart.length
}
            
            
            
