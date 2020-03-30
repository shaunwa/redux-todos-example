import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NewTodoForm } from './NewTodoForm';
import { TodoListItem } from './TodoListItem';
import { getCompletedTodos, getIncompleteTodos } from '../selectors/todosSelectors';

const ListContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

export const TodoListBase = ({ completedTodos, incompleteTodos }) => (
    <ListContainer>
        <h1>My Todos</h1>
        <NewTodoForm />
        <h3>Completed:</h3>
        {completedTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
        ))}
        <h3>Incomplete:</h3>
        {incompleteTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
        ))}
    </ListContainer>
);

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

export const TodoList = connect(mapStateToProps)(TodoListBase);