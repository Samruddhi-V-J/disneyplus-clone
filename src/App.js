// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";

function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
