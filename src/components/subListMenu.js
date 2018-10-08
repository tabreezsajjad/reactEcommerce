import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SubListMenu extends Component {
  render() {
    const { subBelow, id } = this.props;
  // console.log(subBelow)
    return(
       <React.Fragment>
           {subBelow && subBelow.map(subl => {
            // {console.log(subBelow)}
             return (
               
                <li key={subl.uniqueID}><Link to = {`/Apparel/Girls/${subl.name}/${subl.uniqueID}`}>{subl.name}</Link></li>

             )
          })
        }
       </React.Fragment>
    )        
   } 
 }

export default SubListMenu;