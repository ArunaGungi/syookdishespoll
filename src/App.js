import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayDishes from "./components/DisplayDishes";
import DisplayVoteData from "./components/DisplayVoteData";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/displaydishes" element={<DisplayDishes/>}></Route>
          <Route path="/polldata" element={<DisplayVoteData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
