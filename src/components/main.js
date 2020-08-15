import React from "react";
import "../App.css";
import logo from "../images/logo.png"
const adsList = [
  "https://www.youtube.com/embed/n3XvBu55S40",
  "https://www.youtube.com/embed/QOSqnECGNrw",
  "https://www.youtube.com/embed/Gzs1XXog3bA",
  "https://www.youtube.com/embed/fsM7CzEVAaU",
];
function Main() {
  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-md-6 col-12 left-box pb-5 pl-5">
        <img className="logo-img" src={logo} alt="logo"/>
          <h1 className="pt-5 mt-5 pb-5 font-sans-serif head-font">
            Caroro Mao Ka Vishwas  
          </h1>
          <h3 className="text-body pb-2 pt-3 font-sans-serif">
            Dettol Liquid Disinfectant for Multi-Purpose Germ Protection.
          </h3>
          <ul
            style={{ listStyleType: "square", fontSize: "22px" }}
            className="pb-4 mb-5"
          >
            <li>Menthole cool fregrance</li>
            <li>Protect From 100 illness causing germs</li>
            <li>Persnal hygiene product</li>
            <li>IMA Recommended</li>
          </ul>
        </div>
        <div className="col-md-6 pt-5 col-12">
          <div className="row">
            {adsList.map((video, i) => (
              <div className="col-md-6 col-12 pl-4">
                <iframe
                  style={{ borderRadius: "20px" }}
                  width="100%"
                  height="215"
                  src={video}
                  frameborder="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
