"use strcict";

const displayMessage = async(m) =>
{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(m)
        }, 3000);
    })
}

displayMessage("Todo en orden")
.then(res => {
    console.log( `Result: ${res}` ) 
    displayMessage("Seguimos esperando").then( res =>
    console.log( `Result: ${res}` ) )
    }
)

const newFunc = async() => {
    let res = await displayMessage("Aquí uso asyncAwait")
    console.log(res);
}

newFunc()