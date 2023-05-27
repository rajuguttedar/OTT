import { Link } from 'react-router-dom';
import '../index.css'
import { useRef } from 'react';

const SignUp = () => {

        let username = useRef();
        let email = useRef();
        let password = useRef();
        let re_enterd_password = useRef();
        let mono = useRef();
        let dob = useRef();
    
    
        let handleAddUserdetails = (e)=>{
            e.preventDefault()
    
            let newUser = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                re_enterd_password: re_enterd_password.current.value,
                mono: mono.current.value,
                dob: dob.current.value
              };
    
            console.log(newUser);
    
            fetch("http://localhost:5000/users" , 
            {
                method : "POST" ,
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(newUser)
            } 
            )
            .then(()=>{
                alert("new user details added");
                window.location.reload();
            })
    
        }
    

    return ( 
        <div className="signup">
            <h1>SignUp</h1>
            <form onSubmit={handleAddUserdetails}>
            <input type="text" placeholder="Username" ref={username} required/>
            <input type="email" placeholder="Email" ref={email}/>
            <input type="password" placeholder="Enter Password" ref={password} required/>
            <input type="password"  placeholder="Re-enter Password" ref={re_enterd_password} required/>
            <input type="tel" minLength="10" maxLength="10" placeholder="Mobile Number" ref={mono} required/>
            <input type="date" placeholder="Date Of Birth" ref={dob} required/>
            <input type="submit" id='btn1'/>
            <div className="signin-option">
            <span> Already hvae an account?</span>
            <Link to="/signin">SignIn</Link>
            </div>
            </form>
        </div>
     );
}
 
export default SignUp;