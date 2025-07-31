import RoleCard from "../components/auth/RoleCard";
import RegisterForm from "../components/auth/RegisterForm";
import { useState } from "react";

const roles = ["customer", "vendor", "deliveryBoy"]

const RegisterPage = () => {
    const [selectedRole, setSelectedRole] = useState("")

    return <>
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100 p-4">
            <h2 className="text-2xl font-bold text-center">Choose Your Role</h2>

            <div className="flex gap-6">
                
                {
                    roles.map((role) => (
                        <RoleCard
                            key={role}
                            role={role}
                            selected={selectedRole === role}
                            onSelect={setSelectedRole}
                        />
                    ))
                }
            </div>


            {selectedRole && <RegisterForm selectedRole={selectedRole} />}

            
            

        </div>
    
    </>
}


export default RegisterPage