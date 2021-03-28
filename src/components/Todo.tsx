import { gql, useQuery } from "@apollo/client";
import React from "react";

interface IProps {
  todoId: string;
}

const GET_TODO = gql`
  query Todo($id: ID!) {
    todo(_id: $id) {
      _id
      completed
      description
    }
  }
`;

const Todo: React.FC<IProps> = (props) => {
  const { data, loading, error } = useQuery(GET_TODO, {
    variables: {
      id: props.todoId,
    },
  });

  const [completed, setCompleted] = React.useState(
    () => data?.todo?.completed ?? false
  );

  const onInputChange = () => {
    setCompleted(!completed);
  };

  if (error)
    return (
      <tr>
        <td>Error: {error.message}</td>
      </tr>
    );
  if (loading)
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  console.log(data);

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
        <td>{data.todo.description}</td>
      </tr>
    )
  );
};

export default Todo;
