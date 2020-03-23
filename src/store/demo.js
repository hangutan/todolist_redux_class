import { createStore } from 'redux';

const initialState = {
    orderBy:'name',
    orderDir:'abc',
    searchText:'',
    listTask : [
        {
            id:1,
            name:'Task 1',
            level:2
        }
    ]
}

const CHANGE_SELECT_SORT = "CHANGE_SELECT_SORT";
const CHANGE_SELECT_SEARCH= "CHANGE_SELECT_SEARCH";
const ADD_NEW_TASK ='ADD_NEW_TASK';

const reducers = function(state=initialState,action){
    console.log("run reducers",action);
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
    }else if(action.type === ADD_NEW_TASK){
        return{
            ...state,
            listTask:[
                ...state.listTask,
                action.task
            ]
        }
    }
    return state;
}

const store = createStore(reducers);
//khi kích hoạt một action thì nó sẽ gửi tới reducers và reducers sẽ chạy

store.subscribe(function(){
    console.log('store',store.getState())
})

store.dispatch({
    type:'CHANGE_SELECT_SORT',
    payload:{
        orderBy:'level',
        orderDir:'asc'
    }
})

//tạo thêm store

store.dispatch({
    type:'CHANGE_SELECT_SEARCH',
    payload:{
        searchText:'abbbb'
    }
})

//tạo thêm store add

store.dispatch({
    type:'ADD_NEW_TASK',
    task:{
        id:'454354535354',
        name:'Task 2',
        level:1
    }
})

/*
    Nếu muốn thay đổi lại state -> ta gửi thông điệp tới reducer thông qua action.
    {Component}dispatch một action -> chuyển tới reducer.
    Và trong reducer sẽ thay đổi state theo thông điệp tương ứng của action.
    (Kiểm tra điều kiện -> type thuộc loại nào) -> thay đổi state

*/