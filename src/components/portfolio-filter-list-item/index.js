import React from 'react';

const PortfolioFilterListItem = (props) => {
    return (
        <li className="portfolio__filter__list__item">
            <a href="#" 
        onClick={(event)=> {
            event.preventDefault(); 
            props.handleClick(props.cat);
            return false;
            }}>{props.cat}
            </a>
        </li>
    )
};

export default PortfolioFilterListItem;