import { signIn, signOut, useSession } from "next-auth/client";

import { Card, TextField, Button } from "../../src/components/index";
import Layout from "../../src/layouts";
import { Form, Title, NotAccount } from "../../src/styles/SignIn.styled";

const SignIn = () => {
  const [session, loading] = useSession();
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.password.value);
  };
  if (loading) return <p>Loading...</p>;
  console.log(session);
  return (
    <Layout>
      <Card width="380px" height="358px">
        <Form onSubmit={submit}>
          <Title>Войти</Title>
          <TextField name="email" placeholder="Email" />
          <TextField name="password" placeholder="Пароль" />
          <Button type="submit" actioned>
            ВОЙТИ
          </Button>
        </Form>
        <NotAccount>
          <p>Нет аккаунта на Toxin?</p>
          <Button outlined>Создать</Button>
        </NotAccount>
      </Card>
    </Layout>
  );
};

export default SignIn;
