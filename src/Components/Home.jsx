import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  return( 
    <div className="container" >
      <h1>Daily Goals</h1>
      <form >
        <input type="text" placeholder="Title"/>
        <textarea placeholder="Description"></textarea>

        <button type="submit">ADD</button>
      </form>
      
    </div>)
};

export default Home;
