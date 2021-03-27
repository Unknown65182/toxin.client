import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: var(--dark-shade);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 20px;
  }
`;

export const NotAccount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--black);
  }
`;
