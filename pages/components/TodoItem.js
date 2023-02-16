import { React, useState } from "react";
import styles from "../../styles/Home.module.css";

function TodoItem({ todo }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {};

  const handlecheck = async (e) => {
    console.log(e.target.checked);
  };

  return (
    <div>
      <span className={styles.eachtodo}>
        <p className={styles.text}>{todo.data.task}</p>
        <div>
          <input
            type="checkbox"
            className={styles.toggle}
            defaultChecked={todo.data.done}
            onChange={handlecheck}
            onClick={() => setIsChecked(!isChecked)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </span>
    </div>
  );
}
export default TodoItem;
