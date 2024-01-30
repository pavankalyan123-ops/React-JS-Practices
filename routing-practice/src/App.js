
import './App.css';
import Header from './header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home,About,Contact,Users,Orders,Profile,Names } from './components/Home';
import AddContact from './components/AddContact';

function App() {
  return (
    <div className="App">
      
      <h1>Routing Practice</h1>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Users" element={<Users/>} >
          <Route path="orders" element={<Orders/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        <Route path="names/:id/:name" element={<Names/>} />
        <Route path="/add" element={<AddContact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
