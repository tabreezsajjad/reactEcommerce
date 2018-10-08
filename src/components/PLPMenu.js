import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import axios from 'axios';

class PLPMenu extends Component {

  state = {
    shoeCategory: []
  }



  componentDidMount() {
    let {subName, id} = this.props.match.params
   console.log(subName)
   console.log(id)
    

  axios.get(`http://localhost:3030/category/`+id)
    .then(response => {
      console.log(response.data.express.catalogEntryView)
     this.setState({
          shoeCategory: response.data.express.catalogEntryView
     })
  }).catch(err=>{
    console.log(err)
  });
}

  

  render() {
    const { shoeCategory } = this.state;

    const picUrl = 'https://149.129.128.3:8443'

    return (
      
      <div>
        <div className="container">
          <div className="row">
            {
              
              shoeCategory && shoeCategory.map(shoeList => {

                return (<div key={shoeList.uniqueID} className="col-md-4">
                   
                <h2 key={shoeList.uniqueID}></h2>

                
                <img src={picUrl + shoeList.thumbnail} />
                <Link to="/PDP"><p className="pdp">{shoeList.name}</p></Link>
                <p>Price : {shoeList.price[0].value} {shoeList.price[0].currency}</p>


              </div>
)
              })

                
             
            }
          </div>
        </div>

      </div>




    )

  }

}

export default PLPMenu;