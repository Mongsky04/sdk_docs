import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 overflow-y-auto">
          <MainContent />
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
