import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";

export default function PortfolioContainer() {
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
  const [currentPage, setCurrentPage] = useState('Projects');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
  
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer>

  <a href="https://www.instagram.com/_isaaclong/" target="_blank">Instagram</a>
  <a href="https://github.com/isaaclong26" target="_blank">Github</a>
  <a href="https://open.spotify.com/user/isaaclong123?si=978019da7ec34944" target="_blank">Spotify</a>
  <a href="linkedin.com/in/isaac-long-403773222" target="_blank">LinkedIn</a>



</footer>
    </div>
  );
}
