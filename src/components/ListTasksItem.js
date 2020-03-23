import React,{useState,useCallback} from "react";

import{connect} from 'react-redux';
import{actHandleUpdateTask} from '../store/action';
import {TASK_LEVEL} from "../constants";

function ListTasksItem({
    task,
    index,
    setTaskDelete,
    dispatch
    }){
    const [taskEdit,setTaskEdit]=useState(null);

    const hanldeEdit = useCallback(() =>{
            setTaskEdit(task);
        },
        [task],
    )

    const handleOnChange=(e, keyField)=>{
        console.log(e.target.value)
        setTaskEdit({
            ...taskEdit,
            [keyField]: e.target.value
        });
    };

    const handleClickCancelEdit = useCallback(() =>{
        setTaskEdit(null);
    },[]);

    const handleSaveEdit = ()=>{
        console.log(taskEdit);
        dispatch(actHandleUpdateTask(taskEdit));
        setTaskEdit(null);
    }
    
    return(
        <tr>
            <td className="text-center">{index+1}</td>
            <td>
                {
                    !taskEdit 
                    ? task.name
                    :
                    <input
                        value={taskEdit.name} onChange={(e)=>handleOnChange(e,"name")} 
                        type="text" className="form-control" placeholder="Task Name" 
                    /> 
                }
            </td>
            <td className="text-center">
                {
                    !taskEdit 
                    ?
                    <span className={`badge ${TASK_LEVEL[task.level].class}`}>
                    {TASK_LEVEL[task.level].name}</span>  
                    :
                    <select
                        value={taskEdit.level} onChange={(e)=>handleOnChange(e,"level")} 
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
                }   
               
            </td>
            <td>
                {
                    !taskEdit ? 
                    <button 
                        type="button" className="btn btn-warning"
                        onClick={()=>hanldeEdit(task)}
                    >Edit</button> :
                    <button 
                        type="button" className="btn btn-primary"
                        onClick={handleSaveEdit}
                    >
                        Save
                    </button>
                }
                
                {
                    !taskEdit ? 
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick = {()=>setTaskDelete(task)}
                    >Delete</button> :
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleClickCancelEdit}
                    >
                        Cancel
                    </button>
                }
                
            </td>
        </tr>
    )
}

export default connect()(ListTasksItem);