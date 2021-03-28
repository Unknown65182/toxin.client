import { gql, useQuery } from "@apollo/client";
import React from "react";
import Layout from "../src/layouts";
import Todo from "../src/components/Todo";
import { TodoMvc } from "../src/graphql/types";

const GET_TODOS = gql`
  query AllTodos {
    todos {
      _id
    }
  }
`;

const Todos: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;
  console.log(data);

  return (
    <Layout>
      {data &&
        (data?.todos.length > 0 ? (
          <table>
            <tbody>
              {data?.todos.map((todo: any) => (
                <Todo key={todo._id} todoId={todo._id} />
              ))}
            </tbody>
          </table>
        ) : (
          <div>No Todos</div>
        ))}
    </Layout>
  );
};

export default Todos;
