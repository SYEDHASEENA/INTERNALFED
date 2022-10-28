import React, { useState } from "react";

function App() {
  const [name, setName] = useState(" ");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function calculate() {
    var heightSquared = ((height / 100) * height) / 100;
    var bmi = weight / heightSquared;

    if (bmi < 16) {
      window.alert(
        "Hi.." + name + "...You are completely UnderWeight (Severe Thinner)"
      );
    } else if (bmi >= 16 && bmi < 17)
      window.alert(
        "Hi.." + name + "...You are Moderately UnderWeight (Moderate Thinner)"
      );
    else if (bmi >= 17 && bmi < 18.5)
      window.alert(
        "Hi.." + name + "...You are little UnderWeight (Mild Thinness)"
      );
    else if (bmi >= 18.5 && bmi <= 24.99) {
      window.alert("Hi.." + name + "...You are in a healthy weight range");
    } else if (bmi >= 25 && bmi <= 29.9) {
      window.alert("Hi.." + name + "...You are overweight");
    } else if (bmi >= 30) {
      window.alert("Hi.." + name + "...You are obese");
    } else if (bmi < 18.5) {
      window.alert("Hi.." + name + "...You are under weight");
    }
    bmi = Math.round(bmi * 100) / 100;
  }
  function submitMe(e) {
    e.preventDefault();
    calculate();
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleWeight(e) {
    setWeight(e.target.value);
  }
  function handleHeight(e) {
    setHeight(e.target.value);
  }

  return (
    <div>
      <form onSubmit={submitMe}>
        <label>Enter ur name</label>
        <input type="text" name={name} value={name} onChange={handleName} />
        <label>Enter ur weight</label>
        <input
          type="text"
          name={weight}
          value={weight}
          onChange={handleWeight}
        />
        <label>Enter ur height</label>
        <input
          type="text"
          name={height}
          value={height}
          onChange={handleHeight}
        />
        <input type="submit" value="submit " />
      </form>
    </div>
  );
}
export default App;
