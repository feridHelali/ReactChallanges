import {React,Fragment} from "react";


function RightChild({modifyName}){
    return(
        <Fragment>
           <input type="text" onChange={(e)=>modifyName(e.target.value)}/>
        </Fragment>
    );
}

export default RightChild;