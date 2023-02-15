
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import PersonDetailsPage from './pages/PersonDetailsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<HomePage />}/>
        <Route path='/person/:id/details' element={<PersonDetailsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
