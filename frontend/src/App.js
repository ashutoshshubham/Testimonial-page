import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Review from './components/Review';
import AllReviews from './components/AllReviews';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Navigate to='/review' />} path='/' />
        <Route element={<Review />} path='/review' />
        <Route element={<AllReviews />} path='/allReviews' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
