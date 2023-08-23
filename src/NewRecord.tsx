import React, { useState } from "react";

type newCompProps = {
  returnCall :() => void ;
};

const NewRecord: React.FC <newCompProps> = ({}) => {
  //const [compProps, setComPops] = useState<CompProps>();
  const [userId, setUserId] = useState<number>();
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  const createNewRecord = () => {
    console.log(
      "Createing New record with " +
        id +
        " - " +
        userId +
        " " +
        title +
        " " +
        body
    );

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <h1>New Record Form</h1>
      <table>
        <tr>
          {" "}
          <td>UserID</td>{" "}
          <td>
            {" "}
            <input
              type="text"
              onChange={(e) => {
                setUserId(parseInt(e.target.value));
              }}
            ></input>{" "}
          </td>{" "}
        </tr>
        <tr>
          {" "}
          <td>ID</td>{" "}
          <td>
            {" "}
            <input
              type="text"
              onChange={(e) => {
                setId(parseInt(e.target.value));
              }}
            ></input>{" "}
          </td>{" "}
        </tr>
        <tr>
          {" "}
          <td>Body</td>{" "}
          <td>
            {" "}
            <input
              type="text"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></input>{" "}
          </td>{" "}
        </tr>
        <tr>
          {" "}
          <td>Title</td>{" "}
          <td>
            {" "}
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>{" "}
          </td>{" "}
        </tr>
      </table>
      <button onClick={createNewRecord }> Add</button>



    </div>
  );
};

export default NewRecord;
