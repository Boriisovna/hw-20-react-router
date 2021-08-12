import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import PhotoComponent from './Photo/PhotoComponent';
import Contacts from './Contacts/Contacts'
import Post from './Post/Post';
import smoke from './assets/smoke.png'

const HomeComponent = () => {
  return(
    <>
      <div className='homePage'>
        <img src={smoke} alt="" />
        <p>welcome  ღ </p>
        <p className="homepage_text">= to my homepage =</p>
      </div>
      </>
  )
  }

function App() {

  return (
    <div className="App">
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/post'>Post</NavLink>
        <NavLink to='/photo'>Photo</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/post' component={Post}/>
        <Route path='/photo' component={PhotoComponent}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </div>
  );
}

export default App;
