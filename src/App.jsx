import { useState } from "react";
import "./App.css";
import TemperatureApp from "./Components/TemperatureApp";

function App() {
  // თუ ტემპერატურა 0ზე ნაკლებია, temperature დივის ბეგქრაუნდ ფერი იყოს ლურჯი, თუ მეტია 0ზე და ნაკლებია 15ზე იყოს მწვანე, 15დან 30მდე იყოს ყვითელი, ხოლო 30ის ზევით იყოს წითელი

  const [temp, setTemp] = useState(0);

  return (
    <div className="App">
      <TemperatureApp />
    </div>
  );
}
export default App;
