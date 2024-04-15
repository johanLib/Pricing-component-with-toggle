const offres = document.querySelectorAll('.pricing-card__price__number');
const btn = document.getElementById('toggle-switch');
const circle = document.querySelector('.toggle-switch__circle');
const monthlyPrices = [19.99, 24.99, 39.99];
const annualPrices = [199.99, 294.99, 399.99];
btn.addEventListener('click', () => {
    circle.classList.toggle('toggle-switch__circle--annual');
    if(circle.classList.contains('toggle-switch__circle--annual')) {
        offres.forEach((price, index) => {
            price.textContent = annualPrices[index];
        });
    }
    else {
        offres.forEach((price, index) => {
            price.textContent = monthlyPrices[index];
        });
    }
})