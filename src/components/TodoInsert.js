import React, { useEffect } from "react";
import { MdAddCircle } from "react-icons/md"
import { TiTrash, TiPencil } from "react-icons/ti"
import './TodoInsert.css';
import { useState } from 'react';

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate }) => {
    const [value, setValue] = useState("");

    const onChange = e => {
        setValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }
    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);
    return (<div>
        <div className="background" onClick={onInsertToggle} />
        <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, value) } : onSubmit}>
            <input placeholder="할일을 입력하세요" value={value} onChange={onChange}></input>
            {selectedTodo ? (
                <div className="rewrite">
                    <TiPencil onClick={() => {
                        onUpdate(selectedTodo.id, value);
                    }} />
                    <TiTrash onClick={() => { onRemove(selectedTodo.id) }} />
                </div>
            ) : (
                <button type="submit">
                    <MdAddCircle />
                </button>
            )}
        </form>
    </div >
    );
};

export default TodoInsert;