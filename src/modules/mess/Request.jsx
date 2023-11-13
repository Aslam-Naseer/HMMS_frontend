import React from 'react'
import {useState} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Mess1.css'
const Request = ({ messMode }) => {
    const [date, setDate] = useState(new Date());
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
  
    const submit = () => {
      setMessage('');
    };

  return (
    <div className='reqbox'>
      
                    <h2>{messMode === 'MESSOUT' ? 'MESSOUT' : 'MESSIN'}</h2>
                    <p>NB:Please read the Guidelines before you submit the request
                    </p>
                    <div className='calender1'>
                        <h3>FROM:</h3>
                        <Datepicker className='from' selected={date} onChange={date => setDate(date)} required />

                    </div>
                    
                    <div className='days'>
                        <h5>Total Days:</h5>
                        <input type="text" placeholder='No.of Days' value={message} onChange={handleChange} required />
                    </div>
                    <div className='submit'>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                
    </div>
  )
}

export default Request
