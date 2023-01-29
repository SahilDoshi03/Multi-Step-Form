import './App.css';
import Footer from './Components/Footer';
import MainForm from './Components/PersonalInfo';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <main className="form-card">
        <MainForm/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
