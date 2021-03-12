import React from 'react'
import icon1 from '../img/school.png'
import {getUserActivity} from '../utils/dataHelpers'
import RadarGraphComponent from '../Components/RadarGraphComponent'
import AreaGraphComponent from '../Components/AreaGraphComponent'
import PieGraphComponent from '../Components/PieGraphComponent'

function UserDetail({logs, match}) {
    // const activeUserId = history


    console.log(match)


    const userActivities = getUserActivity(logs, match.params.id);
 
    console.log(userActivities)

    

    
    return (
        <div>
                                
            {userActivities.map((log, i) => {
                return (
                    <div key={i}>
                        {i === 0 && ( 
                            <div style={{paddingTop: 5}}>
                            <div class="ui divider"></div>
                            <h2 class ="ui header" style={{paddingBottom: 10}}>
                            <img src={icon1} class="ui image"/>
                            <div class="content" >User: {log.actor.name} </div>
                            </h2>
                            <div class="ui divider"></div>
                            <div class="ui divided three column grid">
                            <div class="row">
                                    <div class="column">
                                    <a class="ui card" style={{backgroundColor: '#F8F8F8'}}>
                                        <div class="content">
                                            <div class="header">Last Activity</div>
                                        <div class="description">User {log.verb.display.en} {log.object.objectType.toLowerCase()} {log.object.definition.name.en}</div>
                                        </div>
                                    </a>
                                        </div>
                                    <div class="column">
                                    <a class="ui card" style={{backgroundColor: '#F8F8F8'}}>
                                        <div class="content">
                                            <div class="header">Last Rating</div>
                                        <div class="description">Finished <b>test1</b> with <b>5/5</b> points</div>
                                        </div>
                                    </a>
                                        </div>
                            <div class="column">
                                  <a class="ui card" style={{backgroundColor: '#F8F8F8'}}>
                                        <div class="content">
                                            <div class="header">Last session</div>
                                        <div class="description">{log.timestamp}
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
                                        <AreaGraphComponent /> 
                                    </div>
                                    <div class="column">
                                        <h4 class="ui header">Answer distribution</h4>
                                        <PieGraphComponent /> 
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
                                        <div class="date">{log.timestamp}</div>
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

