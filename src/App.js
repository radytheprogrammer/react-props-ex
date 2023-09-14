import './App.css';
import HeaderText from './components/HeaderText';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <HeaderText>Hello World</HeaderText>
        <Profile name={"Rady"}></Profile>
      </section>
    </div>
  );
}

export default App;
