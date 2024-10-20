

import "../styles/login.css"
const  Login =() =>{
return(
    <div className="main-cont">
        <div className="card">
            <div className="top-cont">
                <h2>Login here</h2>
            </div>
            <div className="input-cont">
                <div>
                <label htmlFor="">Username</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
                </div>
            </div>
            <div className="new-cont">
                <a>Sign up</a>
                <a>Forgot Password?</a>
                

            </div>
            <div className="btn-cont">
                <button>Sign In</button>
            </div>

        </div>
        
    </div>
)
}
export default Login