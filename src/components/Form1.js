import React, {useState} from "react";

const Form1 = () => {
    const [userInput, setUserInput] = useState()

    const saveUserInput = (e) => {
        console.log(e.target.value)
    }
    const submitForm1 = (e) => {
        e.preventDefault()
        console.log(userInput)

    }
    return (
        <>
        form 1
            <form onSubmit={submitForm1}>
               <label>Input 1</label>
                <input type="text" value={userInput} onChange={saveUserInput}/>


            </form>
        </>
    )
}

export default Form1;