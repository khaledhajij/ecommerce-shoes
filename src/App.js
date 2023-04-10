import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    axios.get('/api/shoes').then(res => console.log(res))
    // axios.get('/api/categories').then(res => console.log(res))
    axios.get('/api/lists').then(res => console.log(res))
    axios.get('/api/lists/1/shoes').then(res => console.log(res))
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
