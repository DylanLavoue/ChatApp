
import './App.css';
import { BrowserRouter as Router,Outlet, Routes, Route} from 'react-router-dom';
import  {RegisterForm} from "./components/forms/RegisterForm"


function App() {
  return (
    <>
    <Routes>
      <Route path="/register"  element={<RegisterForm/>}> </Route>
      <Route
      path="conversations"
      element={
        <div>
          <div>Conversation</div>
          
        </div>
      }
      >
        <Route path=":id" element={<div>Conversation ID Page</div>}/>
      </Route>
    </Routes>
    </>

  );
}

export default App;
