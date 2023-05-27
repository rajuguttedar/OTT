import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Addmovie from "./component/Addmovie";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Moviedetails from "./component/Moviedetails";
import SignUp from "./component/SignUp";
import Favorites from "./component/Favorites";
import Search from "./component/Search";
import Editmovie from "./component/EditMovie";
import SignIn from "./component/SignIn";
import ForgotPassword from "./component/ForgotPassword";


function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Addmovie/>}/>
            <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/favorite" element={<Favorites/>}/>
            <Route path="/search/:searchword" element={<Search/>}/>
            <Route path="/edit/:id" element={<Editmovie/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/forgot" element={<ForgotPassword/>}/>
          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;