import './App.css';
import ProfilePhoto from './Component/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
function App() {
  return (
    
    <div>
    
      <div className='content'>
      <ProfilePhoto></ProfilePhoto>
      <div>
      <FullName></FullName>
      <Adress></Adress>
      </div>
      </div>
    </div>
  
  );
}

export default App;
