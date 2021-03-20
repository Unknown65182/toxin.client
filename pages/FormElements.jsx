import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  Row,
  Column,
  Component,
  Title,
  WrapperComponent,
} from "../src/styles/FormElements.styled";
import { ToggleButton, LikeButton } from "../src/components";

const FormElements = () => {
  return (
    <Layout>
      <Wrapper>
        <Row>
          <Column>1</Column>
          <Column>
            <Component>
              <Title>Toggle</Title>
              <ToggleButton actived label="Получать спецпредложения" />
              <ToggleButton label="Получать спецпредложения" />
            </Component>
            <Component>
              <Title>Like Button</Title>
              <WrapperComponent>
                <LikeButton actived />
                <LikeButton />
              </WrapperComponent>
            </Component>
          </Column>
          <Column>3</Column>
        </Row>
        <Row>
          <Column>4</Column>
          <Column>5</Column>
          <Column>6</Column>
        </Row>
        <Row>
          <Column>7</Column>
          <Column>8</Column>
          <Column>9</Column>
        </Row>
      </Wrapper>
    </Layout>
  );
};

export default FormElements;
