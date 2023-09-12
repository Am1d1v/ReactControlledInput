import { useState } from "react";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    function handleFormSubmit(event){
        event.preventDefault();

       

        alert(`Login: ${username} Password: ${password}`);    
    }

    
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Username: 
                <input type="text" name="username" value={username} onChange={handleUsername} />
            </label>
            

            <label>Login: 
                <input type="password" name="password" value={password} onChange={handlePassword}/>
            </label>

            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;