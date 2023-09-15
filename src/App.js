import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Services from './pages/services';
import Service from './pages/templates/_service';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Blog from './pages/blog';
import Post from './pages/templates/_post';
import Contact from './pages/contact';
import Footer from './components/footer';
import PrivacyPolicy from './pages/privacy_policy.js';
import Terms from './pages/terms_of_service.js';
import NotFound from './pages/not_found.js';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />}/>
          <Route path='/services/:slug' element={<Service />}/>
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/about-us' exact element={<About />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/blog/:slug' element={<Post />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' exact element={<Terms />} />
          <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;