import React, { useState } from "react";
import { FiLoader, FiSearch } from 'react-icons/fi';

const SearchInput = ({ handle_change, handle_submit, name, placeholder, value }) => {
    const [ submitted, set_submitted ] = useState(false);

    handle_submit = (e) => {
        e.preventDefault();
        try {
            set_submitted(true)
        } catch (error) {
            set_submitted(false)
        } 
        finally {
            set_submitted(false)
        }
    }
    return (
        <div className="app__searchinput">
            <div className="app__searchinput-box">
                <FiSearch />
                <input 
                    onChange={handle_change}
                    name={name}
                    placeholder={placeholder}
                    type="text" 
                    onSubmit={handle_submit}
                />
            </div>
            { submitted && <div className="app__searchinput-loader">
                <FiLoader />
            </div> }
        </div>
    )
}

export default SearchInput;