import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import MainContent from './pages/main-content';
import Nav from './pages/nav';


function App() {
  return (
    <Router>
        <div>
          <Nav />
          <MainContent />
        </div>
    </Router>
  );
}

export default App;
