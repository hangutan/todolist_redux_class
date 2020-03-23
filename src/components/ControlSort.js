import React from "react";

import {TASK_SORT} from "../constants";
import {connect} from 'react-redux';
import {actChangeSelectSort} from './../store/action';
import Dropdown from "react-bootstrap/Dropdown";

const DropdownToggle = Dropdown.Toggle;
const DropdownMenu = Dropdown.Menu;
const DropdownItem = Dropdown.Item;



function ControlSort({
        orderBy,
        orderDir,
        dispatch
    }){

    function onSelectDropdown(eventKey) {
        let [orderBy, orderDir] = eventKey.split("-");
        dispatch(actChangeSelectSort({orderBy,orderDir}))
    }

    return(
        <div className="col-12">
            <div className="form-group">
                <div className="dropdown">
                    <Dropdown onSelect={onSelectDropdown}>
                        <DropdownToggle variant="success" id="dropdown-basic">
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                TASK_SORT.map( o =>{
                                    return(
                                        <DropdownItem 
                                            key={o.key} eventKey={o.key}
                                            active={`${orderBy} - ${orderDir}` === o.key} 
                                        >{o.name}</DropdownItem>
                                    )
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <span 
                        style={{textTransform : "uppercase"}} 
                        className="badge badge-success badge-medium">{orderBy} - {orderDir}
                    </span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        orderBy : state.orderBy,
        orderDir:state.orderDir
    }
}

export default connect(mapStateToProps)(ControlSort)