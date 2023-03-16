import React, { useEffect, useState } from 'react';
import Student from './Student';

const initialState = [ 
    { id: 1, 
    firstname: "Mehrdad",
    lastname: "Javan",
    age: 32,
    birthday: "2001-01-01",
    country: "Sverige",
    city: "Växjö"
    },
    { id: 2, 
    firstname: "Fredrik",
    lastname: "Odin",
    age: 40,
    birthday: "2002-02-02",
    country: "Norge",
    city: "Oslo"
    },
    { id: 3, 
    firstname: "Marius",
    lastname: "Stoica",
    age: 42,
    birthday: "2003-03-03",
    country: "Rumänien",
    city: "Cluj-Napoca"
    }];

const TableHeader= ()=> {
    return(
        <thead>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>   
    )
}
const TableAction = ()=> {
    //defining another component inside the row

    return(
        
        <button type='button' className="btn btn-outline-primary">Details</button>
    );
    
}

const TableRow = ()=>{

    return(
        <tbody>
            
                
                    {
                        initialState.map(student => {
                            return <Student data = {
                                student} />
                        })

                    }
                
        
        </tbody>  
            
            
            
        

    );
}
        
        

const DataTable = () => {

   

    return (
        <div className='test'>
            <div>
                <h4> Student List</h4>
            </div>
              
        <table className ='table table-light table-striped'>
            <TableHeader/>
            <TableRow/>
        </table>
        </div>
    );
};

export default DataTable;