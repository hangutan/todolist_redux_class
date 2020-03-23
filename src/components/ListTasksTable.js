import React,{useState , useEffect } from "react";
import ListTasksItem from './ListTasksItem';
import { connect} from 'react-redux';
import Modal from './Modal';

import {actHandleDeleteTask} from '../store/action';
import {listTaskSortAndSearchSelector} from './../store/selector';

function ListTasksTable({
    listTasks,//được ánh xạ từ store của redux
    handleEditTask,
    dispatch,
    }){
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [taskDelete, setTaskDelete]=useState(null);

    useEffect(() => {
       if(taskDelete){
        setIsOpenModal(true);
       }else{
        setIsOpenModal(false);
        }
    }, [taskDelete]);

    const hanldeSubmit =()=>{
        dispatch(actHandleDeleteTask(taskDelete.id));
        setIsOpenModal(false);
        setTaskDelete(null);
        };

    const handleCancel = () =>{
        setIsOpenModal(false);
        setTaskDelete(null);
    }

    return(
        <>
            <div className="panel panel-success">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{width: '20%'}} className="text-center">Level</th>
                            <th style={{width: '160px' }} >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listTasks && listTasks.length > 0 && listTasks.map((task,index)=>{
                                return(
                                    <ListTasksItem 
                                    task={task} 
                                    key={task.id} 
                                    index={index}
                                    setTaskDelete={setTaskDelete}
                                    handleEditTask={handleEditTask}
                                />
                                )
                            })
                        }  
                    </tbody>
                </table>
                <Modal
                    title = "Cảnh báo"
                    isVisible = {isOpenModal}
                    renderFooter={()=>{
                        return (
                            <>
                                <button 
                                    onClick={hanldeSubmit}
                                    style={{marginRight:10}} 
                                    type="button"
                                    className="btn btn-primary"
                                >Confirm</button>
                                <button
                                    onClick={handleCancel}
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    Cancel
                                </button>
                            </>
                        )
                    }}
                >
                    <h4>Bạn có chắc chắn muốn xóa không item này không ??</h4>
                </Modal>
            </div>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        listTasks:listTaskSortAndSearchSelector(state)
    }
    
}

export default connect(mapStateToProps)(ListTasksTable);