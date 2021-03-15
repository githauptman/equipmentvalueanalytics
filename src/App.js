import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Button
        onClick={()=> alert("Hello World")}>
        Hello World Button
      </Button>
    </div>
  );
}

export default App;
