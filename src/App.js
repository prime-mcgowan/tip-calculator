import "./App.css";

function App() {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How do you rate the service?</SelectPercentage>
      <SelectPercentage>
        How does your friend rate the service?
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much is the bill?</label>
      <input type="text" placeholder="total bill"></input>
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">It was not good (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was great!!(20%)</option>
      </select>
    </div>
  );
}

function Output() {
  <h3>You pay X (A + B)</h3>;
}

function Reset() {
  <button>Reset</button>;
}

export default App;
