import './App.css';
import React, {useState} from 'react'

const Customer = ({customer}) => {

const [näytäEnemmän, setNäytäEnemmän] = useState(false)

return (
    <>
      <h3 onMouseOver={() => setNäytäEnemmän(!näytäEnemmän)}
          onMouseLeave={() => setNäytäEnemmän(!näytäEnemmän)}
      >
        {customer.companyName} <button>Delete</button><button>Edit</button>
      </h3>

      {näytäEnemmän && <div className="customerWindow">
      <table>
        <thead>
          <tr>
            <th>Contact person: </th>
            <th>Phone:</th>
            <th>Address:</th>
            <th>City: </th>
            <th>Country: </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{customer.contactName}{' | '}</td>
          <td>{customer.phone}</td>
          <td>{customer.address}</td>
          <td>{customer.city}{' | '}</td>
          <td>{customer.country}</td>
        </tr>
        </tbody>
      </table></div>}
    </>
  );
}

export default Customer;
