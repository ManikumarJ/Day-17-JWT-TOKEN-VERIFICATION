import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [formData,setFormData] = useState({email:"",password:""})

    const handleChange = (e)=>{

        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const login = await axios.post("http://localhost:5000/api/auth/login",formData)

            localStorage.setItem("jwtToken", login.data.token)
            navigate("/dashboard")

        } catch (error) {
            alert(error.response?.data?.msg || "Login failed")
        }
    }
  return (
   <>
   <div>
    <h1> Login FORM</h1>

    <form onSubmit={handleSubmit}>
        
        <input type="email" name='email' placeholder='Enter the email' value={formData.email} onChange={handleChange} />
        <input type="password" name='password' placeholder='Enter the password' value={formData.password} onChange={handleChange} />
        <input type="submit" value={"Login"}/>
    </form>
   </div>
   </>
  )
}

export default Login