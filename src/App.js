import React from "react"
import Header from "./components/Header";
import Home from './components/Home';
import Top from './Top'
import Model3 from './components/Model3'
import Modely from "./components/Modely";
import ModelX from "./components/ModelX";
import Solar from "./components/Solar";
import Accessories from "./components/Accessories";
import Footer from "./components/Footer";

const App=()=>{
  return(
    <>
      <Header></Header>
      <Home></Home>

      {/* FOR VIDEO */}
      <Top></Top>  
      
       
      <Model3></Model3>
      <Modely></Modely>
      <ModelX></ModelX>
      <Solar></Solar>
      <Accessories></Accessories>
      <Footer></Footer>
    </>
    
  )
}


export default App;