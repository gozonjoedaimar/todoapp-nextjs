import { React, useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import TodoItem from "./TodoItem";

function Todo() {
  const [newtodo, setnewtodo] = useState("");

  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("../api/getData");
    const newData = await res.json();
    setData(newData);
  }
  useEffect(() => {
    if (newtodo == "") {
      fetchData();
    }
  }, [newtodo]);

  const [inputData, setInputData] = useState({});

  const requestParams = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: inputData }),
  };

  async function addTodoItem() {
    await fetch("../api/newData", requestParams)
      .catch((e) => console.log(e));
  }

  function handleinput(e) {
    setnewtodo(e.target.value);
    setInputData({
      ...inputData,
      newtodo: e.target.value,
    });
  }

  async function HandleSubmit() {
    console.log(newtodo);
    await addTodoItem();
    setnewtodo("");
  }

  return (
    <div className={styles.maincont}>
      <h1>Todo App</h1>
      <div className={styles.newtodo}>
        <h3>Add new todo</h3>
        <div className={styles.semi}>
          <input
            type="text"
            value={newtodo}
            onChange={(e) => handleinput(e)}
          ></input>
          <button onClick={() => HandleSubmit()}>Add Todo</button>
        </div>
      </div>
      <div>
        {data &&
          data.map((todo) => (
            <TodoItem key={todo.ref["@ref"].id} todo={todo} fetchData={fetchData} />
          ))}
      </div>
    </div>
  );
}

export default Todo;
