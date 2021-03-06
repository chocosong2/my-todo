import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'

const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {

    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onCheckToggle={onCheckToggle}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                />
            ))


        /* {props.todos.map(todo => (<div>{todo.text} key={todo.id}</div>))} */}
        </div>)
};

export default TodoList;