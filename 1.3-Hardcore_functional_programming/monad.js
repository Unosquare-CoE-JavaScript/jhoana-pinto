const Right = x =>
({
 chain: f => f(x),
 map: f => Right(f(x)),
 fold: (f, g) => g(x),
 toString: () => `Right(${x})`
})

const Left = x =>
({
 chain: f => Left(x),
 map: f => Left(x),
 fold: (f, g) => f(x),
 toString: `Left(${x})`
})

const fromNullable = x => x != null ? Right(x) : Left(null)

const findColor = name => fromNullable({ red: "#ff4444", 
                                        blue: "#3b5998", 
                                        yellow: "#fff68f" }
                                        [name])

const res = () => findColor("redff")
                .map(x => x.toUpperCase())
                .fold(
                    () => 'No color', // If result is undefined this will help us handle it
                    color => color, // if there's a result it'll show it
                )

console.log(res());


/////////////////////////////////////////////////////////////


const fs = require('fs')

const getPort_ = () => {
  try {
    const str = fs.readFileSync('config.json')
    const config = JSON.parse(str)
    return config.port
  } catch(e) {
    return 3000
  }
}


const tryCatch = fn => {
    try{
        return Right(fn())
    } catch(e){ 
        return Left(e)
    }
}

const parseJSON = contents => tryCatch( () => JSON.parse(contents) )

const readFileSync = path => tryCatch( () => fs.readFileSync(path) )

const getPort = () => 
    readFileSync(('config.json'))
    .chain ( contents => parseJSON(contents))
    .map ( config => config.port )
    .fold (() => 8080, x => x)

const result = getPort()

console.log(result)

//////////////////////////////////////////////////////

const logIt = x => {
    console.log(x)
    return x
}

//  >> Ex1
//  Refactor streetName to use Either instead of nested if's

const street = user =>
   
    fromNullable(user.address)
    .fold( () => 'no street',
      address => address.street, )

const user = { address: { street: { name: "Willow" } } }

console.log(street(user))

// Ex1: Refactor streetName to use Either instead of nested if's
const streetName = user => 

    fromNullable(user.address)
    .chain( address => fromNullable(address.street))
    .map( street => street.name)
    .fold( () => 'no street',
            answer =>answer )

console.log(streetName(user))

// Ex2: 
// Refactor parseDbUrl to return an Either instead of try/catch

const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

const parseDbUrl = cfg => 
    tryCatch(() => JSON.parse(cfg))
    .fold( () => null,
            c => c.url.match(DB_REGEX))

const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}' 

console.log(parseDbUrl(config)[1]) // 'sally'
console.log(parseDbUrl()) // null

// Ex3: Using Either and the functions above, refactor startApp
// =========================
const startApp = cfg => 

    fromNullable(parseDbUrl(cfg))
    .map(logIt) // to make a log just map the log function
    .fold(  () => "can't get config",
            ([_, User, password, db]) => `starting ${db}, ${User}, ${password}`
        )

console.log(String(startApp(config)));  // "starting mydb, sally, muppets"
console.log(String(startApp()));    // "can't get config"