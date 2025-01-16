// JS data
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";

// Components
import { CoreConcept } from "./components/CoreConcept";
import { Header } from "./components/Header";
import { TabButton } from "./components/TabButton.jsx";

// React Hooks
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* {CORE_CONCEPTS.map((itemConcept) => (
              <CoreConcept key={itemConcept.title} {...itemConcept} />
            ))} */}
            {/* Maneira reduzida do código acima. */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              img={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              img={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
              // {...CORE_CONCEPTS[1]} Maneira reduzida do código acima.
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              img={CORE_CONCEPTS[2].image}
              description={CORE_CONCEPTS[2].description}
              // {...CORE_CONCEPTS[2]} Maneira reduzida do código acima.
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              img={CORE_CONCEPTS[3].image}
              description={CORE_CONCEPTS[3].description}
              // {...CORE_CONCEPTS[3]} Maneira reduzida do código acima.
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Select a Topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
