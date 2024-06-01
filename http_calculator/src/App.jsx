import React, { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

const App = () => {
  const [credentials, setCredentials] = useState({
    companyName: "Kiet Group of Institutions",
    ownerName: "Deepanshu Agarwal",
    rollNo: "2100290130060",
    ownerEmail: "deepanshuagarwal9999@gmail.com",
    accessCode: "XrTUlG",
  });
  const [authCredentials] = useState({
    companyName: "Kiet Group of Institutions",
    clientID:
      import.meta.env.VITE_clientID ,
    clientSecret: import.meta.env.VITE_clientSecret,
    ownerName: "Deepanshu Agarwal",
    ownerEmail: "deepanshuagarwal9999@gmail.com",
    rollNo: "2100290130060",
  });
  const getRegister = async () => {
    const data = await fetch("http://20.244.56.144/test/register", {
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const resdata = await data.json();
    console.log(resdata);
    localStorage.setItem("authcredentials", JSON.stringify(resdata));
  };

  const getAccessCode = async () => {
    const data = await fetch("http://20.244.56.144/test/auth", {
      body: JSON.stringify(authCredentials),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const resdata = await data.json();
    console.log(resdata);
    localStorage.setItem("credentials", JSON.stringify(resdata));
  };

  return (
    <div className="w-full">
      <button onClick={() => getRegister()}>generate credentials </button>
      <button onClick={() => getAccessCode()}>get accesscode</button>
      <div className="w-full">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
