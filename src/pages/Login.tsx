import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState("")
  const role = localStorage.getItem("role")
  useEffect(() => {
    if(role === 'admin'){
      navigate('/admin')
    }else if (role === "coop"){
      navigate('/coop')
    }else{
      navigate('/', {replace: true})
    }
  }, [])

  const userNameHandler = (e: any) => {
    setUserName(e.target.value)
  }
  const passWordHandler =(e:any) => {
    setPassword(e.target.value)
  }
  const loginHandler = (e: any) => {
    e.preventDefault();
    if (userName === 'admin' && password === "12345") {
      navigate('/admin')
      localStorage.setItem('role', 'admin')
      resetFunc();
    }else if (userName === "coop" && password === "12345"){
      navigate("/coop")
      localStorage.setItem('role', 'coop')
      resetFunc();
    }else{
      alert("wrong inputs")
      resetFunc();
    }
  }

  const resetFunc = ()=>{
    setUserName("")
    setPassword("")
  }
  return (
    <form onSubmit={loginHandler}>
      <input type="text" onChange={userNameHandler} value={userName} palceholder="Enter Username" />
      <input type="text" onChange={passWordHandler} value={password} palceholder="Enter Password" />
      <button onClick={loginHandler}>Login</button>
    </form>
  )
}

export default Login