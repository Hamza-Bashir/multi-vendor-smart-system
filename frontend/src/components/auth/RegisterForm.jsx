import { Button } from "@mui/material";
import FormInput from "../reuseable/FormInput";
import {Link} from "react-router-dom"
const RegisterForm = ({selectedRole}) => {
  const isBusiness = selectedRole === "business";
  const isVendor = selectedRole === "vendor";
  const isDeliveryBoy = selectedRole === "deliveryBoy";

  return (
    <>
    <h3 className="font-bold text-2xl">Sign Up</h3>
      <form className="space-y-4 w-full max-w-md mx-auto bg-white rounded-xl shadow">
        <FormInput label="Full Name" name="fullName" />
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />

        {isBusiness && <FormInput label="Business Name" name="businessName" />}

        {isVendor && (
          <>
            <FormInput label="Business Name" name="businessName" />
            <FormInput label="Shop Address" name="shopAddress" />
          </>
        )}

        {isDeliveryBoy && (
          <>
            <FormInput label="CNIC" name="cnic" />
            <FormInput label="Vehicle Number" name="vehicleNumber" />
          </>
        )}

        <Button variant="outlined" fullWidth color="primary" type="submit">
          Register
        </Button>

        <div className="text-center mt-5 mb-2">
                <p>Already have an account? {" "} <Link to="/login" className="text-blue-500 font-semibold hover:text-blue-600 cursor-pointers">Click Here</Link> to login</p>
            </div>
      </form>
    </>
  );
};

export default RegisterForm;
