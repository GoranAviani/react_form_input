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
        setDescriptionInput(e.target.value)
    }
    const submitForm1 = (e) => {
        e.preventDefault()
        console.log({userInput})
        console.log({descriptionInput})
        const formData = {
            userInput: userInput,
            descriptionInput: descriptionInput
        }
        console.log({formData})
        setUserInput('')
        setDescriptionInput('')
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
                <br/>
                {userInput && <p> user input populated</p>}
                {descriptionInput && <p> description input populated</p>}


                <button type="submit">Save form 1º</button>
            </form>
        </>
    )
}

export default Form1;