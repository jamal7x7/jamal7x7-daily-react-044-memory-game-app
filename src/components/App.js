import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Memory Game App</h1>
  </header>
)

const Items = (props) => (
  <div className=' artboard ' >

      
      
      
    </svg>
  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>

      

    </div>
  </div>
)

class MemoryGameApp extends Component {
  
  state = {

 

  }
  


  componentDidMount() {


  }

  





  render () {
    return (
      <div 
      className='App-container'>

        <Menu 
          
        />
        <Items 
    
      
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <MemoryGameApp />

  </div>
)

export default App

