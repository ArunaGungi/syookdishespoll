import {useLocation, useNavigate} from "react-router-dom";
import "../stylesheets/displayvotedata.css";

const DisplayVoteData = () => {

    const navigate = useNavigate();
    const setLogout = () => {
        console.log("logout fnc");
        window.localStorage.setItem("username","");
        navigate("/");    
    }

    const updatePollInfo = () => {
        navigate("/displaydishes");
    }
    const location = useLocation();
    const data = location.state;
    let JSONData = JSON.stringify(data);
    localStorage.setItem("votedata",JSONData);
    
    let listOfObj = localStorage.getItem("votedata");
    console.log(JSON.parse(listOfObj));
    const userName = window.localStorage.getItem("username");
    return (
        
        <>
        <div id="voteinfo">
        <button type="submit" name="logout" className="userlogout" onClick={setLogout}>Logout</button>
        <h1>Hi, {userName.slice(0,1).toUpperCase()+userName.slice(1,userName.length)}! Here is the result of your poll for your favorite dishes</h1>
        
        <br></br>
        <h3>List of Dishes Rank Wise</h3>
        <br></br>
        <h4>Dish1 : <span>{data.rankWiseData.rank3}</span></h4>
        <h4>Dish2 : <span>{data.rankWiseData.rank2}</span></h4>
        <h4>Dish3 : <span>{data.rankWiseData.rank1}</span></h4>
        </div>

        <button type="submit" id="updatepolls" onClick={updatePollInfo} 
        >Change your poll Data?</button>&nbsp;&nbsp;&nbsp;&nbsp;

        </>
        
    )
    
}

export default DisplayVoteData;