module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.items = new Object();
        this.discounts = new Object();
    }

    addItemPrice( item, price ){
        this.prices[item] = price;
    }

    addItem(item){
        if(this.prices[item] == undefined){
            throw new Error('Price required');
        }
        if ( this.items[item] == undefined ) {
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }
    
    calculateItemTotal( item ){
        
        var total = 0;
        
        let discount = this.discounts[item];
        
        if (discount != undefined) {
            this.calculateDiscount( item, this.items[item], discount )
        } else {
            total += ( this.prices[item] * this.items[item] );
        }
        return total;
    }
    
    calculateTotal(){
        var total = 0;
        for (const item in this.items) {
            total += this.calculateItemTotal( item )
        }
        return total;
    }

    calculateDiscount( item, itemCount, discount ){
        var total = 0;
        var numOfDiscounts = itemCount / discount.cnt;
            total += numOfDiscounts * discount.price;
            let remainer = itemCount % discount.cnt;
            total += remainer * this.prices[item];
        return total;
    }
    
    addDiscount( item, itemCount, discountPrice ){
        this.discounts[item] = {cnt:itemCount, price: discountPrice}
    }
}