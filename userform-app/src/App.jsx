import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    city: '',
    address: '',
    id: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save the form data to MongoDB Atlas using Axios and Mongoose
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />

          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />

          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />

          <label htmlFor="id">ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default App
