import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  return( 
    <div className="container" >
      <form >
        <input type="text" placeholder="Title"/>
        <textarea placeholder="Description"></textarea>
      </form>
      
    </div>)
};

export default Home;
