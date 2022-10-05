import {react, useEffect, useState} from "react";
import axios from "axios";
import "../stylesheets/displayDishes.css";
import { useNavigate } from "react-router-dom";

const DisplayDishes = () => {

    const [dishesData, setDishesData] = useState([]);

    const [isClicked, setClicked] = useState(false);

    const navigate = useNavigate();

    // const [points, setPoints] = useState({
    //     "rank1":0,
    //     "rank2":0,
    //     "rank3":0,
    //     "norank":""
    // })

    const [rankWiseData, setRankWiseData] = useState({
        rank1:"",
        rank2:"",
        rank3:"",
        username:""
    })

    //const [selectedDishes, setSelectedDishes] = useState([]);

    useEffect(() => {
        try {
            axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
            .then((result) => setDishesData(result.data));
        }
        catch(error) {
            console.log(error);
        }
        
    },[])

    // console.log(dishesData);
    // console.log(pollData);

    const userName = window.localStorage.getItem("username");
    //console.log(userName);

    const handleSubmit = () => {
        
        console.log(rankWiseData.username);
        setClicked(current => !current);
        navigate("/polldata",{state:{rankWiseData}});
        //setSelectedDishes([...selectedDishes, {dishname:dishName, username:userName, rank:Rank}]);
    }

    console.log(rankWiseData);

    const setLogout = () => {
        window.localStorage.setItem("username","");
        navigate("/");    
    }

    return (
        <>
        <div className={"top"}>
        <p id="username">Hi, {userName.slice(0,1).toUpperCase()+userName.slice(1,userName.length)}! <span id="welcome">Welcome to Dishes Poll! Choose your favorite dish and get the result of overall poll</span></p>

        {() => setRankWiseData({...rankWiseData,username:userName})}

        <button type="submit" id="checkpolls" onClick={handleSubmit} 
        >Check the Polls?</button>&nbsp;&nbsp;&nbsp;&nbsp;


        <button type="submit" name="logout" id="logout" onClick={setLogout}>Logout</button>
        </div>
        {dishesData.map((dish, key) => (

            <div className="card">
                <table>
                <tbody>
                <tr key={key}>
                    <td>
                    
                    <h4>{dish.dishName}</h4>
                    <h4>{dish.description}</h4>
                    <img src={dish.image}></img>

                    <br></br><br></br>
                    
                    <label><input type="radio" className={"rank1"} name="rank1" id="1"
                    style = {{backgroundColor: isClicked ? 'salmon' : "", color: isClicked ? 'white' : ""}} 
                    onClick= {() => setRankWiseData({...rankWiseData,rank1:dish.dishName, username:userName})}/>Rank1</label>&nbsp;&nbsp;

                    <label><input type="radio" className={"rank2"} name="rank2" id="2"
                    style = {{backgroundColor: isClicked ? 'salmon' : "", color: isClicked ? 'white' : ""}} 
                    onClick= {() => setRankWiseData({...rankWiseData,rank2:dish.dishName})}/>Rank2</label>&nbsp;&nbsp;
                    
                    <label><input type="radio" className={"rank3"} name="rank3" id="3"
                    style = {{backgroundColor: isClicked ? 'salmon' : "", color: isClicked ? 'white' : ""}} 
                    onClick= {() => setRankWiseData({...rankWiseData,rank3:dish.dishName})}/>Rank3</label>&nbsp;&nbsp;
                    
                    {/* <input type="radio" className={"norank"} name="norank"
                    style = {{backgroundColor: isClicked ? 'salmon' : "", color: isClicked ? 'white' : ""}} 
                    onClick= {() => handleClick(dish.dishName,userName,"norank")}/><label>No Rank</label>&nbsp;&nbsp; */}

                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        ))}
        
        </>
    )
}

export default DisplayDishes;


//local storage :- permanent unitll deleted manually
//session storage :- data is stored till the browser window in open


let data = {
    id: 101,
    name: "something"
}

let jsonStr = JSON.stringify(data);

//localStorage.addItem("studentData",jsonStr);

let obj = JSON.parse(jsonStr)

//sessionStorage.addItem("studentData",{});