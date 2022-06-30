const sessionFactory = require('../factories/sessionFactory')
const userFactory = require('../factories/userFactory')
const puppeteer = require('puppeteer');

class CustomPage {
    static async build(){
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox']
        });
        
        const page = await browser.newPage();
        const customPage = new CustomPage( page );

        return new Proxy(customPage, {
            get : function(target, property){
                return customPage[property] || browser[property] || page[property];
            }
        })
    }

    async login() {
        
        const user = await userFactory();
        const { session, sig } = sessionFactory(user);
        
        await this.page.setCookie( { name : 'session', value : session } );
        await this.page.setCookie( { name : 'session.sig', value : sig } );
        await this.page.goto('http://localhost:3000/blogs');
        await this.page.waitFor("a[href='/auth/logout']");

    }

    async getContentsOf( selector ){
        return this.page.$eval(selector, el => el.innerHTML);
    }

    get( path ){
        return this.page.evaluate((_path) => {
            return fetch(_path, 
            {
                method: 'GET',
                credentials: 'same-origin',
                headers: {'Content-Typer' : 'application/json'}
            }).then( res => res.json() )
        }, path)
    }

    post( path, data ){
        return this.page.evaluate((_path, _data) => {
            return fetch(_path, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Typer' : 'application/json'
                },
                body : JSON.stringify(_data)
            }).then( res => res.json() )
        }, path, data);
    }

    execRequests( actions ){
        return Promise.all(
            actions.map( ({ method, path, data }) => {
                return this[method](path, data);
            }
        ))
    }

    constructor( page ){
        this.page = page;
    }
}

CustomPage.build()

module.exports = CustomPage;