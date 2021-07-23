const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const ulProducts = document.querySelector('.products ul')
const addProductToShop = e => {
    e.preventDefault();
    const name = nameInput.value;
    const price = Number(priceInput.value);

    const newLi = document.createElement('li');
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;
    const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`);
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Kup!';
    newBtn.classList.add('btn-buy-product');
    // newBtn.setAttribute('data-name', name);
    // newBtn.setAttribute('data-price', price);
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.addEventListener('click', addProductToBasket);

    newLi.appendChild(newStrong).appendChild(newPriceText);
    newLi.appendChild(newBtn);
    ulProducts.appendChild(newLi)

}

addProductForm.addEventListener('submit', addProductToShop)