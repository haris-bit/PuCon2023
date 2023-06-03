
import "./App.css";
import Sample from "./components/Sample";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";


function App() {
  return (
    <>
      {/* <Sample /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sample />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
