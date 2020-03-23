import initListTasks from "../mock/state";
import{
    CHANGE_SELECT_SORT,
    HANDLE_ADD_NEW_TASK,
    CHANGE_SELECT_SEARCH,
    HANDLE_EDIT_NEW_TASK,
    HANDLE_DELETE_NEW_TASK,
} from './actionTypes';

const initialState = {
    orderBy:'name',
    orderDir:'abc',
    searchText:'',
    listTasks :initListTasks
}


const reducers = function(state=initialState,action){
    if(action.type === CHANGE_SELECT_SORT){
        //...state phải đặt trước, vì khi có 2 giá trị trong object thì nó lấy giá trị đứng sau
        return {
            ...state,
            orderBy:action.payload.orderBy,
            orderDir:action.payload.orderDir
        }
    }else if(action.type === CHANGE_SELECT_SEARCH){
        return{
            ...state,
            searchText:action.payload.searchText
        }
    }else if(action.type === HANDLE_ADD_NEW_TASK){
        let listTaskAdd = [
            ...state.listTasks,
            action.payload.task
        ]
        localStorage.setItem('listTasks',JSON.stringify(listTaskAdd));
        return{
            ...state,
            listTasks:listTaskAdd
        }
    }else if(action.type === HANDLE_DELETE_NEW_TASK){
        let listTaskDel = state.listTasks.filter(item =>{
            return item.id !== action.payload.idDel;
        })
        localStorage.setItem('listTasks',JSON.stringify(listTaskDel));
        return{
            ...state,
            listTasks:listTaskDel
        }
    }else if(action.type === HANDLE_EDIT_NEW_TASK){
        console.log(action.payload.taskEdit.id)
        let listTaskEdit = state.listTasks.map(item=>{
            return item.id === action.payload.taskEdit.id ? {
                ...item,
                name:action.payload.taskEdit.name,
                level:action.payload.taskEdit.level
            } : item;
        });
        console.log(listTaskEdit);
        localStorage.setItem('listTasks',JSON.stringify(listTaskEdit));
        return{
            ...state,
            listTasks:listTaskEdit
        }
    }
    return state;
}

export default reducers;