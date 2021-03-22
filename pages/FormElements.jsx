import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  Row,
  Column,
  Component,
  Title,
} from "../src/styles/FormElements.styled";
import {
  CheckboxButton,
  RadioButtons,
  ToggleButton,
  LikeButton,
  RateButton,
  BulletList,
  GroupButtons,
} from "../src/components";

const FormElements = () => {
  const list = [
    "Нельзя с питомцами",
    "Без вечеринок и мероприятий",
    "Время прибытия — после 13:00, а выезд до 12:00",
  ];
  return (
    <>
      <Head>
        <title>Toxin | FormElements</title>
      </Head>
      <Layout>
        <Wrapper>
          <Row>
            <Column>1</Column>
            <Column>
              <Component>
                <Title>Checkbox Buttons</Title>
                <GroupButtons>
                  <CheckboxButton label="Можно курить" />
                  <CheckboxButton actived label="Можно с питомцами" />
                  <CheckboxButton
                    actived
                    label="Можно пригласить гостей (до 10 человек)"
                  />
                </GroupButtons>
              </Component>
              <Component>
                <Title>Radio Buttons</Title>
                <RadioButtons name="gender" values={["Мужчина", "Женщина"]} />
              </Component>
              <Component>
                <Title>Toggle</Title>
                <GroupButtons>
                  <ToggleButton actived label="Получать спецпредложения" />
                  <ToggleButton label="Получать спецпредложения" />
                </GroupButtons>
              </Component>
              <Component>
                <Title>Like Button</Title>
                <GroupButtons direction="row">
                  <LikeButton />
                  <LikeButton actived />
                </GroupButtons>
              </Component>
              <Component>
                <Title>Rate Button</Title>
                <GroupButtons direction="row">
                  <RateButton rate={4} />
                  <RateButton rate={5} />
                </GroupButtons>
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
            <Column>
              <Component>
                <Title>Bullet List</Title>
                <BulletList list={list} />
              </Component>
            </Column>
          </Row>
          <Row>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
          </Row>
        </Wrapper>
      </Layout>
    </>
  );
};

export default FormElements;
