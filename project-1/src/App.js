// import logo from './logo.svg';
import './App.css';

// importing our components
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextFile from './Components/TextForm';
// import AboutUs from './Components/About';
import { useState } from 'react';





function App() {

  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);


  const setTheAlertMessage = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    });

    // Auto-hide the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  

  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#282828';
        document.body.style.color = 'white';
        setTheAlertMessage("Dark mode has been Enabled" , "success");
        document.title = "TextUtils - Dark Mode";    // document.title indecate the title that we can see on tab bar on chrome
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        setTheAlertMessage("Light mode has been Enabled" , "success");
        document.title = "TextUtils - Light Mode";
    }
  }




  return (
    <>

    {/* we are passing attributes called props
    In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”
    Props allow you to customize and configure child components based on data from the parent. This makes components reusable and flexible. */}


        <Navbar title="TextUtils" homePage="Home" aboutPage="About TextUtils" mode={mode} toggleMode={toggleMode} />

        <div className="container-fluid">
              {/* Display the alert if it exists, otherwise default message */}
              <Alert alert={alert}/>
        </div>

        <div className="container my-3">
          <TextFile heading="Enter your text below" mode={mode} showAlert={setTheAlertMessage}/>
        </div>

        {/* <div className="container my-3">
          <AboutUs />
        </div> */}

    </>
  );
}

export default App;
