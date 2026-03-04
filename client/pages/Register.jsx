import { useState } from 'react'
import axios from 'axios'
const Register = () => {

    const [formData,setFormData] = useState({name:"",email:"",password:""})

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  
    const handleSubmit = async (e) =>{

    try {
          e.preventDefault()
           const addDatas = await axios.post("http://localhost:5000/api/auth/register",formData)
           alert(addDatas.data.msg)
        
    } catch (error) {
        alert(error.response.data.msg)
    }

    }

  return (
   <>
   <div>
    <h1>Register Form</h1>

    <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Enter the Name' value={formData.name} onChange={handleChange} />
        <input type="email" name='email' placeholder='Enter the email' value={formData.email} onChange={handleChange} />
        <input type="password" name='password' placeholder='Enter the password' value={formData.password} onChange={handleChange} />
        <input type="submit" value={"Register"}/>
    </form>
   </div>
   </>
  )
}

export default Register