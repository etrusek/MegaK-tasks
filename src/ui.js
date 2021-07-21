const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUi = document.querySelector('.basket-list')

const basket = new Basket();


const createBasketUi = () => {
    basketUi.innerText = '';
    for (const oneProductInfo of basket.getBasketSummary()) {
        const newLi = document.createElement('li');
        newLi.innerText = oneProductInfo;
        basketUi.appendChild(newLi);
    }
};

const addProductToBasket = (e) => {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);
    const newProduct = new Product(name, price);
    basket.add(newProduct);
    createBasketUi();
}

buyBtns.forEach(btn => {
    btn.addEventListener('click', addProductToBasket)
})
