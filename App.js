import "./App.css";

import Checkbox from "./Checkbox";

const App = () => {
  return (
    <div className="app">
      <Checkbox label="Kyc status approved?" checked={true} />
      <Checkbox label="kyc status rejected?" />
      <Checkbox label="kyc status received?" />
    </div>
  );
};
export default App;