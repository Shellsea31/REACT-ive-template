import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({ msg: "?" });

  const getRequest = async () => {
    try {
      const { data } = await axios.get("/api/test");
      setState(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="App">
      <h1>{state.msg}</h1>
    </div>
  );
}

export default App;
