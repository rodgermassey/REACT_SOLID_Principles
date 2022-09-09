import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./routes/invoices";
import { Expenses } from "./routes/expenses";
import Homepage from "./Solid_Principles/Single_Responsiblity_Principle/Single_Responsiblity";
import { items } from "./Solid_Principles/Interface_Segregation_Principle/items";
import { VideoList } from "./Solid_Principles/Interface_Segregation_Principle/VideoList";
import Header from "./Solid_Principles/Open_Closed_Principle/Open_Closed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/single_responsiblity" element={<Homepage />} />
          <Route path="/open_closed">
            <Route index element={<Header />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="expenses" element={<Expenses />} />
          </Route>
          <Route
            path="/interface_segregation"
            element={<VideoList items={items} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
