import {React,Fragment,useState} from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";


function Wrapper(){
    const [name, setName] = useState("React")

    function updateName(value){
        setName(value);
    }

    return(
        <Fragment>
            <h1>{name}</h1>
           <LeftChild name={name}/>
           <RightChild modifyName={updateName}  />
        </Fragment>
    );
}

export default Wrapper;