import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { markTodoAsCompleted, deleteTodo } from '../actions/todosActions';

const TodoContainer = styled.div`
    padding: 16px;
    border-bottom: 2px solid black;
`;

export const TodoListItemBase = ({ todo, onCompletedClicked, onDeleteClicked }) => (
    <TodoContainer>
        <h3>{todo.text}</h3>
        {todo.isCompleted ? <p>Complete!</p>: null}
        {todo.isCompleted
            ? <button onClick={() => {
                onDeleteClicked(todo.text);
            }}>Delete Item</button>
            : <button onClick={() => {
                onCompletedClicked(todo.text);
            }}>Mark as Completed</button>}
    </TodoContainer>
);

const mapDispatchToProps = dispatch => ({
    onCompletedClicked: text => dispatch(markTodoAsCompleted(text)),
    onDeleteClicked: text => dispatch(deleteTodo(text)),
});

export const TodoListItem = connect(
    null,
    mapDispatchToProps,
)(TodoListItemBase);