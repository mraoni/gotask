
import './App.css';
import Form from './components/Form';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>GoTasks!</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
