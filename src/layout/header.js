import React from 'react'
import classes from  './header.css'
import Dashboard from '../page/Dashboard'
import AboutUs from '../page/AboutUs'
import ContactUS from '../page/ContactUs'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'


const header=(props)=>(
    <Router>
        <nav className={classes.navigation}>
        <ul>
            {
    
              props.items.map(item=>(
    
                  <li key={item.id} className={classes.DaimlerMenu}>
                      <Link to={item.name}>{item.name}</Link>
                      </li>
    
              ))
    
            }
        </ul>
        <Switch>
           <Route path='/Dashboard' component={Dashboard} >
    
        </Route>
        <Route path='/AboutUs' component={AboutUs} >
    
            </Route>
            <Route path='/ContactUS' component={ContactUS} >
    
            </Route>
            
        </Switch>
        </nav>
    </Router>
    );

export default header