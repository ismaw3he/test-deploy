import logo from './logo.svg';
import './App.css';
import About from './components/About/About'
import { HashRouter, Route, Link } from "react-router-dom";
// import Menu from './components/Menu/Menu'

function App() {
    return (
        <HashRouter basename='/test-deploy'>
            <div>
                <h1>yep HAHAHHAhahphphahahHAahahaHAHHAHA</h1>
                <About />

            </div>
        </HashRouter>
    );
}

export default App;