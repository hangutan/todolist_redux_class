import React,{useState} from 'react';
import {connect} from 'react-redux';
import {actHandleAddNewTask} from '../store/action';
import Modal from "./Modal";

import {TASK_LEVEL} from '../constants';
import uuidv4 from 'uuid/v4';

function ControlAddNew({
        dispatch
    }){

    const [isOpenModal,setIsOpenModal]=useState(false);
    const [newtask, setNewTask] = useState({
        name:'',
        level:0
    });

    function handleOnChange(e, keyField){
        setNewTask({
            ...newtask,
            [keyField]: e.target.value
        })
    }

    function handleSubmit(){
        let task = {
            id : uuidv4(),
            ...newtask,
        }
        dispatch(actHandleAddNewTask(task))
        // handleAddNewTask(data);
        setIsOpenModal(false);
        setNewTask({
            name:'',
            level:0
        })
    }

    return(
        <>
            <div className="form-group add-task">
                <button 
                    onClick={()=>setIsOpenModal(true)}
                    type="button" className="btn btn-info btn-block"
                >Add Task</button>
            </div>
            <Modal
                width={500}
                isVisible={isOpenModal}
                title="Thêm mới tác vụ"
                renderFooter={()=>{
                    return(
                        <>
                            <button 
                                style={{marginRight : "10px"}} 
                                type="button" className="btn btn-primary"
                                onClick={handleSubmit}    
                            >Submit</button>
                            <button 
                                onClick={()=>setIsOpenModal(false)}
                                type="button" className="btn btn-secondary"
                            >Cancel</button>
                        </>
                    )
                }}>

                <div className="form-group">
                    <label className="sr-only" htmlFor="">label</label>
                    <input
                        value={newtask.name} onChange={(e)=>handleOnChange(e,"name")} 
                        type="text" className="form-control" placeholder="Task Name" 

                    />
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor="">label</label>
                    <select
                        value={newtask.level} onChange={(e)=>handleOnChange(e,"level")} 
                        name="ds" className="form-control" required="required"
                    >
                        {
                            TASK_LEVEL.map((level,index)=>{
                                return (
                                    <option key={level.name} value={index}>{level.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </Modal>
        </>
    )
}



export default connect()(ControlAddNew);