const expect = require('chai').expect

it('Expects true equal to true', function(){
    expect(true).to.equal(true);
});

// Example of a suite

describe('test_suite1',function(){
    describe('test_suite2',function(){
        it('test1', function(){
            expect(true).to.equal(false);
        });
    })
    it('test2', function(){
        expect(true).to.equal(false);
    });
})

// Example for moka Hooks

describe('test_suite3',function(){
    before('test4', function(){
        console.log('Testing Before')
    });
    after('test5', function(){
        console.log('Testing After')
    });
    beforeEach('test6', function(){
        console.log('Testing beforeEach')
    });
    it('test3', function(){
        expect(true).to.equal(true);
    });
    it('test4', function(){
        expect(true).to.equal(true);
    });
    it('test5', function(){
        expect(true).to.equal(true);
    });
})

// Example for async testing

function asyncFunc(cb){
    setTimeout(() => {
        cb("Yep")
    },1000)
}
it('test async', function(done){
    asyncFunc((str) =>{
        expect(str).to.equal('Yep');
        done()
    })
});

function promiseFunc(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Yep")
        },1000)
    })
}
it('test promise', function(){
    return promiseFunc().then((res) =>{
        expect(res).to.equal('Yep');
    })
});

async function asyncAwaitFunc(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Yep")
        },1000)
    })
}
it('test asyncAwait', async function(){
    let res = await asyncAwaitFunc()
        expect(res).to.equal('Yep');
});