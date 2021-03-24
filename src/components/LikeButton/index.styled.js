import styled from "styled-components";

export const Wrapper = styled.button`
  width: 40px;
  height: 20px;
  background: transparent;
  border: 1px solid
    ${(props) => (props.actived ? "var(--purple)" : "var(--dark-shade-25)")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.actived ? "var(--purple)" : "var(--dark-shade-25)"};
  cursor: pointer;
`;
export const Icon = styled.span`
  flex: 0 0 50%;
  font-size: 10px;
  line-height: 9px;
  display: block;
  max-width: 20px;
  max-height: 20px;
  overflow: hidden;
  background-image: ${(props) =>
    props.actived
      ? "linear-gradient(var(--purple), var(--blue))"
      : "linear-gradient(var(--dark-shade-25), var(--dark-shade-25))"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Count = styled.span`
  flex: 0 0 50%;
  font-size: 10px;
  line-height: 12px;
  text-align: left;
`;
