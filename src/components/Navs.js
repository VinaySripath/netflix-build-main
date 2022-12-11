import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import "./Navs.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/580b57fcd9996e24bc43c529.png";
import avatar from "../Images/Netflix-avatar.png";

function Navs() {
  const [show, handleShow] = useState(false);
  const [inputClass, setInputClass] = useState("hide_input");
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const handleInputClass = () => {
    if (inputClass === "hide_input") {
      setInputClass("show_input");
    } else {
      setInputClass("hide_input");
    }
  };

  const searchRequest = (event) => {
    if (event.target.value.trim() !== "") {
      navigate("/search", { state: event.target.value });
    } else {
      navigate("/");
    }
  };

  return (
    <div className={`navs ${show && "nav_black"}`}>
      <div className="nav_content">
        <div className="nav_start">
          <Link to={"/"} className="nav_link">
            <img className="nav_logo" src={logo} alt="Netflix logo" />
          </Link>
          <Link to={"/movies"} className="nav_link">
            <button className="nav_button">movies</button>
          </Link>
          <Link to={"/series"} className="nav_link">
            <button className="nav_button">series</button>
          </Link>
        </div>
        <div className="nav_end">
          <div className="search_bar">
            <input
              className={`${inputClass} input_bar_style`}
              onChange={searchRequest}
            ></input>
            <button
              className={`nav_search ${
                inputClass === "show_input" && "style_search"
              }`}
              onClick={handleInputClass}
            >
              <HiSearch
                size={25}
                color={`${inputClass === "show_input" ? "#000000" : "#ffffff"}`}
              />
            </button>
          </div>
          <img className="nav_avatar" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navs;
