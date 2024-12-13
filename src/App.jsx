// App.js
import React,{useState} from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
import { Task_2 } from './Pages/Task_2';

const App = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data); 
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home formData={formData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact onFormSubmit={handleFormSubmit} />} />
        <Route path="/apicards" element={<Task_2 />} />
      </Routes>
    </Router>
  );
}

export default App;
