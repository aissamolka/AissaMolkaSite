const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    image.addEventListener('click', function() {
        alert('Vous avez cliqué sur l\'image d\'un produit!');
    });
});

const shopNowBtn = document.getElementById('shop-now-btn');
if (shopNowBtn) {
    shopNowBtn.addEventListener('click', function() {
        alert('Bienvenue dans notre boutique de voitures et motos!');
    });
};
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Votre commande a bien passé!');
    });
});