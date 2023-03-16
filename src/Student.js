import React from 'react';

const Student = (props) => {

    const {id, firstname, lastname, age, birthdate, country, city} = props.data;

    return (
        

        <div>
        <table className='table table-light table-striped'>
        
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{age}</td>
                <button type='button' className="btn btn-primary">Details</button>  
            </tr>
        </tbody>
        
        </table>
        </div>
    );
};

export default Student;