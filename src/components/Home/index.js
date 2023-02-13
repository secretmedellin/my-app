import React from "react";
import pic from "../../logo.jpg";

const Home = () => {
  return (
    <header className="App-header">
      <img src={pic} className="App-logo" alt="logo" />
      <p>Beach Delivery Rentals</p>
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newport Beach, CA 92663
        </a>
      </div>
    </header>
  );
};

export default Home;
