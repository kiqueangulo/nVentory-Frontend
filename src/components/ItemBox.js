import React, { useState } from "react";

import "./ItemBox.css";


function ItemBox(props) {
    const shelf_divs = props.items;

    const [count,setCount] = useState(200)
    //Displays an array of itmes from a call to the  
    const displayItems = shelf_divs.map((division, index) => (
        
        <li key={index}>
             
            <div  className="itemBox">
                {/* <div className="itemQuantBox"> */}
                <button className="infoButton">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                         <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" fill= "#868686"/></svg>
                </button>
                {/* <button className="infoBackButton"></button> */}
                <textarea class="scrollableTextBox" name="itemName">
                    {division.shelf_div}
                </textarea>
                        
                <div className="quantField">
                <button className="minusButton" 
                        onClick={() =>{ if (count > 0){setCount(count - 1)}else{count=0} }}> - 
                    </button> 
                {/* <input value={item.qauntity} maxLength="5"></input> */}
                <textbox class="quantTextBox" name="itemQnt">
                        {count}       {/* Just to have a number */}
                    </textbox>
                    <button className="plusButton" 
                            onClick={() => setCount(count + 1)}> + </button>
                </div>
                {/* </div> */}
                {/* <div className="remove"> */}
                <button className="remove">
                   remove
                </button>
                {/* </div> */}
            </div>
        </li>
    ));

  return <div>{displayItems}</div>;
}

export default ItemBox;
