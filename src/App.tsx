import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import MainContent from './components/main-content';
import Nav from './components/nav';


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
