import styled from "styled-components";

export const Wrapper = styled.button`
  width: 40px;
  height: 20px;
  background: transparent;
  border: 1px solid
    ${(props) => (props.actived ? "var(--purple)" : "var(--dark-shade)")};
  opacity: ${(props) => (props.actived ? "100%" : "25%")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Icon = styled.span`
  flex: 0 0 50%;
  font-size: 10px;
  line-height: 9px;
  background: linear-gradient(var(--purple), #8ba4f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Count = styled.span`
  flex: 0 0 50%;
  font-size: 10px;
  line-height: 12px;
  color: var(--purple);
  text-align: left;
`;
