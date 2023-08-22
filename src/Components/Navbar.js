import React from 'react';
import logo from '../logo.png';

class Navbar extends React.Component {
    
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#" style="font-family:Consolas"> */}
              <a className="navbar-brand" href="#" style={{fontFamily: 'Cursive', fontWeight:'bolder'}}>
                Shoppr
              <img src={logo} style={{height: '2.5rem'}}/>
              </a>
             
            </div>
          </nav>


        );
    }
}
 
export default Navbar;
