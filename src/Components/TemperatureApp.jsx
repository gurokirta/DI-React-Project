import { useState } from "react";

function temperature({ initialTemperature = 0 }) {
  // თუ ტემპერატურა 0ზე ნაკლებია, temperature დივის ბეგქრაუნდ ფერი იყოს ლურჯი, თუ მეტია 0ზე და ნაკლებია 15ზე იყოს მწვანე, 15დან 30მდე იყოს ყვითელი, ხოლო 30ის ზევით იყოს წითელი

  const [temp, setTemp] = useState(initialTemperature);
  const handleIncrementTemp = () => {
    setTemp(prev => prev + 1);
  };
  const handleDecrementTemp = () => {
    setTemp(prev => prev - 1);
  };

  function checkTemp(temp) {
    if (temp < 0) {
      return { backgroundColor: "blue" };
    } else if (temp >= 0 && temp < 15) {
      return { backgroundColor: "green" };
    } else if (temp >= 15 && temp < 30) {
      return { backgroundColor: "#fcfc62" };
    } else {
      return { backgroundColor: "red" };
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="temperature" style={checkTemp(temp)}>
          <h3>{temp}C</h3>
        </div>
        <div className="control-container">
          <div className="controller plus" onClick={handleIncrementTemp}>
            +
          </div>
          <div className="controller minus" onClick={handleDecrementTemp}>
            -
          </div>
        </div>
      </div>
    </div>
  );
}

export default temperature;
