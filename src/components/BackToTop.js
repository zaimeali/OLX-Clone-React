import React from 'react'

// Styles
import '../App.css'

// Icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export default function BackToTop() {
    
    const scrollTop = () =>{
        // console.log("click")
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <span onClick={ scrollTop } className="backToTop">
            <span><ExpandLessIcon /></span>
            <span>Back to top</span>
        </span>
    )
}
