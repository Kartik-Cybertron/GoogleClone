import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div class="home">
      {/* <h1>This is Home Page</h1> */}
      <div className="home__header">
        {/* <h2>this is header</h2> */}
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        {/* <h2>this is body</h2> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt=""
        ></img>
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
