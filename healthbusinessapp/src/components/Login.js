
const Login = () => {
    return (
        <div className="login-container">
            <h1>Welcome to Almar</h1>
            <form action="/" className="login-form">
                <div className="login-input">
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div className="login-input">
                    <input type="password" id="password" name="password" placeholder="Password"/>
                </div>
                <button className="sign-in-btn">Sign In</button>
            </form>
            <footer className="login-footer">
                <a href="/"><span className="login-forgot-password">Forgot Password?</span></a> 
                <a href="/"><span>Create Account</span></a>
            </footer>
        </div>
    )
}

export default Login
