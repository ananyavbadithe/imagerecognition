import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [image, setImage]=useState(null);
  const handleUpload=(e)=>{
    const image= e.target.files[0];
    axios.get()
  }
  return (
    <div className="App">
      <h1>PicIdentify</h1>
      <h3>Please upload an image to identify the content</h3>

      <div className="body">
        <div className="image_upload">
            <input type="file" onChange={handleUpload}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
