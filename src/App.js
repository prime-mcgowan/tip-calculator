import "./App.css";

function App() {
  return (
    <>
      <h1>Tip Calculator</h1>

      <h2>How much is the bill?</h2>
      <input type="text"></input>

      <h2>How do you rate the service?</h2>
      <select>
        <option>It was not good (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>It was great!!(20%)</option>
      </select>

      <h2>How does your friend rate the service?</h2>
      <select>
        <option>It was not good (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>It was great!!(20%)</option>
      </select>

      <div>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
