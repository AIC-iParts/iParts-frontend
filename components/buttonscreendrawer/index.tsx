import { Container, Title } from "./styled";

export default function ButtonScreenDrawer(props: {
  color: string;
  focused: boolean;
  title: string;
}) {
  return (
    <Container>
      <Title onFocus={props?.focused}>{props?.title}</Title>
    </Container>
  );
}
