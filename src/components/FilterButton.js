import React from "react";

const FilterButton = ({ handle_click, is_list, Icon }) =>{
    return (
        <button 
            type="button" 
            className={`app__view-btn ${is_list ? "active" : undefined}`}
            onClick={handle_click}
        >
            <Icon />
        </button>
    )
}

export default FilterButton;