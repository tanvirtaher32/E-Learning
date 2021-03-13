import React, { useState } from 'react';
import './Course.css';
import data from '../../../src/fakeData/data.json';

import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';



function Course() {
    const [courses, setCourses] = useState(data);

    const handleAddCourse = (course) => {
      
        const newCart = [...cart, course];
        setCart(newCart);
    };
    const [cart, setCart] = useState([]);
    return (

        <div className="main-div">
           
            <div className="course-list">


                {courses.map(course => <CourseList handleAddCourse={handleAddCourse} courseInfo={course}></CourseList>)}



            </div>

            <div className="course-cart">
                <Cart cart={cart}></Cart>
            </div>



        </div>

    );
}

export default Course;