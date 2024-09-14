// import logo from './logo.svg';
import './App.css';

// importing our components
import Navbar from './Components/Navbar';
import TextFile from './Components/TextForm';

function App() {
  return (
    <>
    {/* we are passing attributes called props
    In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”
    Props allow you to customize and configure child components based on data from the parent. This makes components reusable and flexible. */}
        <Navbar title="TextUtils" homePage="Home" aboutPage="About TextUtils" />
        <div className="container">
          <TextFile heading="Enter your text below"/>
        </div>
    </>
  );
}

export default App;
