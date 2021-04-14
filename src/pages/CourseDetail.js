import React from 'react'
import { useQuery } from 'react-query'
import { getAllCourses, getCourseDetail } from '../axiosClient'
import icon1 from '../img/school.png'
import { getUserActivity } from '../utils/dataHelpers'
import RadarGraphComponent from '../Components/RadarGraphComponent'
import GraphComponent from '../Components/GraphComponent'
import { format } from 'date-fns'

function CourseDetail({match, logs}) {
    // const activeUserId = history


    console.log(match)


    const userActivities = getUserActivity(logs, match.params.id);

    console.log(userActivities)


    function getUserLogsMetrics() {

        const activityLogs = userActivities.filter(log => log.verb.display.en === 'logged out of').reverse();
        const testAttempts = userActivities.filter(log => log.verb.display.en === 'completed').reverse()
        const testAnswers = userActivities.filter(log => log.verb.display.en === 'answered');

        const correctAnswers = testAnswers.filter(log => log.result.success)

        const totalAnswers = [
            {name: 'Positive', value: correctAnswers.length, color: '#bada55'},
            {name: 'Negative', value: testAnswers.length - correctAnswers.length, color: 'red'} 
        ]
    
    
        let lastSession = 'Never';
        let lastTestAttempt;

        if (activityLogs.length > 0) {
            lastSession = format(new Date(activityLogs[activityLogs.length - 1].timestamp), 'd MMMM yyyy')
        }

        if (testAttempts.length > 0) {
            const lastTest = testAttempts[testAttempts.length - 1];
            lastTestAttempt = {
                score: lastTest.result.score,
                testName: lastTest.object.definition.name.en
            }
        }

        return {
            lastSession,
            lastTestAttempt,
            count: userActivities.length,
            testAttempts,
            totalAnswers
        }
    }

    const {lastTestAttempt, lastSession, totalAnswers, testAttempts} = getUserLogsMetrics()

    

    return (
        <div>
            {userActivities.map((log, i) => {
                return (
                    <div key={i}>
                        {i === 0 && (
                            <div style={{ paddingTop: 5 }}>
                                <div class="ui divider"></div>
                                <h2 class="ui header" style={{ paddingBottom: 10 }}>
                                    <img src={icon1} class="ui image" />
                                    <div class="content" >Course name: Course 1 </div>
                                </h2>
                                <div class="ui divider"></div>
                                <div class="ui divided four column grid">
                                    <div class="row">
                                        <div class="column">
                                            <a class="ui card" style={{ backgroundColor: '#F8F8F8' }}>
                                                <div class="content">
                                                    <div class="header">Last Activity in course</div>
                                                    <div class="description">User completed activity TEST1</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="column">
                                            <a class="ui card" style={{ backgroundColor: '#F8F8F8' }}>
                                                <div class="content">
                                                    <div class="header">Best Student: Jozef Smart</div>
                                                        <div class="description">Overall rating<b> 80%</b></div>
                                                </div>
                                            </a>
                                        </div>
                                        
                                        <div class="column">
                                            <a class="ui card" style={{ backgroundColor: '#F8F8F8' }}>
                                                <div class="content">
                                                    <div class="header">Last session</div>
                                                    <div class="description">{lastSession}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="column">
                                            <a class="ui card" style={{ backgroundColor: '#F8F8F8' }}>
                                                <div class="content">
                                                    <div class="header">Students endrolled</div>
                                                    <div class="description">This course has 6 endrolled students
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="ui divider"></div>
                                </div>
                                <div class="ui divided two column grid">
                                    <div class="row">
                                        <div class="column">
                                            <h4 class="ui header">Test success comparison</h4>
                                            <GraphComponent/>
                                        </div>
                                        <div class="column">
                                            <h4 class="ui header">Activity distribution</h4>
                                            <RadarGraphComponent />
                                        </div>
                                    </div>

                                </div>
                                <div class="ui divider"></div>
                                <h4 class="ui header">User log feed: </h4>
                            </div>
                            
                        )}

                        <div class="ui divider"></div>
                        <div class="ui feed">
                            <div class="event">
                                <div class="content">
                                    <div class="summary">
                                        <a class="user">{log.verb.display.en}</a> {log.object.objectType.toLowerCase()} {log.object.definition.name.en}
                                        <div class="date">at  {format(new Date(log.timestamp), 'PPpp')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

CourseDetail.propTypes = {

}

export default CourseDetail




// function CourseDetail({match, logs}) {

//     console.log(logs);


//     const { isLoading, data} = useQuery('course-detail', () => getCourseDetail(match.params.id))

//     console.log(data);


//     return (
//         <div>
//             {isLoading && (
//                 <div>
//                     Loading...
//                 </div>
//             )}
//             {JSON.stringify(data)}
           
//         </div>
//     )
// }

// CourseDetail.propTypes = {

// }

// export default CourseDetail

