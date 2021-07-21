class Basket {
    constructor() {
        this.items = [];
        this.totalValue = 0;
    }

    add(product) {
        this.items.push(product)
        this.addToTotalValue(product);
    }

    addToTotalValue(product) {
        this.totalValue += product.productPrice;
    }

    removeFromTotalValue(product) {
        this.totalValue -= product.productPrice;
    }

    getTotalValue() {
        return this.items.reduce((prev, curr) => curr.productPrice + prev, 0)
    }

    getBasketSummary() {
        return this.items
            .map((product, i) => `Produkt nr ${i + 1} to ${product.productName} w cenie ${product.productPrice}zł.`);

    }

    remove(no) {
        this.removeFromTotalValue(this.items[no - 1]);
        console.log(`usunięto produkt nr ${no}: ${this.items[no - 1].productName} w cenie ${this.items[no - 1].productPrice}`)
        this.items.splice(no - 1, 1);

    }

}

class Product {
    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }

    setProductPrice(newPrice) {
        this.productPrice = newPrice;
    }

}

const oranges = new Product('Pomarańcze luz', 1)
const cucumbers = new Product('Ogórki', 10)
const shopBasket = new Basket();
const tomatoes = new Product('Pomarańcze', 100)
// shopBasket.add(oranges);
// shopBasket.add(cucumbers);
// shopBasket.add(oranges);
// shopBasket.add(cucumbers);
// shopBasket.add(oranges);
// shopBasket.add(tomatoes);
//
// console.log(shopBasket.getTotalValue())
// shopBasket.showBasket()
// console.log(shopBasket.totalValue)
// shopBasket.remove(2)
// console.log('aaaa')
// shopBasket.showBasket()
// console.log(shopBasket.totalValue)
