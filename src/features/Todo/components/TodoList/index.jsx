import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    totoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    totoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {

    const handleToDoList = (idx) => {
        // if not received props func from parent then do nothing
        if (!onTodoClick) return;

        onTodoClick(idx);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li key={todo.id}
                    className={classnames({'todo-item': true, complete: todo.status === 'completed'})}
                    onClick={() => handleToDoList(idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;