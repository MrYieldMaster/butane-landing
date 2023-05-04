import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Protocol from './components/Protocol/Protocol'
import Network from './components/Network/Network'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import Ecosystem from './components/Ecosystem/Ecosystem'
import './assets/styles/scrollbar.module.css';

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Protocol />
      <Network />
      <WhereToBuy />
      <Ecosystem />
      <Footer />
    </div>
  )
}

export default App
