import logo from "./logo.svg";
import "./output.css";
import "./App.css";
import Login from "./component/Login";
import Products from "./component/Products";
import One from "./component/context/One";
import Task4UseEffect from "./component/Task4UseEffect";
import Task5UserName from "./component/Task5UserName";
import Task6Counter from "./component/Task6Counter";
import Task7Resize from "./component/Task7Resize";
import MouseClick from "./component/MouseClick";
import Comments from "./component/Api/Comments";
import Search from "./component/Api/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
         <Route path="/home" element={<Products />} />
           <Route path="/search" element={<Search />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/context" element={<One />} />
          <Route path="/logout" element={<Task5UserName />} />

          {/* <Products/> */}
          {/* <One/> */}
          {/* <Task4UseEffect/> */}
          {/* <Task5UserName/> */}
          {/* <Task6Counter/> */}
          {/* <Task7Resize/> */}
          {/* <MouseClick/> */}
          {/* <Comments/> */}
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
