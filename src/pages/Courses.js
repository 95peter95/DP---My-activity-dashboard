import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { getAllCourses } from '../axiosClient'
import {Link} from 'react-router-dom'



function Courses(props) {
    const { isLoading, data } = useQuery('all-courses', () => getAllCourses())

    console.log(data);


    return (
        <div>
            {isLoading && (
                <div>
                    Loading...
                </div>
            )}

                {data?.courses && (
                <div class="ui list" style={{fontSize:1.5+'em', paddingLeft:20+'px' , paddingTop:20+'px'}}>
                <div class="item">
                    <i class="folder icon"></i>
                    <div class="content">
                    <div class="header">Applied informatics</div>
                    <div class="description">Course category</div>
                    {data.courses.map(course => (
                    <div class="list">
                        <div class="item">
                        <i class="folder icon"></i>
                        <div class="content">
                        <Link class="header" to={`/Courses/${course.id}`}>
                            <div class="header">{course.fullname}</div>
                        </Link>
                            <div class="description" dangerouslySetInnerHTML={{ __html: course.summary }}></div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                </div>
                    )}   
                    </div>
                    )
                }

Courses.propTypes = {

}

export default Courses

