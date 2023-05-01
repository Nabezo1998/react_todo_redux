import { StrictMode } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoItem from '../../components/TodoItem';
import { useSelector } from "react-redux";
import styled from 'styled-components';

const lightBlue = '#61dafb';
const dark = '#20232a'

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${dark};
  width: 80%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;





function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <StrictMode>
      <Wrapper>
        <h1>TODO LIST</h1>
        <TodoForm />
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            )
          })}
        </ul>
      </Wrapper>
    </StrictMode>
  );
}

export default App;
