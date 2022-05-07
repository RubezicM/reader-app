import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Lists from './pages/Lists'
import ListDetails from './components/List/ListDetails'
import { BooksProvider } from './context/BooksContext'

function App () {
  return (
    <BooksProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/lists" element={<Lists/>}/>
            <Route exact path="/lists/:listName" element={<ListDetails/>}/>
          </Routes>
        </Router>
      </div>
    </BooksProvider>
  );
}

export default App;
