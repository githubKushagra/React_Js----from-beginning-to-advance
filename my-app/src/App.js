// import logo from './logo.svg';
import myImage from './assets/raksha_bandhan2.jpg';
import './App.css';


var fullName = "Kushagra Varshney";
function App() {
  return (
    // inside this parentheses, jsx is written
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
        <nav>
          <li>Home</li>
          <li>About us</li>
          <li>Cintact</li>
        </nav>
        <div className="container">
            <h1>Welcome to our website</h1>
            <h3>This is a {fullName}</h3>
            <p>This is a paragraph</p>
            <img src={myImage} alt="myImage" className = "myImage"/>
        </div>
    </>
  );
}

export default App;
