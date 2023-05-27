import '../index.css'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

        let email = useRef();
        let password = useRef();
    
    
        let handleSignInUser = (e)=>{
            e.preventDefault()
    
            let user = {
                email: email.current.value,
                password: password.current.value
              };
    
    
            fetch("http://localhost:5000/users" )
            .then((res)=>{return res.json()})
            .then((data)=>{
                data.filter((user)=>{return user.includes("email")});
                data.filter((user)=>{return user.includes("password")});
            })
    
        }
    

    return ( 
        <div className="signinpage">
            <h1>SignIn</h1>
            <form onSubmit={handleSignInUser}>
                <input type="email" placeholder="Email" ref={email}/>
                <input type="password" placeholder="Enter Password" ref={password} required/>
                <input type="submit" value="SignIn" id='btn1'/>
                <div className='forgot-option'>
                <Link to="/forgot">forgot password?</Link>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;