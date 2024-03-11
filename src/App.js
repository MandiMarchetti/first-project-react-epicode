import logo from "./logo.svg";
import "./App.css";

import ButtonComponent from "./components/ButtonComponent";

import ImageComponent from "./components/ImageComponent";

function App() {
  const miChiamo = "Amanda";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ciao! Mi chiamo {miChiamo}!</p>

        <ButtonComponent buttonTitle="Click Here!" />
        <ImageComponent
          imgSrc="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imgAlt="foto react"
        />
      </header>
    </div>
  );
}

export default App;
