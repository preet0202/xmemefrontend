import logo from './logo.svg';
import './App.css';

import { Button, Col, Container, Row } from "reactstrap"
import { ToastContainer , toast} from "react-toastify";
import Home from "./components/Home";
import Meme from "./components/Meme";
import Allmeme from "./components/Allmeme" 
import AddMeme from './components/AddMeme';
import Header from "./components/Header"
import Menu from './components/Menu';
import FindMeme from './components/FindMeme';
import{BrowserRouter as Router,Route} from "react-router-dom"

function App() {

  const btnHandle= () =>{
    toast.success("done");
  }
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Header />

        <Container>
          <Row>
            <Col md={4}>
              <Menu/>
            </Col>
            <Col md={8}>
              <Route path="/" component={AddMeme} exact  />
              <Route path="/view-memes" component={Allmeme} exact  />
              <Route path="/find-memes" component={FindMeme} exact  />
            </Col>
          </Row>
        </Container>
      </Router>
       
    </div>
   
  );
}

export default App;
