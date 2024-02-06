import './App.css';
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home/Home.tsx";
import Contacts from "./components/Pages/Contacts/Contacts.tsx";
import AboutUs from "./components/Pages/AboutUs/AboutUs.tsx";


function App() {
    return (
        <div>
            <Toolbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

