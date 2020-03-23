import{
    HANDLE_ADD_NEW_TASK,
    CHANGE_SELECT_SORT,
    CHANGE_SELECT_SEARCH,
    HANDLE_DELETE_NEW_TASK,
    HANDLE_EDIT_NEW_TASK
} from './actionTypes';

function actHandleAddNewTask(newTask){
    return{
        type:HANDLE_ADD_NEW_TASK,
        payload:{
            task:newTask
        }
    }
}

function actHandleDeleteTask(idDel){
    return{
        type:HANDLE_DELETE_NEW_TASK,
        payload:{
            idDel
        }
    }
}

function actHandleUpdateTask(taskEdit){
    return{
        type:HANDLE_EDIT_NEW_TASK,
        payload:{
            taskEdit
        }
    }
}

function actChangeSelectSort({orderBy,orderDir}){
    return{
        type:CHANGE_SELECT_SORT,
        payload:{
            orderBy,
            orderDir
        }
    }
}

function actChangeSearch(searchText){
    return{
        type:CHANGE_SELECT_SEARCH,
        payload:{
            searchText
        }
    }
}

export {
    actHandleAddNewTask,
    actChangeSelectSort,
    actChangeSearch,
    actHandleDeleteTask,
    actHandleUpdateTask
}