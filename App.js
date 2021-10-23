import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react';


function App() {
  const [page, setPage] = useState(1);
  const [free, setFree] = useState(1);
  const [drop,setDrop] = useState(false);
  const [inr,setInr] = useState(0);
  var Coins=0;
  const descs = ['Basic info','schedules', 'MatchDetails','Entry fees','Prizepool','Requirements','Rules','Poin system','Participant Rules','Appearance','Content(image ore video)','Soceil media','Umpires','Caster','Settings'];
  function Homepage(){
    function MatchTable(){
        function TableBluePrint(props){
            const step = 'Step '+ (descs.indexOf(props.desc)+1) ; 
            return(
                <tr onClick ={()=> {
                    if(props.desc==='Entry fees')setPage(2)
                }}>
                    <td>{step}</td>
                    <td>{props.desc}</td>
                </tr>
            );
        }
        return(
            <div className="table">
                  <h2>New Match</h2>
                  <table>
                  {descs.map((val)=> {return(<TableBluePrint desc={val}/>)})}
                  </table>
                  <label>Draft</label>
                  <select name='Draft'></select>
              </div>
        );
    }
    return (
      <div className="container">
          <div className="main" >
            
              <h2>Select Games</h2>
              <input type='search' placeholder="Type to search"/>
              <li>BGMI</li>
              <li>Pubg-Korean</li>
              <li>Pubg-Global</li>
              
          </div>
          <div className="submain">
              <div className="selectform1">
                  <label>Single Match Format</label>
                  <select name='singleselection' onClick={()=> {setDrop(!drop)}}></select>
              </div>
              {drop===false ? null: <MatchTable/> }
              
              <div className="selectform2">
                  <label>New Match-Multi Match Format</label>
                  <select name='multi-selection form'></select>
              </div>
              
          </div>
      </div>
      
    );
  }
  
  function Secondpage(){
    function Freeoption(){
        return(
          <>
            <div class="freeoption">
                <button type='button'>Save</button>
                <button type='button'>Preview</button>
            </div>
          </>
        )
      }
      function Paidoption(){
        return(
          <>
            <div className="paidoption">
                
                    <div className="choose">
                        <div>Enter Entry Fess in CC</div>
                        <input type='text' onChange={(event)=> {Coins=event.target.value}} onKeyPress={(event)=> {if(event.key==='Enter')setInr(Coins*636.10)}}/>
                        <label>Coins</label>
                        <input type='text' placeholder="In INR" value={inr}/>
                        <button type='button' onClick={()=> {setPage(1)}}>Previous</button>
                        <button type='button'>Next</button>
                    </div>
                
            </div>
          
          </>
          )
      }
        
        return(
            <>
            <div className="radiodept">
                <div className="radio">
                    <input type='radio' name='fav_language' id='free' value='Free' checked={free===1} onChange={(event)=> {setFree(1)} }/>
                    <label for='free'>Free</label>
                    <input type='radio' name='fav_language'id='paid' value='Paid' checked={free===2} onChange={(event)=> {setFree(2)}} />
                    <label for='paid'>Paid</label>
                </div>
                {(free===1) ? <Freeoption/> : <Paidoption/>}
            </div>
            
            </>
    );
    
    
    
    
  }
  return(
    (page === 1) ? <Homepage/> : <Secondpage/>
  );
}

export default App;
