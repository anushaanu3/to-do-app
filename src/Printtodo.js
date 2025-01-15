import React from "react";

const Printtodo = ({ listto, deleteHandler }) => {
  return (
    <div>
      {listto?.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Printtodo;
