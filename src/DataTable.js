import React, { useEffect, useState } from 'react';

// Main Component
const DataTable = () => {

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
           
    // define state variables 
    const [studentsList, setStudentsList] = useState(initialState);
    //const [studentsList, setStudentsList] = useState([initialState]); -> in case we don't want to use useEffect()
    const[showDetails, setShowDetails] = useState(false);
    const [student, setStudent] = useState({
        id: 0, 
        firstname:"", 
        lastname:"", 
        age:"", 
        birthday:"", 
        country: "", 
        city: "",
     });
    
    
    

    // TableHeader Sub-Component
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
    };
    


    // TableAction Sub-Component
    const TableAction = (props)=> {
        
        const showDataHandler = () => {
            console.log("STUDENT:", student);
            setStudent(props.student);
            setShowDetails(true);
          };
        return(  
            <button type='button' className="btn btn-primary" onClick={showDataHandler}>Details</button>
            

        );
        
    }
    /*const showDetails = () => {
        return (
            
            setShowStudentDetails(true)
        )
    }

    const HideDetails = (e) => {
        return (
            setShowStudentDetails(false)
        )
    }
*/

    // TableRow Sub-Component
    const TableRow = (props)=>{

        if (!props.list && props.list.length === 0) {
            return (
              <tbody>
                <tr>
                  <td colSpan="5">Data not Found</td>
                </tr>
              </tbody>
            );
          } else {
        return(
            <tbody> 
                {
                    studentsList.map(student =>{
                        
                        const row = (
                            <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.age}</td>
                            <td><TableAction student={student}/></td>
                        </tr>
                        );
                        return row;
                    })
                }
            </tbody>  
            
            );
            }
                };

     // ShowStudentDetails Sub-Component
     const ShowStudentDetails = () => {

        return (
          <>
            {showDetails && (
              <div className="card">
                <div className="card-header bg-info text-white">
                  Student Information
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {student.country} {student.city}
                  </h5>
                  <p className="card-text">Id: {student.id} </p>
                  <p className="card-text">
                    Name: {student.firstname} {student.lastname}
                  </p>
                  <p className="card-text">BirthDate: {student.birthday} </p>
                </div>
                <div className="card-footer bg-dark">
                  <button type="button" className="btn btn-outline-info"
                    onClick={() => {
                      setStudent({});
                      setShowDetails(false);
                    }}>Hide</button>
                </div>
              </div>
            )}
          </>
        );
      };

    return (
        <div className='container'>
            <div>
                <h4> Student List</h4>
            </div>
               
        <table className ='table table-light table-striped'>
            <TableHeader/>
            <TableRow list ={studentsList}/>
        </table>

        <div className="w-50 mx-auto">
        <ShowStudentDetails />
      </div>

        
        </div>
    );
};


export default DataTable;
//to be calrified:

// <td><TableAction student={student}/></td> -128 -> it makes a connection betwen the button and info from the row
//if (!props.list && props.list.length == 0) { -> props.list is the studentslist in fact



/*
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
}*/