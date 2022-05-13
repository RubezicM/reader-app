import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ListDetails from './components/List/ListDetails'
import { Layout } from './components/Layout/Layout';
function App () {
  return (
      <div className="App">
        <Router>
          <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/lists/:listId" element={<ListDetails/>}/>
          </Routes>
          </Layout>
        </Router>
      </div>
  );
}

export default App;
