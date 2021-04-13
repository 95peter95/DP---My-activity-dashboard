import React from 'react'
import { useQuery } from 'react-query'
import { getAllCourses, getCourseDetail } from '../axiosClient'



function CourseDetail({match, logs}) {

    console.log(logs);


    const { isLoading, data} = useQuery('course-detail', () => getCourseDetail(match.params.id))

    console.log(data);


    return (
        <div>
            {isLoading && (
                <div>
                    Loading...
                </div>
            )}
            {JSON.stringify(data)}
           
        </div>
    )
}

CourseDetail.propTypes = {

}

export default CourseDetail

