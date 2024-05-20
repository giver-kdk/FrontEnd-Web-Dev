import logo from './logo.svg';
import './App.css';

function App() {
  return (
	// Applying custom color theme property
	// Here, 'my-primary-color' is the custom property attached with tailwind's 'bg' property 
    <div className="App bg-my-primary-color">
      Hello World
    </div>
  );
}

export default App;
