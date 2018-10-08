import React, { Component } from 'react';
import axios from 'axios';
import SubMenu from './subMenu';



class Navigation extends Component {

  state = {
    mainCategory: []
  }

  componentDidMount() {
    axios.get('http://localhost:3030/topCategory')
      .then(res => {
        console.log(res.data.express);
        this.setState({
          mainCategory: res.data.express.catalogGroupView
        })
      })
  }



  render() {

    const { mainCategory } = this.state;
    return mainCategory.map(navList => {
      return (

        <ul className="header">
          <li key={navList.uniqueID}>
            <a className="dropbtn ">{navList.name} </a>
              <ul className="dropdown-content">
                <SubMenu below={navList.catalogGroupView} />
              </ul>

           
          </li>
        </ul>

      )

    })

  }


}

export default Navigation;