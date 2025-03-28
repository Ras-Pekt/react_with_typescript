import Container from "./UI/Container";
import { Timer as TimersProps } from "../store/store-schema";
const Timer = ({ name, duration }: TimersProps) => {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
};
export default Timer;
