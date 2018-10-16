import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import axios from "axios";

class PDP extends Component {
    state = {
        pdpCategory: []
    };

    fetchData = id => {
        axios
            .get(`http://localhost:3030/product/` + id)
            .then(response => {
                console.log(response.data.express.catalogEntryView);
                this.setState({ pdpCategory: response.data.express.catalogEntryView });
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidUpdate(prevProps) {
        let currentId = this.props.match.params.id;
        let previousId = prevProps.match.params.id;
        if (currentId !== previousId) {
            this.fetchData(currentId);
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.fetchData(id);
    }

    render() {
        const { pdpCategory } = this.state;
        console.log(pdpCategory);
        const picUrl = "https://149.129.128.3:8443";
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {pdpCategory &&
                            pdpCategory.map(pdpList => {
                                return (
                                    <div key={pdpList.uniqueID} className="col-md-4">
                                        <h2 key={pdpList.uniqueID} />

                                        <img src={picUrl + pdpList.thumbnail} />
                                        <p>
                                            Price : {pdpList.price[0].value}{" "}
                                            {pdpList.price[0].currency}
                                        </p>
                                        <button>Add to Cart</button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PDP;
