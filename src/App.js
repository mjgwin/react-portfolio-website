import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from './components/layout/MainNav';
import MainPage from './pages/MainPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import MainLayout from './components/layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/skills" element={<SkillsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App