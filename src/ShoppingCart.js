
module.exports = class ShoppingCart {
    constructor() {
        this.items = []
    };
    getItems() {
        return this.items
    };
    addItem(itemName, quantity, price) {
        const item = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price,
        };
        return this.items.push(item);
    };
    clear() {
        return this.items = [];
    }
    total() {
        return this.items.reduce(((currentTotal, currentItem) => {
            return (currentItem.pricePerUnit*currentItem.quantity) + currentTotal
        }),0);
        
    }
}