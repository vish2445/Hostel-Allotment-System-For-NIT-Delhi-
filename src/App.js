import "./App.css";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home  from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<SignUp/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
