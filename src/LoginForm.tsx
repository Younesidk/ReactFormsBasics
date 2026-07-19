import type {
    Dispatch,
    SetStateAction,
    SyntheticEvent
} from "react";

interface LoginProps {
    email: string;
    password: string;
    message: string;

    handleSubmit: (
        event: SyntheticEvent<HTMLFormElement, SubmitEvent>
    ) => void;

    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
}


function LoginForm({
                       email,
                       password,
                       message,
                       setEmail,
                       setPassword,
                       handleSubmit
                   }: LoginProps) {
    return (
        <form onSubmit={handleSubmit}>

            <label>Email :</label>
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />

            <br/>
            <br/>

            <label>Password :</label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />

            <p>Email: {email}</p>
            <p>Password Length: {password.length}</p>

            <button>
                Login
            </button>

            <p>{message}</p>

        </form>
    )
}

export default LoginForm;