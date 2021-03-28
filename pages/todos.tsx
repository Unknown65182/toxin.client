import { gql, useQuery } from "@apollo/client";
import React from "react";
import Todo from "../src/components/Todo";
import { TodoMvc } from "../src/graphql/types";

const GET_TODOS = gql`
  query AllTodos {
    allTodos {
      todoId
    }
  }
`;

const Todos: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    data &&
    (data?.allTodos.length > 0 ? (
      <table>
        <tbody>
          {data?.allTodos.map((todo: TodoMvc) => (
            <Todo key={todo.todoId} todoId={todo.todoId} />
          ))}
        </tbody>
      </table>
    ) : (
      <div>No Todos</div>
    ))
  );
};

export default Todos;
