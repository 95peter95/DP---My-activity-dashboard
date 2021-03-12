import LineGraphComponent from '../Components/LineGraphComponent'
import BarGraphComponent from '../Components/BarGraphComponent'
import FilterComponent from '../Components/FilterComponent'
import RadarGraphComponent from '../Components/RadarGraphComponent'


export default function Home() {  

return(
<div>

<h2 class="ui header">Home dashboard
<div class="ui divider" invisible></div>
<div class="sub header">LMS moodle statistics</div></h2>



            
<div>
    <div class="ui divided three column grid">
        <div class="row">
           <div class="column">
             <a class="ui card" style={{backgroundColor: '#F8F8F8'}}>
               <div class="content">
                   <div class="header">LMS Overview</div>
                        <div class="description">

                        <div class="ui statistics">
                        <div class="ui olive statistic">
                        <div class="value" >6</div>
                        <div class="label">Users</div>
                        </div>
        
                <div class="ui blue statistic"style={{paddingRight: 15+'px'}}>
                <div class="value">5</div>
                <div class="label">Courses</div>
                </div>

                <div class="ui orange statistic">
                <div class="value">2</div>
                <div class="label">quizzes</div>
            </div>
    </div>
                </div>
            </div>
            </a>
                </div>
            <div class="column">
            <a class="ui card" style={{backgroundColor: '#F8F8F8'}}>
                <div class="content">
                <div class="header">Activity summary</div>
                <div class="description"><div class="ui statistics">
    <div class="ui orange statistic">
        <div class="value" >72</div>
        <div class="label">Interactions</div>
        </div>
        <div class="ui red statistic"> 
                <div style={{paddingRight: 15+'px'}} class="value">4</div>
                <div class="label">Quiz</div>
                <div class="label">Completions</div>
            </div>
    
    </div></div>
            </div>
                </a>
            </div>
            <div class="column">
                <a class="ui card" style={{backgroundColor: '#F8F8F8'}}>
                <div class="content">
                <div class="header">Last Interaction</div>
                <div class="description">
                <div class="ui divider"></div>
                <p style={{paddingTop:10}}>User <b>Peter Pauco</b></p>
                <p style={{fontSize:15, fontWeight:700}}>Logged out of activity Moodle test</p>
        
    </div>
        </div>
    </a>
    </div>
     </div>
    <div class="ui divider"></div>
        </div> 
</div>                
                        
<div class="ui divider"></div>

<div class="ui grid">
    <div class="row">
        <div class="eight wide computer twelve wide mobile ten wide tablet column">
        <FilterComponent />
        <LineGraphComponent />

        </div>
        
            <div class="eight wide computer ten wide mobile ten wide tablet column">
            <h4 class="ui header">Overview of Enrolled Students</h4>
            <BarGraphComponent />
            </div>
            
            
        </div>
</div>



</div>


            

)

}


