import { useState } from "react"
import { Output } from "./Output";


export const Greeting = () => {
    const [changeText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    }
    
    return (
        <div>
            <h2>Hello World!</h2>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}