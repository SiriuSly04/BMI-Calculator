import './App.css';
import React,{useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {

    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height));
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a healthy weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };
  //reload

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div classname="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight: </label>
            <input
              type="text"
              placeholder="Enter weight value(kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height: </label>
            <input
              type="text"
              placeholder="Enter height value(m)"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button classname="btn" type="submit">
              Submit
            </button>
            <button classname="btn btn-outline" onClick={reload} type="Submit">
              Reload
            </button>
          </div>

          <div classname="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
