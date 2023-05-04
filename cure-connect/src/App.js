import './App.css';
import { useSelector } from 'react-redux';

function App() {

  useSelector((state) => console.log(state));
  return (
    <div className="App">
      <h1>Welcome To Cure Connect Team Project</h1>
    </div>
  );
}

export default App;
