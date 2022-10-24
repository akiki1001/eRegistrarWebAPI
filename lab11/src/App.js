
import './App.css';
import Dashbord from './component/Dashbord';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import ListOfStudents from './component/ListOfStudents';
import AddStudent from './component/AddStudent';
import SearchStudent from './component/SearchStudent';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
            <Route path="/" element={<Dashbord/>}/>
            <Route path ="/admin" element={<ListOfStudents/>}/>
            <Route path="/add-student" element={<AddStudent/>}/>
            <Route path="/edit-student/:id" element={<AddStudent/>}/>
            <Route path="/search/:id" element={<SearchStudent/>}/>
            
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
