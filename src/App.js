import React from 'react'
import { nanoid } from 'nanoid';
import './assets/main.css'
import QuotesRaw from './assets/QuotesRaw';
export default function App() {
    const [display, setDisplay] = React.useState("");
    const [math, setMath] = React.useState({});
    const[countIlt, setCountIlt] = React.useState(0);
    const [newDis, setNewDis] = React.useState("");
    const[quotes, setQuotes] = React.useState("");

    
    const btnSaction1 = ["Ac", "%", "x", "÷",7 , 8, 9, "-", 4, 5, 6, "+"];
    const btnSaction2 = [1, 2, 3, 0, ".", "☻"];
    const addSaction1 =  btnSaction1.map(n => addingButtons(n));
    const addSaction2 = btnSaction2.map(n => addingButtons(n));
    

    // displaying butons on the interface
    function addingButtons(value) {
      return (
           <button
                   className={value== "Ac"? `btn btn-ac` : `btn`}
                   onClick={handleClick}
                   value={value}
                   key={nanoid()}
           >{value}</button>
      )
   }


    // getting click object value
    function handleClick(obj){
        const currentvalue = obj.target.value;
        if((Number(currentvalue) || currentvalue == "." || currentvalue == 0) && display.length < 19) {
            setNewDis("");
            setDisplay(prevDis => prevDis += currentvalue);
            setCountIlt(preConut => preConut + 1);
            setQuotes("")
        } else if(currentvalue == "Ac") {
            setDefault();
        } else if (currentvalue == "☻") {
            showQuotes(QuotesRaw[Math.floor(Math.random() * QuotesRaw.length)]);
        } else {
            setMath({
                current: Number(display),
                operator: currentvalue
            });
            setDisplay("")
            setNewDis(currentvalue);
        }
    }



    // set default values
    function setDefault() {
        setDisplay("");
        setMath({});
        setCountIlt(0);
        setNewDis("");
        setQuotes("");
    }


    // fixd num result 
    function fixNumber(num) {
        return String(num).includes('.')? num.toFixed(2) : num ;
    }


    // executing math
    function calculation() {
        let result = 0;
        if(display.length > 0) {
            if(math.operator == "x") {
                result = (math.current * Number(display));
            } else if(math.operator == "+") {
                result = (math.current + Number(display));
            } else if(math.operator == "-") {
                result = (math.current - Number(display));
            } else if(math.operator == "÷") {
                result = fixNumber(math.current / Number(display));
            } else if(math.operator == "%") {
                result = fixNumber((math.current % Number(display)));
            }
        }
        setNewDis(result);
        setDisplay(result.toString());
        if(countIlt != 0 && result || result == 0) {
          let indexQuotes = Math.round(result/countIlt);
          if(indexQuotes > QuotesRaw.length) {
            indexQuotes = Math.floor(Math.random() * QuotesRaw.length);
          }
          const text = QuotesRaw[indexQuotes];
          showQuotes(text);
        }

    }
    

    // showing Quoets
    function showQuotes(textObj) {
        setQuotes({
          quotes: textObj.Quote,
          author: textObj.Author
        });
    }


    // Dynamic styles
    const styleDisplay = {
      fontSize: newDis.toString().length > 10 || display.toString().length > 10? "20px" : "40px" 
    }

    return (
        <div className="container">
            <div className="happy-box">
              <div className="display-happy-text">
                  { quotes? 
                      <p className="happy-text">
                      {quotes.quotes} 
                        <br />
                      -{quotes.author}
                  </p> : 
                  
                  ""
                  }
              </div>
            </div>
            <div className="cal-body">
                <div className="cal-display">
                    <div className="cal-display-result" style={styleDisplay}>
                        {newDis? newDis : (display? display : "0")}
                    </div>
                </div>
                <div className="cal-input">
                    <div className="cal-input-top">
                       {addSaction1}
                    </div>
                    <div className="cal-input-bottom">
                        <div className="cal-input-bottom-left">
                            {addSaction2}
                        </div>
                        <div className="cal-input-bottom-right">
                            <button onClick={calculation} className='btn btn-equal' >=</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
              <a href="https://www.linkedin.com/in/alamin1964/" target='_blank'>Concept & build by MD Alamin</a>
            </div>
        </div>
    )
}