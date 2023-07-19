import './App.css';
import Sidebar from './containers/Sidebar';
import Navbar from './containers/Navbar';
import Main from './containers/Main';
import './app.scss'
function App() {
  return (
    <div className="App">
      <Sidebar />
          <div className="content">
              <Navbar />
              <Main />
          </div>
    </div>
  );
}

export default App;
