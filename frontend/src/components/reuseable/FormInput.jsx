import {TextField} from "@mui/material"

const FormInput = ({label, name, value, onChange, type = "text", required = false}) => {
    return <>
    <TextField
    fullWidth
    label = {label}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    required={required}
    margin="normal"
    variant="outlined"
    />
    </>
}

export default FormInput