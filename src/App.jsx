import { useState } from 'react'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import RightSidebar from './layouts/RightSidebar'
import MainContent from './layouts/MainContent'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('overview');
  const [rightSidebarSections, setRightSidebarSections] = useState([]);

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex flex-1 overflow-y-auto">
          <MainContent activePage={activePage} setRightSidebarSections={setRightSidebarSections} setActivePage={setActivePage} />
        </div>
        <RightSidebar sections={rightSidebarSections} />
      </div>
    </div>
  )
}

export default App
