import React, { useState } from "react"


type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoList: React.FC = () => {

  const title: string = "오늘 할일"
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "마감하기", isChecked: false }
  ])
  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <ul>
          {
            todos.map((value) => {
              return <li>{value.text}</li>
            })
          }
        </ul>
      </div>
    </div>

  )
}
export default TodoList