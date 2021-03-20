import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Column = styled.div``;

export const Component = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  color: var(--dark-shade);
`;

export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: row;
`;
