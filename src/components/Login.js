import react, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import "../stylesheets/Login.css";
import axios from "axios";
import dishimage from "../images/dishimage.jpg";

const Login = () => {

    const [loginCredentails,setLoginCredentails] = useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();

    const [allUsers, setUsersData] = useState([]);


    useEffect(() => {
        console.log(localStorage.getItem("votedata"));
        try {
            axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json')
            .then(response => setUsersData(response.data));
        }
        catch(error) {
            console.log(error);
        }
    },[])

    const validateCredentails = () => {
        let found = 0;
        if(found !== 1) {
            allUsers.map((item,key) => {
                if(item.username === loginCredentails.username && item.password === loginCredentails.password) {
                    found = 1;
                    window.localStorage.setItem("username",loginCredentails.username);
                }
            })
        }
        if(found == 1) {
            window.alert("login successful");
            navigate("/displaydishes");
        }
        else {
            window.alert("login unsuccessful");
        }
    }
    return (
        <>
        <h1>Welcome to Dishes Poll</h1>
        <div className="logo">
            <img id="dishimage" src={dishimage}></img>
        </div>
        
        <div className="login">
            <h1>Login</h1>
            <label>Username: </label>
            <input type="text" id="name" name="username"
            onChange={(e) => setLoginCredentails({...loginCredentails, username:e.target.value})}></input><br></br>
            <br></br>
            <label>Password: </label>
            <input type="password" id="pwd" name="pwd"
            onChange={(e) => setLoginCredentails({...loginCredentails, password:e.target.value})}></input><br></br>
            <br></br>
            <button type="submit" name="login" id="login" onClick={validateCredentails}>Login</button>
        </div>
        </>
    )
}


export default Login;