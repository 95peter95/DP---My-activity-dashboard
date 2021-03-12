import { size } from 'lodash';
import React, { useState, useEffect } from 'react';
import p1 from '../img/p1.png'


export default function AllLogs({ users, history }) {
    const [activeUserId, setActiveUserId] = useState(null)
    const [filter, setFilter] = useState('');


    function onUserClick(userId) {
        setActiveUserId(userId)
    }

    function getFilteredUsers() {
        if (filter.length === 0) {
            return users
        }

        return users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
    }


    console.log(activeUserId)

    return (
      <div>
          
          <div class="ui focus input">
          <div class="ui icon input">
            <input type="text" placeholder="Type user name" autoComplete="off" value="" tabindex="0" class="prompt" value={filter} onChange={e => setFilter(e.target.value)}/>
            <i aria-hidden="true" class="search icon" />
          </div>
          </div>
          
          <div class="ui divider"></div>

          <div class="ui grid">
            <div class="ui five column grid">
                    {getFilteredUsers().map(user => (
                      <div class="column"> 
                        <div class="ui card" style={{backgroundColor: '#F8F8F8'}}>
                          <div class="content">
                          <img src={p1} class="ui mini left floated image"/>
                            <div class="header" textAlign="Center" style={{fontSize:1+"em"}}> {user.name} </div>
                            <div class="meta">Student</div>
                                </div>

                                <div class="ui horizontal floated statistics">
                              <div class="ui green statistic" style={{marginRight:20, fontSize:12,fontWeight:700}}>
                                  <div class="label" style={{fontWeight:700}}>Total Activities: </div>
                                  <div class="value"style={{paddingLeft: 5+'px', fontSize:10}}>29</div>      
                            </div>

                                <div class="extra content" style={{padding: 10+'px'}}>Last logged in: <b>10.3.2021</b> </div>
                              </div>
                              
                              <button class="ui linkedin animated button" onClick={() => history.push(`/user/${user.id}`)}>
                              <div class="visible content">Detail</div>
                              <div class="hidden content"><i aria-hidden="true" class="arrow right icon"></i>
                              </div>
                              </button>
                              </div>
                              <div class="ui divider"></div>
                        </div>
                    ))}  
                    </div>
                </div>
            </div>  
    )
}





