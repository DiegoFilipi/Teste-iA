// Adicione isto no início do seu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Todo o seu código JS que estava no CodePen
    // Isso garante que o DOM está carregado
});

// Carrinho de Compras
let cart = [];
let cartModal = document.getElementById("cart-modal");
let cartBtn = document.querySelector(".cart-btn");
let closeBtn = document.querySelector(".close");
let addToCartBtns = document.querySelectorAll(".add-to-cart");
let cartItemsContainer = document.getElementById("cart-items");
let cartTotalElement = document.getElementById("cart-total");
let cartCountElement = document.getElementById("cart-count");

// Abrir modal do carrinho
cartBtn