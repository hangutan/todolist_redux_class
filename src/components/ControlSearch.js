import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {actChangeSearch} from '../store/action';
import {searchTextSelector} from '../store/selector';

 function ControlSearch({
    searchText,
    dispatch
    }){
    const [text, setText]=useState('');
    useEffect(() => {
        setText(searchText);
    },[searchText]);
        
    function handleChangeSearchText(e){
        console.log(e.target.value);
        dispatch(actChangeSearch(e.target.value));
    }
    function handleClear(){
        dispatch(actChangeSearch(''));
    }

    return(
        <div className="col-12">
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search for..." 
                    value={text} 
                    onChange={handleChangeSearchText}   
                />
                <span className="input-group-append">
                    <button 
                        className="btn btn-info" type="button"
                        onClick={handleClear}
                    >Clear!</button>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        searchText : searchTextSelector(state)
    }
}

export default connect(mapStateToProps)(ControlSearch);

//