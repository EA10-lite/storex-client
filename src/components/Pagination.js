import React from "react";

// icon
import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb';

const Pagination = ({ pages, current_page, handle_next, handle_prev }) => {

    return (
        <div className="app__pagination">
            <div className="app__pagination-container">
                <div className="app__pagination-row">
                    <div className="app__pagination-row_col-left">
                        <p> Page { current_page } of { pages } </p>
                    </div>
                    <div className="app__pagination-row_col-right">
                        <div className="app__pagination-btn_prev">
                            <TbArrowNarrowLeft 
                                color="#fff"
                                onClick={handle_prev}  
                                size={24} 
                            />
                        </div>
                        <div className="app__pagination-btn_next">
                            <TbArrowNarrowRight 
                                color="#fff" 
                                onClick={handle_next}
                                size={24} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination;