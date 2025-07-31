import { Link } from "react-router-dom";
import FormInput from "../reuseable/FormInput";
import { Button } from "@mui/material";

const LoginForm = () => {
    return <>
     <h3 className="font-bold text-2xl">Sign In</h3>
     <form className="space-y-4 w-full max-w-md mx-auto bg-white rounded-xl shadow">
    <FormInput type="email" label="Email" name="email" />
    <FormInput type="password" label="Password"name="password" />

    <Button variant="outlined" fullWidth color="primary" type="submit">
          Login
        </Button>

        <div className="text-center mt-5 mb-2">
                <p>Do not have an account? {" "} <Link to="/signin" className="text-blue-500 font-semibold hover:text-blue-600 cursor-pointers">Click Here</Link> to Sign Up</p>
            </div>
            </form>
    
    </>
}


export default LoginForm