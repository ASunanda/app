import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar.js';
import {Jumbotron,Container} from 'react-bootstrap';
import Log from './components/Log.js';


function App() {
  return (
  <div className="App">

    <Navigationbar/>
    
    <Jumbotron>
     
    <Container>
    <h1>Welcome</h1>
    <p>
      <Log/>
      
    </p>
  </Container>

</Jumbotron>
          
          </div>
  );
}

export default App;
