import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify';

const useAuth = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
    role: "listener"
  }
  });
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")))
  const [isListener, setIsListener] = useState(true);
  const registerForm = (data) => {
    console.log(data);
     const user = registeredUsers.find((val) => {
      return val.email === data.email;
    });
    if (user) {
      toast.error("Email already registered !");
      return;
    }
    toast.success("registered successfully !");
    const arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    reset();
  };

  const loginForm = (data)=>{
   
    
    const user = registeredUsers.find((val)=>{
        return val.email === data.email && val.password === data.password;
    })
    if(!user){
       toast.error("user not found");
        return; 
    }
    setLoggedInUser(user)
     console.log(user);
    localStorage.setItem("loggedInUser",JSON.stringify(user))
    toast.success("login successful");
    if(user.role === 'artist'){
        navigate("/main/artist");
    }
    else{
        navigate("/main")
    }
    
  }
  return {
    register,
    errors,
    handleSubmit,
    registerForm,
    setIsListener,
    isListener,
    setValue,
    navigate,
    loginForm,
    loggedInUser
  };
}

export default useAuth
