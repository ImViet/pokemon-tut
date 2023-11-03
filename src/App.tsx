import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import DatetimePicker from "./components/DatetimePicker";
const App = () => {
  return (
    <div className="App">
      <Header />
      <DatetimePicker />
    </div>
  );
};

export default App;
