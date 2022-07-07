import React from "react";


const Header = (props) => {
    return (
        <div>
            <header> Header </header>
            <button onClick={()=>props.changePagina("matches")}>matches</button>
        </div>

    )
}

export default Header