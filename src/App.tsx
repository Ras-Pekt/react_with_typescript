import CourseGoals from "./components/CourseGoals";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    // <main>
    //   <CourseGoals
    //     title="Learn React with Typescript"
    //     description="Learn it from the ground up!"
    //   />
    // </main>

    <main>
      <Header image={{ src: goalsImg, alt: "Learn React with Typescript" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <CourseGoals title="Learn React with Typescript" />
      <p>
        Learn it from the ground up!
        <br />
        Typesafety is a must
      </p>
    </main>
  );
}

export default App;
