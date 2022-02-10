import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };
  const sayHi = () => {
    alert(`Hi there ${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-container">
          <div className="form-row">
            <input value={firstName} onChange={handleFirstNameChange} />
          </div>
          <div className="form-row">
            <input value={lastName} onChange={handleLastNameChange} />
          </div>
          <div className="form-row">
            <button onClick={sayHi}>
              Hi there {firstName} {lastName}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
