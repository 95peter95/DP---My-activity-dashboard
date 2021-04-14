import React from 'react'
import icon1 from '../img/school.png'
import { getUserActivity } from '../utils/dataHelpers'
import RadarGraphComponent from '../Components/RadarGraphComponent'
import AreaGraphComponent from '../Components/AreaGraphComponent'
import PieGraphComponent from '../Components/PieGraphComponent'
import { format } from 'date-fns'

function UserDetail({ logs, match }) {
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
                                    <div class="content" >User: {log.actor.name} </div>
                                </h2>
                                <div class="ui divider"></div>
                                <div class="ui divided three column grid">
                                    <div class="row">
                                        <div class="column">
                                            <a class="ui card" style={{ backgroundColor: '#F8F8F8' }}>
                                                <div class="content">
                                                    <div class="header">Last Activity</div>
                                                    <div class="description">User {log.verb.display.en} {log.object.objectType.toLowerCase()} {log.object.definition.name.en}</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="column">
                                            <a class="ui card" style={{ backgroundColor: '#F8F8F8' }}>
                                                <div class="content">
                                                    <div class="header">Last Rating</div>
                                                    {lastTestAttempt ? (
                                                        <div class="description">Finished <b>{lastTestAttempt.testName}</b> with <b>{lastTestAttempt.score.raw}/{lastTestAttempt.score.max}</b> points</div>
                                                    ) : <div class="description">Has not completed any tests</div>}
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
                                    </div>
                                    <div class="ui divider"></div>
                                </div>
                                <div class="ui divided two column grid">
                                    <div class="row">
                                        <div class="column">
                                            <h4 class="ui header">Test Results</h4>
                                            <AreaGraphComponent testAttempts={testAttempts}/>
                                        </div>
                                        <div class="column">
                                            <h4 class="ui header">Answer distribution</h4>
                                            <PieGraphComponent totalAnswers={totalAnswers} />
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
                        <td>  </td>
                    </div>
                )
            }
            )}
        </div>
    )
}

UserDetail.propTypes = {

}

export default UserDetail

