import './App.css';
import Sidebar from './Sidebar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';
import Login from './Login';


function App() {
  const[{user},dispatch]=useStateValue();

  return (
    <div className="app">
      {!user?(
        <Login/>
      ):
      ( 
      <><div className='App'>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<><Feed/></>}></Route>
          <Route path="/home" element={<><Feed/></>}></Route>
          <Route path="/explore" element={<><h1 className='explore'>Explore</h1></>}></Route>
          <Route path="/notifications" element={<><h1 className='notifications'>Notifications</h1></>}></Route>
          <Route path="/messages" element={<><h1 className='messages'>Messages</h1></>}></Route>
          <Route path="/bookmarks" element={<><h1 className='bookmarks'>Bookmarks</h1></>}></Route>
          <Route path="/lists" element={<><h1 className='lists'>Lists</h1></>}></Route>
          <Route path="/profile" element={<><h1 className='profile'>Profile</h1></>}></Route>
          <Route path="/more" element={<><h1 className='more'>More</h1></>}></Route>
        </Routes>
        <Widgets/>
      </div></>
      )
      }
    </div>
  );
}

export default App;
