import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env['https://watershedlrs.com/api/organizations/15202/query/export?type=json&cardConfig=%7B%7D'],
    auth: {
        username: '6d9cf4b7c511d2',
        password: 'b0c631c5d6a367'
    }
})

// const webServiceClient = axios.create({
//     baseURL: https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=core_user_get_users_by_field&field=id&values[0]=2&moodlewsrestformat=json
// })
//   kurzy v ktorych je user https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=3
//    
// https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=core_user_get_course_user_profiles&moodlewsrestformat=json&courseid=2

// https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=gradereport_user_get_grades_table&moodlewsrestformat=json&courseid=2&userid=3
// https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=gradereport_user_get_grades_table&moodlewsrestformat=json&id=3

//detail kurzu by ID https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=core_course_get_courses_by_field&moodlewsrestformat=json&field=id&value=2
// vsetky kurzy https://paucik.codet.sk/moodle/webservice/rest/server.php?wstoken=eb1aaa49eb1339d0a26d0d1751ee129f&wsfunction=core_course_get_courses_by_field&moodlewsrestformat=json&field=category&value=2
export default axiosClient;

const webServiceClient = axios.create({
    baseURL: 'https://paucik.codet.sk/moodle/webservice/rest/server.php',
    params: {
        wstoken: 'eb1aaa49eb1339d0a26d0d1751ee129f'
    }
})

export function getAllCourses() {
    return webServiceClient.get('', {
        params: {
            wsfunction: 'core_course_get_courses_by_field',
            moodlewsrestformat: 'json',
            field: 'category',
            value: '2'
        }
    }).then(r => r.data)
}

export function getCourseDetail(id) {
    return webServiceClient.get('', {
        params: {
            wsfunction: 'core_course_get_courses_by_field',
            moodlewsrestformat: 'json',
            field: 'id',
            value: id
        }
    }).then(r => r.data)

}


export function getCoursesEnrolledUsers() {
    return webServiceClient.get('', {
        params: {
            wsfunction: 'core_enrol_get_users_courses',
            moodlewsrestformat: 'json',
            userid: '3',
        }
    }).then(r => r.data)

}