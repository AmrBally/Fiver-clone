import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" />
              <input
                type="text"
                className=""
                placeholder='Try "building mobil app"'
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>All Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
