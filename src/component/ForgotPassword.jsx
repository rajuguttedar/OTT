import { useRef } from "react";

const ForgotPassword = () => {
    let email=useRef()
    let pass=useRef()
    let re_pass=useRef()
    let otp=useRef()

    let handleforgotpass = (e)=>{
        e.preventDefault()

        let getUserdetails = {
            username: email.current.value,
            email: pass.current.value,
            password: pass.current.value,
            re_enterd_password: re_pass.current.value,
            mono: otp.current.value
          };

        fetch("http://localhost:5000/users" , 
        {
            method : "GET"
        } 
        )
        .then(()=>{
            alert("accessed user details");
            window.location.reload();
        })

    }
    return ( 
        <div className="forgotpage">
            <h1>ForgotPassword</h1>
            <form onSubmit={handleforgotpass}> 
                <input type="text" placeholder="Phone Number Or Email" ref={email}/>
                <input type="password" placeholder="Enter Password" ref={pass}/>
                <input type="password" placeholder="Re-enter Password" ref={re_pass}/>
                <input type="button" value="Send OTP" id="btn1" />
                <input type="number" placeholder="Enter OTP" ref={otp}/>
                <input type="button" value="Submit" id="btn2" />
                <input type="button" value="Reset" id="btn2" />
            </form>
        </div>
     );
}
 
export default ForgotPassword;