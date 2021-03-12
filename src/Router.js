import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import AllUsers from "./pages/AllLogs";
import UserDetail from "./pages/UserDetail";
import Home from "./pages/Home"
import React, { useState, useEffect } from 'react';
import axiosClient from './axiosClient';
import { prepareData } from './utils/dataHelpers'


export default function AppRouter() {

    const [state, setstate] = useState({
        logs: [],
        users: []
    })

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getLogs()
    }, [])

    const getLogs = async () => {
        setIsLoading(true)
        const res = await axiosClient.get('https://watershedlrs.com/api/organizations/15202/query/export?type=json&cardConfig=%7B%7D&')

        if (res?.data) {
            setstate(prepareData(res.data))
        }

        setIsLoading(false)
    }
    

    return (


        
        <div>
        <h3 class="ui block header" style={{backgroundColor:"#147BAF",padding:25, fontSize:25, fontWeight:15,paddingleft:35, color:"white"}}><i aria-hidden="true" class="angle double right icon"></i>My Moodle Activity Dashboard</h3>

        <Router>
        <div class="ui equal width grid">
        <div class="stretched row">
            <div class="three wide column">
                
                <div class="ui segment" style={{backgroundColor:"#147BAF"}}>

                <div class="ui secondary vertical menu" style={{backgroundColor:"#147BAF"}}>

                    <Link to= "/">
                        <a class="item" style={{fontWeight:1000,fontSize:16,color:"white"}}>  Home <i aria-hidden="true" class="home icon"></i></a>
                    </Link >

                    <div class="ui divider"></div>

                    <Link to= "/Students">
                        <a class="item" style={{fontWeight:1000,fontSize:16,color:"white"}}>Students <i aria-hidden="true" class="users icon"></i></a>
                    </Link>

                    <div class="ui divider"></div>

                    <Link to= "/Courses">
                        <a class="item" style={{fontWeight:1000,fontSize:16,color:"white"}}>Courses <i aria-hidden="true" class="tasks icon"></i></a>
                    </Link >

                    <div class="ui divider"></div>

                    <Link to= "/ml">
                    <a class="item" style={{fontWeight:1000,fontSize:16,color:"white"}}>Machine learning <i aria-hidden="true" class="desktop icon"></i></a>
                    </Link>

                    </div>
                    
                    </div>
                </div>
                <div class="twelve wide column">
                    <div class="ui segment" style={{backgroundColor:"#F8FAF9", marginLeft:-22}}>
                    <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Home />}
                    />

                    <Route
                        exact
                        path="/Students"
                        component={({history}) => <AllUsers users={state.users} history={history} />}
                    />
                    <Route
                        exact
                        path="/user/:id"
                        component={({ match, history }) => <UserDetail logs={state.logs} match={match} history={history} />}
                    />
                    
                    
                </Switch>
                    </div>
                    </div>
                    </div>   
                </div>
        

                {isLoading && (
                <div class="ui active transition visible inverted dimmer">
                    <div class="content">
                        <div class="ui large text loader">Loading data</div>
                    </div>
                        </div>
                        
                          
                )}
                
                
        </Router >
        
        </div>
    );
}