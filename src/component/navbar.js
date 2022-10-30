import React from "react"

export default function Nav(){

    const [nav, navFunc] = React.useState(false)
    
    
    function getMenu(){
        navFunc(prevValue => !nav)
        console.log(nav)   
    }

    return(
        <div className="navMain">
            {nav  && <div className="mobileNav">
            <ul>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Stats</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Create</a></li>
            </ul>
            </div>}
            <span className="logo"><img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png" /><h2>OpenSea</h2></span>
            <span className='fInput'><i class="fa fa-search"></i><input type='text'  placeholder='Search items, collections, and accounts'/></span>
            <ul className="navLinks">
                <li className="full"><a href="#">Marketplace</a></li>
                <li className="full"><a href="#">Stats</a></li>
                <li className="full"><a href="#">Resources</a></li>
                <li className="full"><a href="#">Create</a></li>
            </ul>
            <i onClick={getMenu} class="fa-solid hamburger fa-bars"></i>
        </div>
    )
}