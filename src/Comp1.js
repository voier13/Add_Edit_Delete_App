import React from "react";

class Comp1 extends React.Component{

    

    handler = () =>{
        
    }

    render(){
        return(
            <>
                <h1>
                    State
                </h1>
                <div>
                    <button onClick = {this.handler}>This button change</button>
                </div>
            </>
        )
    }
}

export default Comp1;