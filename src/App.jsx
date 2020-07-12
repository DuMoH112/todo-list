import React from "react";
import "./styles.css";
import Todo from "./components/Todo-component/Todo-compotent";
import Done from "./components/Done-component/Done-component";

let done = [
  { label: "Поиграть с собачкой" },
  { label: "Сходить в туалет" },
  { label: "Сделать зарядку" },
  { label: "Полить цветы" },
  { label: "Покормить пёселя" },
  { label: "Проверить почту" }
];
let tasks = [
  { label: "Заварить чай", isImportant: false },
  { label: "Попить чай", isImportant: true },
  { label: "Полежать на кроватке", isImportant: false },
  { label: "Затащить катку", isImportant: false },
  { label: "Сходить погулять", isImportant: true },
  { label: "Застелить кровать", isImportant: true }
];

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Todo data={tasks} />
        <Done data={done} />
      </div>
    );
  }
}

export default App;
