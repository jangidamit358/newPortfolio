import './App.css';
import { Home } from './components/Home';
import {About} from "./components/About";
import Project from './components/Project';
import Contact from './components/Contact';
import {Skill} from "./components/Skills"
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
