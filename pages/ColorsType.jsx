import { useColors, useTextVariants } from "../src/utils";

import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  List,
  Item,
  ColorPreview,
  ColorData,
  ColorName,
  ColorValue,
  Tag,
  TextPreview,
} from "../src/styles/ColorTypes.styled";

const ListColors = () => {
  const { colors, isLoading, isError } = useColors("/data/colors.json");
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;
  return (
    <List>
      {colors &&
        colors.map((color, index) => (
          <Item key={`${color.name}_${index}`} marginBottom="20px">
            <ColorPreview color={color.value} />
            <ColorData>
              <ColorName>{color.name}</ColorName>
              <ColorValue>{color.value}</ColorValue>
            </ColorData>
          </Item>
        ))}
    </List>
  );
};

const ListTextVariants = () => {
  const { textVariants, isLoading, isError } = useTextVariants(
    "/data/text_variants.json"
  );
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;
  return (
    <List>
      {textVariants &&
        textVariants.map((variant, index) => (
          <Item key={`${variant.tag}_${index}`} marginBottom="51px">
            <Tag size={variant.size} lineHeight={variant.lineHeight}>
              {variant.tag}
            </Tag>
            <TextPreview
              size={variant.size}
              weight={variant.weight}
              lineHeight={variant.lineHeight}
              {...(variant.tag === "Body"
                ? { style: { color: "var(--dark-shade-75)" } }
                : {})}
            >
              {variant.tag === "H3"
                ? variant.example.toUpperCase()
                : variant.example}
            </TextPreview>
          </Item>
        ))}
    </List>
  );
};

const ColorsType = () => {
  return (
    <>
      <Head>
        <title>Toxin | ColorsType</title>
      </Head>
      <Layout>
        <Wrapper>
          <ListColors />
          <ListTextVariants />
        </Wrapper>
      </Layout>
    </>
  );
};

export default ColorsType;
