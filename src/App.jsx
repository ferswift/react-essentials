import Header from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts.jsx";
import { ExamplesComponent } from "./components/ExamplesComponent/ExamplesComponent.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <ExamplesComponent />
      </main>
    </div>
  );
};
