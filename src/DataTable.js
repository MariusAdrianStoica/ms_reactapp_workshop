import React, { useEffect, useState } from 'react';
import Student from './Student';


const DataTable = () => {

    const [studentsList, setStudentsList] = useState([]);
    useEffect(()=>{
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
            },
            { id: 4, 
                firstname: "Test",
                lastname: "Testsson",
                age: 50,
                birthday: "2004-04-04",
                country: "TestLand",
                city: "TestCity"
                }];
            setStudentsList(initialState);

    }, []);

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
        return(  
            <button type='button' className="btn btn-primary">Details</button>
        );
        
    }

    const TableRow = (props)=>{
        return(
            <tbody> 
                {
                    studentsList.map(student =>{
                        return <tr>
                            <td>{student.id}</td>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.age}</td>
                            <td><TableAction/></td>
                        </tr>
                    })
                }
            </tbody>  
            
        );
    }

    return (
        <div className='container'>
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