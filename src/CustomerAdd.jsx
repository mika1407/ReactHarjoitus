import React, { useState } from 'react'
import './App.css'
import CustomerService from './services/customer'

const CustomerAdd = ({ setLisäystila, setCustomers, customers, setMessage, setShowMessage, setIsPositive }) => {

    // State määritykset

    const [newCustomerId, setNewCustomerId] = useState('')
    const [newCompanyName, setNewCompanyName] = useState('')
    const [newContactName, setNewContactName] = useState('')
    const [newContactTitle, setNewContactTitle] = useState('')

    const [newCountry, setNewCountry] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newCity, setNewCity] = useState('')

    const [newPostalCode, setNewPostalCode] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newFax, setNewFax] = useState('')

    // Lomakkeen onSubmit tapahtumankäsittelijä

    const submitCustomer = (event) => {
        event.preventDefault()
        var newCustomer = {
            customerId: newCustomerId.toUpperCase(),
            companyName: newCompanyName,
            contactName: newContactName,
            contactTitle: newContactTitle,
            country: newCountry,
            address: newAddress,
            city: newCity,
            postalCode: newPostalCode,
            phone: newPhone,
            fax: newFax
        }

        try {
            CustomerService // Käytetään services/customer tiedoston..
                .create(newCustomer) // ..create metodia back-end http pyyntöön
                .then(response => console.log(response.data)) 
                  setMessage(`Lisätty ${newCustomer.companyName}`)
                  setIsPositive(true)
                  setShowMessage(true)
                  setCustomers(customers.concat(newCustomer))

                  setTimeout(() => {
                    setShowMessage(false)
                  },
                  4000
                  )      

        }
        catch (e) {
            setMessage(`Tapahtui virhe: ${e}`)
            setIsPositive(false)
            setShowMessage(true)

            setTimeout(() => {
              setShowMessage(false)
            },
            4000
            )
        }
        finally {

            setLisäystila(false)

        }
    }

    // Komponentti palauttaa käyttöliittymään form elementin

    return (
        <form onSubmit={submitCustomer}>

            {/* inputien tapahtumankäsittelijät on funktiota, jotka saa parametrikseen
            input elementin target tiedon. Funktiot kutsuvat set state hookia parametrina target.value */}
            <div>
                <input type="text" value={newCustomerId} placeholder="ID of 5 capital letters" maxLength="5"
                    onChange={({ target }) => setNewCustomerId(target.value)} required/>
            </div>
            <div>
                <input type="text" value={newCompanyName} placeholder="Company name"
                    onChange={({ target }) => setNewCompanyName(target.value)} required/>
            </div>
            <div>
                <input type="text" value={newContactName} placeholder="Contact name"
                    onChange={({ target }) => setNewContactName(target.value)} />
            </div>
            <div>
                <input type="text" value={newContactTitle} placeholder="Contact title"
                    onChange={({ target }) => setNewContactTitle(target.value)} />
            </div>
            <div>
                <input type="text" value={newCountry} placeholder="Country"
                    onChange={({ target }) => setNewCountry(target.value)} />
            </div>
            <div>
                <input type="text" value={newAddress} placeholder="Address"
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <input type="text" value={newCity} placeholder="City"
                    onChange={({ target }) => setNewCity(target.value)} />
            </div>
            <div>
                <input type="text" value={newPostalCode} placeholder="Postal code"
                    onChange={({ target }) => setNewPostalCode(target.value)} />
            </div>
            <div>
                <input type="text" value={newPhone} placeholder="Phone"
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <input type="text" value={newFax} placeholder="Fax"
                    onChange={({ target }) => setNewFax(target.value)} />
            </div>

            <button type="submit" >Create</button>        {/*style={{ background: 'green' }} hakee värin App.css*/}

            <button onClick={() => setLisäystila(false)} style={{ background: 'red' }}>
                Cancel</button>
        </form>
    )
}

export default CustomerAdd