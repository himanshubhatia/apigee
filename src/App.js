import React, { Component } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
      super(props)
      console.log('[App.js] called from constructor' );
  }

  componentWillMount()
  {
      console.log('[App.js] called from component will mount' );
  }

  componentDidMount()
  {

          console.log('[App.js] called from component did mount' );

  }
  state={
    menuItems:[
        {
            id:1,name:"Dashboard"
        },
        {
            id:2,name:"AboutUs"
        },
        {
            id:3,name:"ContactUs"
        }
       
    ]
}

  render() {
    return (
      <div >
        <header>
         <h2 className='App'>Welcome to React</h2>
         <Header items={this.state.menuItems} />
        </header>
        <Footer />
      </div>
      
    );
  }
}

export default App;
