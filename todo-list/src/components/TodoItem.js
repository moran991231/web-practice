// show check mark when check value valid
// show x mark when mouse hovering over the todoItem

// render() -> Dom change or not
// Eventhough render doesn't change dom, it waste resource of Dom slightly
import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);
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