import React , {Fragment, useState,useEffect} from 'react';
import Employee from './Employee';
import getAllEmployees from "./employee-service";


function EmployeeList () {
    const [employeeList, setEmployeeList] = useState([]);
    const [state, setState] = useState(0);

    function changeState(){
        setState(state+1);
    }
    
     useEffect(() => {
         getAllEmployees()
         .then(res=>res.json())
         .then(response=>setEmployeeList(response));

        return ()=>{
            //cleanup
        }
    }, [state] );
    
    return(
        <Fragment>
            <h1>Employee List  Updated: {state }</h1>
            {employeeList.map((employee) => <Employee key={employee.id} emp = {employee} changeState={changeState}/>)}
        </Fragment>
    )
}


export default EmployeeList;
