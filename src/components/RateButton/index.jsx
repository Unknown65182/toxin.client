import { useState } from "react";
import { Wrapper, Icon } from "./index.styled";

const RateButton = (props) => {
  const [rate, setRate] = useState(props.rate);
  const handleRate = (value) => {
    setRate(value);
  };
  const handleHoverRate = (event, n) => {
    event.target.innerText = "star";
    Array.from(event.target.parentElement.children).map((star, index) => {
      star.innerText = index >= n ? "star_border" : "star";
    });
  };
  const handleLeaveRate = (event) => {
    Array.from(event.target.parentElement.children).map((star, index) => {
      star.innerText = index >= rate ? "star_border" : "star";
    });
  };

  return (
    <Wrapper onMouseLeave={(e) => handleLeaveRate(e)}>
      {[...Array(5).keys()].map((n) => (
        <Icon
          key={`${n}`}
          className="material-icons"
          onClick={() => handleRate(n + 1)}
          onMouseOver={(e) => handleHoverRate(e, n + 1)}
        >
          {n >= rate ? "star_border" : "star"}
        </Icon>
      ))}
    </Wrapper>
  );
};

export default RateButton;
