import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./HomePage/Home";
import Stories from "./Stories/Stories";
import Footer from "./Footer/Footer";
import Css from "./ProjectsRoadMap/Css";
import JsBasic from "./ProjectsRoadMap/JsBasic";
import Tools from "./Tools/Tools";
import './style/style.css'
import './style/button.css'
import Design from "./HomePage/Design";
import Projects from "./Projects/Projects";
import TodoList from "./Tools/TodoList";
import ShapeForm from "./Shapeslist/ShapeForm";
import Calculator from "./Calculator/Calculator";
import About from "./About/About";


function App() {
  
    
  return (
      <>
        <div className="app-container">
        <Router>
          <Routes>
            <Route exact path='/' element={<Stories/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/design' element={<Design/>} />
            <Route exact path='/development' element={<Projects/>} />
            <Route exact path='/projects/css' element={<Css/>} />
            <Route exact path='/projects/javascript-basic' element={<JsBasic/>} />
            <Route exact path='/projects/tools' element={<Tools/>} />
            <Route exact path='/projects/calculator' element={<Calculator/>} />
            <Route exact path='/projects/createshape' element={<ShapeForm/>} />
            <Route exact path='/projects/todolist' element={<TodoList/>} />
            <Route exact path='/stories' element={<Home/>} />
          </Routes>
        </Router>
        </div>
      </>
  )
}
export default App
