import React from 'react'

const Login = () => {
    return (
        <form>
            <h1>Login!</h1>
            <label htmlFor='username'>Username </label>
            <input name='username' placeholder='Username'/> <br />
            <label htmlFor='password'>Password </label>
            <input type='password' name='password' placeholder='Password'/> <br />
            <input type='submit' value='Login'/>
        </form>
    )
}

export default Login