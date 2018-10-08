import React, { Component } from 'react';
import SubListMenu from './subListMenu';


class SubMenu extends Component {
    render() {
        const { below } = this.props;
        return below.map(sub => {

            return (

                <React.Fragment>

                    <li key={sub.uniqueID}>

                        <a>{sub.name}</a>

                        {
                            <ul className="sub-menu">
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