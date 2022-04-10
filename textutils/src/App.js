
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
  <>
    
   <Navbar title="TextUtils" about="About"/>
  <div className="container">
    <TextForm heading="Enter your text to analyze"/>
  </div>
   
  </>
  );
}

export default App;
