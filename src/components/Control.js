import React from "react";

import ControlSearch from "./ControlSearch";
import ControlSort from "./ControlSort";
import ControlAddNew from "./ControlAddNew";

import Row from "react-bootstrap/Row";

export default function Control (){
    

    return(
        <Row>
            <div className="col-12 col-lg-6">
                <div className="row">
                    <ControlSort/>
                    <ControlSearch/>
                </div>
            </div>

            <div className="col-12 col-lg-6">
                <ControlAddNew/>
            </div>
        </Row>
    )
}