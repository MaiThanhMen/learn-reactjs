import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

const initData = [
    {
        id: 1,
        title: 'Eat',
        status: 'new',
    },
    {
        id: 2,
        title: 'Code',
        status: 'completed',
    },
    {
        id: 3,
        title: 'Sleep',
        status: 'new',
    },
];

function ListPage() {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initData);

    const [filterType, setFilterType] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterType(params.status || 'all');
    }, [location.search]);

    const handleTodoList = (idx) => {
        // NOTE: always clone object or array when we want to change it

        // clone todoList to new array
        const newToDoList = [...todoList];

        // clone object in todoList array
        newToDoList[idx] = {
            ...newToDoList[idx],
            status: newToDoList[idx].status === 'new' ? 'completed' : 'new',
        };

        // set new state
        setTodoList(newToDoList);
    };

    const handleShowFilter = (filter) => {
        // BELLOW IS OLD
        // setFilterType(filter);
        const queryParams = { status: filter };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    // BELLOW IS OLD
    // const filterdTodoList = todoList.filter(todo => filterType === 'all' || filterType === todo.status);
    const filterdTodoList = useMemo(() => {
        return todoList.filter((todo) => filterType === 'all' || filterType === todo.status);
    }, [todoList, filterType]);

    const handlTodoFormSubmit = (values) => {
        console.log('What to do submit', values);
    };

    return (
        <div>
            <h3>What to do?</h3>
            <TodoForm onSubmit={handlTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={filterdTodoList} onTodoClick={handleTodoList} />
            <button onClick={() => handleShowFilter('all')}>Show All</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleShowFilter('completed')}>Show Completed Tasks</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleShowFilter('new')}>Show New Tasks</button>
            &nbsp;&nbsp;&nbsp;
            <button>
                <Link to={`${match.path}/95`}>GO TO DETAILS</Link>&nbsp;
            </button>
        </div>
    );
}

export default ListPage;
