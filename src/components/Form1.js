import React, {useState} from "react";

const Form1 = () => {
    const [userInput, setUserInput] = useState()
        const [descriptionInput, setDescriptionInput] = useState()


    const saveUserInput = (e) => {
        console.log(e.target.value)
        setUserInput(e.target.value)
    }

    const saveDescriptionInput = (e) => {
             console.log(e.target.value)
        descriptionInput(e.target.value)

    }
    const submitForm1 = (e) => {
        e.preventDefault()
        console.log(userInput)
        console.log(descriptionInput)

    }
    return (
        <>
        form 1
            <form onSubmit={submitForm1}>
               <label>Input 1</label>
                <input type="text" value={userInput} onChange={saveUserInput}/>
<br/>
                               <label>Input 2</label>
                <input type="text" value={descriptionInput} onChange={saveDescriptionInput}/>
                <button type="submit">Save form 1º</button>
            </form>
        </>
    )
}

export default Form1;