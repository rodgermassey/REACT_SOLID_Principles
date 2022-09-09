import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Homepage from "./Solid_Principles/Single_Responsiblity_Principle/Single_Responsiblity";
import { items } from "./Solid_Principles/Interface_Segregation_Principle/items";

function App() {
  return (
    <div className="App">
      <nav>
        This is App
        {/* <Link to="/invoices"> Invoices </Link> */}
        <br />
        {/* <Link to="/expenses"> Expenses </Link> */}
        <br />
        {/* <Link to="/favicon.ico" target="_blank" download>
          {" "}
          download icon
        </Link> */}
        <Link to="/single_responsiblity"> Single Responsiblity Principle</Link>
        <Link to="/open_closed"> Open Closed Principle</Link>
        <Link to="/interface_segregation">
          {" "}
          Interface Segregation Principle
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
