import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone,setSelectedPhone]=useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/phones');
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePhoneClick = async (phoneId) => {
    try {
      const response = await axios.get(`http://localhost:3001/phones/${phoneId}`);
      setSelectedPhone(response.data);
    } catch (error) {
      console.error('Error fetching phone details:', error);
      setError('Error fetching phone details. Please try again later.');
    }
  };

  return (
    <>
    <div className="row">
    <div className="container">
    {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

     {phones.map((phone) => (
        <div  className="card col" key={phone.id} onClick={() => handlePhoneClick(phone.id)}>
          <p>{phone.name}</p>
          <img src={`/images/${phone.imageFileName}`} alt={phone.name}/>
          <p>Price: <strong>{phone.price}</strong> Euros </p>
          
        </div>
      ))}
     </div>
      </div>
      <div className="row">
    <div className="container">
      {selectedPhone && (
        <div className='detail-section'>
         
          <ul>
          <li><h2>{selectedPhone.name}</h2></li>
          <li>Color: {selectedPhone.color}</li>
          <li>Description: {selectedPhone.description}</li>
          <li>Manufacturer: {selectedPhone.manufacturer}</li>
          <li>Price: {selectedPhone.price}</li>
          <li>Processor: {selectedPhone.processor}</li>
          <li>RAM: {selectedPhone.ram}</li>
          <li>Screen: {selectedPhone.screen}</li>
          </ul>
        </div>
      )}
      </div>
      </div>
      </> 
  );
}

export default App;
