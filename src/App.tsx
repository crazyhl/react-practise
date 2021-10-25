import { BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import MainContent from './components/main-content';
import Nav from './components/nav';


function App() {
  return (
    <Router>
        <div>
          <Nav />
          <Switch>
            <MainContent />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
