import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login_a from './Login-a';

function App() {

  return (
    <Routes>
      <Route exact path = "/" element = {<Home />}/>
      <Route exact path = "/login-a" element = {<Login_a/>}/>
      <Route path = '*' element = "error 404"/>
    </Routes>
  );
}

export default App;
