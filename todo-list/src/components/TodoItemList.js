// When render 'list', especially 'dynamic list', make component not function type but class type
// Class type is able to be optimized!!!

import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        // todos: array of todo objects
        // onToggle: function checkbox on/off
        // onRemove: function remove item
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;