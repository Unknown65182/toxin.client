import { gql, useQuery } from "@apollo/client";
import React from "react";

interface IProps {
  todoId: string;
}

const GET_TODO = gql`
  query Todo($todoId: ID!) {
    Todo(todoId: $todoId) {
      description
      completed
    }
  }
`;

const Todo: React.FC<IProps> = (props) => {
  const { data, loading, error } = useQuery(GET_TODO, {
    variables: {
      todoId: props.todoId,
    },
  });

  const [completed, setCompleted] = React.useState(
    () => data?.Todo?.completed ?? false
  );

  const onInputChange = () => {
    setCompleted(!completed);
  };

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    data && (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onInputChange()}
          />
        </td>
        <td>{data.Todo.description}</td>
      </tr>
    )
  );
};

export default Todo;
