import {Card, CardContent, Typography} from "@mui/material"
import  PersonIcon from "@mui/icons-material/Person"
import StoreIcone from "@mui/icons-material/Store"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

const roleIcons = {
    customer : <PersonIcon fontSize="large" />,
    vendor : <StoreIcone fontSize="large" />,
    deliveryBoy : <LocalShippingIcon fontSize="large" />
}


const roleLabels = {
    customer : "Customer",
    vendor : "Vendor",
    deliveryBoy : "Delivery Boy"
}


const RoleCard = ({role, selected, onSelect}) => {
    return <>
    <Card 
        onClick = {() => onSelect(role)}
        className={`cursor-pointer w-32 text-center transition duration-300 ${
            selected ? "border-2 border-blue-600 shadow-md bg-blue-500" : "border border-gray-300 hover:shadow"}`}
    >
        <CardContent className="flex flex-col items-center justify-center p-4">
        <div className="text-blue-700 mb-2">{roleIcons[role]}</div>
        <Typography variant="subtitle1" fontWeight="bold">
          {roleLabels[role]}
        </Typography>
      </CardContent>


    </Card>
    </>
    
}


export default RoleCard


