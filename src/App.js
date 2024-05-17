import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import AddStudentData from './components/AddStudentData';
import ShowDataTable from './components/ShowDataTable';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<AddStudentData/>}/>
        <Route path='/students-data-table' element={<ShowDataTable/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
