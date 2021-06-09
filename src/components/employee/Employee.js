import React from 'react';


function Employee ({emp,changeState}) {
    const styles={
        backgroundColor:"gray",
        padding:"10px",
        margin:"10px",
        border:"1px solid black",
        color:"white"
    }
    return(
        <div style={styles} onClick={(e)=>changeState()}>
            <p>jobTitleName : {emp.jobTitleName}</p>
            <p>firstName : {emp.firstName}</p>
            <p>lastName : {emp.lastName}</p>
            <p>preferredFullName : {emp.preferredFullName}</p>
            <p>employeeCode : {emp.employeeCode}</p>
            <p>region : {emp.region}</p>
            <p>phoneNumber : {emp.phoneNumber}</p>
            <p>emailAddress : {emp.emailAddress}</p>
  
        </div>
    )
}

export default Employee;
