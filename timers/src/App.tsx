import Header from "./components/Header";
import Timers from "./components/Timers";
import AddTimer from "./components/AddTimer";
import { TimersContextProvider } from "./store/timers-context";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
