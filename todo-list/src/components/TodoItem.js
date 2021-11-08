// show check mark when check value valid
// show x mark when mouse hovering over the todoItem

import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        // text: context of todo
        // checked: status of checkbox
        // id: unique id of todo
        // onToggle: function of checkbox
        // onRemove: function to get rid of todo
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    // cause an event onToggle of its parent
                    e.stopPropagation(); // prevent onToggle running
                    onRemove(id);
                }
                } >&times;</div>
                <div className={`todo-text ${checked ? 'checked' : ''}`}>
                    <div> {text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}
export default TodoItem;