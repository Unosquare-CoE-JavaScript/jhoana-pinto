const chai = require('chai')
const expect = require('chai').expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const request = require('request')
const getUsers = require('../users.js')
var spy;    

chai.should();
chai.use(sinonChai);

describe('Test getUsers', function(){
    beforeEach(function(){
        spy = sinon.spy();
        sinon.stub(request, 'get').callsFake((url, cb)=>{
            cb({}, {body: '{"users":["user1","user2"]}'})
        })
        getUsers(spy);
    });

    afterEach(()=>{
        sinon.restore();
    })

    it('calls the cb', function(){
        getUsers(spy);
        spy.should.have.been.calledOnce;
    })

    it('calls the correct url', function(){
        getUsers(spy);
        request.get.should.have.been.calledWith('http://www.mysite.com/api/users');
    })

    it('returns correct data', function(){
        getUsers(spy);
        spy.should.have.been.calledWith({"users":["user1","user2"]});
    })
})