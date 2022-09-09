import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        SOLID PRINCIPLES IN REACT
        <br />
        <br />
        <Link to="/single_responsiblity"> Single Responsiblity Principle</Link>
        <br />
        <br />
        <Link to="/open_closed"> Open Closed Principle</Link>
        <br />
        <br />
        <Link to="/interface_segregation">Interface Segregation Principle</Link>
        <br />
        <br />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
