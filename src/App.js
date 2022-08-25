import { AddTask } from './components/add-task';
import { Buttons } from './components/buttons';
import { Counter } from './components/counter';
import { Search } from './components/search';
import { Tasks } from './components/tasks';

import './App.css';

function App() {
  return (
      <div className="container">
        <div className="app__inner">
          <h1 className="app__title">Todo aplication</h1>
          <Counter />
          <Search />
          <Buttons />
          <Tasks />
          <AddTask />
        </div>
      </div>
  );
}

export default App;
