import React, { useState } from 'react';


interface MyProps {
    myStringProp: string;
}


const FunctionComponent: React.FC<MyProps> = (props: MyProps) => {

   /* 
    useState() is a way to give function components state, just like class components.
    You can name your variable whatever you like, BUT, the useState must be in the same order EVERY
    time your component is called; this means you can't have any useState() calls in if blocks or loops, etc.
    
    Syntax Format:
        const [ variableNameForSomeState ,  variableSetterAndRerender] = useState(initialVariableValue);
   */ 
    
   const [customStringState, setCustomStringState] = useState("sample data");

   //TODO: add state for a variable called "customNumberState" initialized at 0.

    return (
        <React.Fragment>
            <h4>Function Display</h4>

            {/* Here is an example displaying state data. */}
                <p>Here is the "customStringState" state data: {customStringState}</p>
                {/* Here is an example of how you update and rerender state. */}
                <button onClick={()=>{setCustomStringState(customStringState + " functionDemo")}}>Append " functionDemo" to the component's string state</button>

            <div className="todo-container">
                {/* TODO: alter the text below so that it properly displays the "customNumberState" data, similar to the text above. Implement the 
                funtionality for the button below so it increments the state by 1 each time.*/}
                <p>Here is the "customNumberState" state data: TODO(ALTER THIS TEXT)</p>

                <button onClick={()=>{}}>Increase "customNumberState" by 1</button>
            </div>

        </React.Fragment>
    );
}

export default FunctionComponent;