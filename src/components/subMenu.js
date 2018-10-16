import React, { Component } from 'react';
import SubListMenu from './subListMenu';


class SubMenu extends Component {
    render() {
        const { below } = this.props;
        return below.map(sub => {

            return (

                <React.Fragment>

                    <li key={sub.uniqueID} className="dropdown-item dropdown" >

                        <a className="dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{sub.name}</a>

                        {
                            <ul className="" aria-labelledby="navbarDropdown2">
                                {sub.catalogGroupView !== undefined && <SubListMenu id={sub.uniqueID} subBelow={sub.catalogGroupView} />}
                            </ul>


                        }

                    </li>

                </React.Fragment>

            )
        })

    }

}

export default SubMenu;