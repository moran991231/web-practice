// When render 'list', especially 'dynamic list', make component not function type but class type
// Class type is able to be optimized!!!

import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        // todos: array of todo objects
        // onToggle: function checkbox on/off
        // onRemove: function remove item
        return (
            <div>
                <TodoItem text="hello" />
                <TodoItem text="React" />
                <TodoItem text="nice to meet you" />
            </div>
        );
    }
}

export default TodoItemList;