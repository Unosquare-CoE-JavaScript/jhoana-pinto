const expect = require('chai').expect
const Checkout = require('../checkout')
var checkout;

beforeEach(function(){
    checkout = new Checkout();
    checkout.addItemPrice('lamp',1);
    checkout.addItemPrice('blender',2)
});

it('Can add discount rules to total', function(){
    checkout.addDiscount('lamp',3,2)
    checkout.addItem('lamp');
    checkout.addItem('lamp');
    checkout.addItem('lamp');
    let total = checkout.calculateTotal();
    console.log("holaa", total)
    expect(total).to.equal(2);
});

it('Exception is thrown for item added without price', function(){
    checkout.addDiscount('lamp',3,2)
    expect(()=> checkout.addItem('pluma') ).to.throw();
});