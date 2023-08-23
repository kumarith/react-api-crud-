import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewRecord from "./NewRecord";

type resultProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


type newCompProps = {
  returnCall: void;
};


function App() {
  const [data, setData] = useState<resultProps[]>([]);
  const [fllip, setFllip] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((result) => setData(result.slice(0, 10)));
  }, [fllip]);

  const deleteMe = (deletedId: number) => async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/" + deletedId
      );
      if (response.status == 200) {
        setFllip(!fllip);
      }
    } catch (error) {
      console.log("Error message " + error);
    }
  };

  return (
    <div className="App">
      {data.map((e) => (
        <p>
          {e.title} {e.id} <button onClick={deleteMe(e.id)}>Delete</button>
        </p>
      ))}
      <NewRecord returnCall={() => { alert("reurn call from new record comp");  } }  ></NewRecord>
    </div>
  );
}

export default App;
