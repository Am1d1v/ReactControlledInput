import { useState } from "react";

function Login(){

    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');

    const [data, setData]  = useState({username: '', password: ''})
    
    function handleFormSubmit(event){
        event.preventDefault();

        alert(`Login: ${data.username} Password: ${data.password}`);    
    }

    function handleInputChange(event, name){
        setData({...data, [name]: event.target.value})
    }

    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Username: 
                <input type="text"
                       value={data.username} 
                       onChange={(event) => handleInputChange(event, 'username')} />
            </label>
            

            <label>Login: 
                <input type="password" 
                       value={data.password} 
                       onChange={(event) => handleInputChange(event, 'password')}/>
            </label>

            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;