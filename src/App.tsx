import './App.css'
import {type SyntheticEvent, useState} from "react";
import LoginForm from "./LoginForm.tsx";
import useCounter from "./useCounter.ts";
import Counter from "./Counter.tsx";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");

    function handleSubmit(event: SyntheticEvent<HTMLFormElement,SubmitEvent>)
    {
        event.preventDefault();

        if(!email.trim() || !password.trim())
        {
            setMessage("Please fill in the fields");
            return;
        }
        setMessage("Login successful !");

        console.log(email);
        console.log(password);
    }

    return (

        <div>
            <LoginForm
                message={message}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                setEmail={setEmail}
                email={email}
                password={password}
            />

            <Counter/>

        </div>

    );

}

export default App;