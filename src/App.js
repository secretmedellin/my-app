// import logo from "./logo.svg";
import "./App.css";
import pic from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go live On Netlify
        </a>
      </header>
    </div>
  );
}

export default App;
