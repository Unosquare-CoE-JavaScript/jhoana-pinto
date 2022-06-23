import {Task} from './types.js'
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const fs = require('fs')

Task.of(2).map(two => two + 1)

const t1 = Task((rej, res) => 
res(2))
.map(two => two + 1)    // It'll take the same two parameters as a promise and they'll be executed from rigth lo left

t1.fork(console.error, console.log)

const app_ = () =>
  fs.readFile('config.json', 'utf-8', (err, contents) => {
    console.log(err, contents)
    if(err) throw err

    const newContents = contents.replace(/3/g, '6')

    fs.writeFile('config1.json', newContents, 
    (err, _) => {
      if(err) throw err
      console.log('success!')
    })
  })

const readFile = ( path, enc ) => 
    Task( (rej, res) => 
        fs.readFile(path, enc, (err, contents) =>
            err ? rej(err) : res(contents)
        ) 
    )

const writeFile = (path, newContents) => 
    Task( (rej, res) =>
        fs.writeFile(path, newContents, err =>
            err ? rej( err ) : res('success!')    
        )
    )


const app = () => 
            readFile( 'config.json', 'utf-8' )
            .map( contents => contents.replace(/9/g, '6'))
            .chain( newContents => writeFile('config1.json', newContents))

app().fork(console.err, console.log)