import "./App.css";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./libs/ui/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem label="react">
          <AccordionButton>React</AccordionButton>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem label="angular">
          <AccordionButton>Angular</AccordionButton>
          <AccordionPanel>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem label="javascipt">
          <AccordionButton>Javasciprt</AccordionButton>
          <AccordionPanel>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
