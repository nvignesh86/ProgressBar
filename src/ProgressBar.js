import React, { useEffect, useState ,useCallback} from 'react';
import ButtonContainer from './Components/ButtonContainer';
import BarContainer from './Components/BarContainer';
import Constants from './Utils/Constants';
import LoadingOverlay from 'react-loading-overlay';

export default function ProgressBar(){
    //State for Bars
    const [bars,setBars] = useState([]);

    //State for Buttons
    const [buttons,setButtons] = useState([]);

    //State for Limit
    const [limit,setLimit] = useState(0);

    //State for Selected Bar
    const [selectedBar,setSelectedBar] = useState(0);

    //State for Loadmask
    const [isLoading,setLoading] = useState(false);


    //get bar and button using fetch api.
     const getData= useCallback(()=>{
      setLoading(true);
      fetch(Constants.BAR_URL)
      .then((response) => {
        return response.json();
      }).then((res) => {
          setLoading(false);
        //Update state value from response
          setButtons(res.buttons);
          setBars(res.bars);
          setLimit(res.limit);
          setSelectedBar(0);
          
        }).catch((res) => { 
          setLoading(false);
          console.error(res);
        });
      },[]);// only call on component mount
    
      useEffect(()=>{
        getData() 
      },[getData]); 
  

      //Increment and decrement the Bar values
     const updateBarValue= useCallback((e, value)=>{
        let newBars = bars ? [...bars] : [];
        newBars[selectedBar] = newBars[selectedBar] + parseInt(value);
        if(newBars[selectedBar] < 0){ newBars[selectedBar] = 0};

        setBars(newBars);
    },[bars,selectedBar]);
    
    // Select the Bar using select box
    const selectBar = useCallback((e)=>{        
        setSelectedBar(e.target.value);
    },[]);
     
      
  //Construct options for select box of bars
      const optionBars = bars ? bars.map((bar, key) => {
        return (
          <option key={key} value={key}>Progress Bar {key+1}</option>
        )
      }) : <option>None</option>;
  
      
      return (
        <div className="App">
          <div className="placeholder">The limit is: {limit}</div>
          <LoadingOverlay
                active={isLoading}
                spinner
                text='Loading...'
                className="loadMask"
            >
            <BarContainer bars={bars} limit ={limit} />
            {!isLoading && <select onChange={selectBar}>
              {optionBars}
            </select>}
            <ButtonContainer buttons={buttons} updateBarValue={updateBarValue}/>
          </LoadingOverlay> 
        </div>
      );
   
}