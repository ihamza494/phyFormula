import React from "react";
import ReactDOM from "react-dom/client";
import UseStateHookSpreadOp from "./UseStateHookSpreadOp";
// import HeaderComponent from "./HeaderComponent";
// import DropdownBox from "./Dropdown";
// import Netforce from "./Netforce";
// import Speeddiff from "./Speeddiff";
// import Distancetrvl from "./Distance_trvl";

function App() {
  return (
    <>
      <UseStateHookSpreadOp />
      {/* <HeaderComponent />
      <DropdownBox /> */}
      {/* <Netforce />
      <Speeddiff />
      <Distancetrvl /> */}
    </>
  );
}
const myElement = <App />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
