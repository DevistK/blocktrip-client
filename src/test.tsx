import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

const Test = () => {
  const [subject, setSubject] = useState(null);

  const getAPI = async () => {
    const response = await axios.get("http://localhost:3001/");
    setSubject(response.data);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return <h1>{subject}</h1>;
};

export default Test;
