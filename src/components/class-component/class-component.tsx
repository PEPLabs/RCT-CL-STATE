import React from 'react';


interface MyProps {
    myStringProp: string;
}


class ClassComponent extends React.Component<MyProps>{

    /*
        You can create state in a class component by creating instance variables.
    */
    state = {
        customNumberState: 0,
        customStringState: "sample data",
        customBooleanState: true,
        andSoOn: "and so on..."
    };

    otherPossibleState = "You may add as much state as you'd like. This is a class, afterall."

    /* Here is an example of how you update and rerender state. */
    appendSringState = () =>{
        
        /*
            JUST updating the value of the state will NOT tell the component to rerender
            the view. To reflect the changes of the state to the view you need to use the
            setState functionality below.
        */
        const appendedStringState = this.state.customStringState + " classDemo";
        this.setState({customStringState: appendedStringState});
    }

    incrementNumberState = () =>{
        
        /*
            TODO: increment the customNumberState variable by 1, and rerender it to the vieew.
        */
        
    }

    render() {

        return (
            <React.Fragment>
                <h4>Class Display</h4>

                {/* Here is an example of how you access data from the state. */}
                <p>Here is the "customStringState" state data: {this.state.customStringState}</p>
                {/* Here is an example of how you update and rerender state. */}
                <button onClick={this.appendSringState}>Append " classDemo" to the component's string state</button>

                
                <div className="todo-container">
                    {/* TODO: alter the text below so that it properly displays the "customNumberState" data, similar to the text above. Then update the "incrementNumberState" method
                    above to rerender the state changes.*/}
                    <p>Here is the "customNumberState" state data: TODO(ALTER THIS TEXT)</p>

                    <button onClick={this.incrementNumberState}>Increase "customNumberState" by 1</button>
                </div>
            </React.Fragment>
        );
    }
}

export default ClassComponent;
