import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CourseList.css';


const CourseList = (props) => {
    
    
    return (
        <div className="courseDivMain">
            <div >

            
            { <img src={props.courseInfo.img} alt="" className="imgList" /> }

            </div>
            <div className="courseInfo">
            <h1>{props.courseInfo.courseTitle} </h1>
            <h3> ${props.courseInfo.price}</h3>
            <br></br>
            <h4> by <small>{props.courseInfo.name}</small></h4>
            <button className="btn" onClick={ () => props.handleAddCourse(props.courseInfo)} > <FontAwesomeIcon icon={ faShoppingCart } />   Add To Cart</button>
            </div>
           
        </div>
    );
};

export default CourseList;