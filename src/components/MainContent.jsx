import React from "react";

const MainContent = (props) => {
    return(
        <div className="search-section">
            <h1 className="search-title">Ma super page de recherche</h1>
            <form>
                <input id='filterbar' type="search" placeholder="Rechercher par langue"/>
                <button id='filter-button' type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default MainContent;