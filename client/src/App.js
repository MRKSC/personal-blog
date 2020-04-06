// react imports
import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import FocusLock from 'react-focus-lock';

// pages imports
import Landing from './components/navigation/pages/landing-page/Landing';
import Work from './components/navigation/pages/work-page/Work';
import Contact from './components/navigation/pages/contact-page/Contact';
import Error from './components/navigation/pages/error-page/Error';

// data imports
import projectData from './components/navigation/pages/work-page/Portfolio/portfolioData';

// registry for a components
import componentRegistry from './config/ComponentRegistry';

// style imports
import './App.css';
import { AppMain } from './App.styled';

// data imports for burger menu
import { useOnClickOutside } from './components/hamburger/hooks';
import { theme } from './themes/theme';
import { Burger, Menu } from './components/hamburger/components';

// generating a route links for a work projects with component registry help
const portfolioRoutes = projectData.map((project) => <Route path={`/${project.localURL}`} component={componentRegistry[project.componentName]} />);

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <AppMain className="App">
        <BrowserRouter>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            {portfolioRoutes}
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </AppMain>
    </ThemeProvider>
  );
}

export default App;
