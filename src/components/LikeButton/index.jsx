import { useState } from "react";
import { Wrapper, Icon, Count } from "./index.styled";

const LikeButton = ({ actived }) => {
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setCount(count + 1);
  };
  return (
    <Wrapper actived={actived ?? false} onClick={() => handleLike()}>
      <Icon actived={actived ?? false} className="material-icons">
        {actived ? "favorite" : "favorite_border"}
      </Icon>
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default LikeButton;
