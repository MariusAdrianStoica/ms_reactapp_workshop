import React, { useEffect, useState } from 'react';

const DataTable = () => {

    const [student, setStudent] = useState({id: "", firstname:"", lastname:"", age:"", birtthday:"", country: "", city: "" });
    const[showStudentDetails, setShowStudentDetails] = useState(false);

    const [studentsList, setStudentsList] = useState([]);
    useEffect(()=>{
        const students = [ 
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
            setStudentsList(students);

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
    


    const TableAction = (props)=> {
        // <button type='button' className="btn btn-primary">Hide</button>
        return(  
            <button type='button' className="btn btn-primary" onClick={showDetails}>Details</button>
            

        );
        
    }
    const showDetails = (e) => {
        return (
            
                
                

            setShowStudentDetails(true)
        )
    }

    const HideDetails = (e) => {
        return (
            
            setShowStudentDetails(false)
        )
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
                            <td><TableAction /></td>
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

        {showStudentDetails && (
            <div className='card' >
                <div className='card-header bg-info text-white'>Student Information</div>
                <div className='card-body'>
                    <div className='bm-3'>
                        <h5><strong>country </strong><strong>city</strong></h5>
                        <h6>Id: </h6>
                        <h6>Name: {student.firstname}</h6>
                        <h6>Birthdate: </h6>
                        <button type='button' className="btn btn-outline-primary" onClick={HideDetails}>Hide</button>
                    </div>
                </div>
            
            </div>
        )
        }
        </div>
    );
};



export default DataTable;