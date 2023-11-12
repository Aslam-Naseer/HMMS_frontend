import React, { useState } from 'react'
import Navbar from '../Navbar'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Mess.css'

function Mess() {

    const [date, setDate] = useState(new Date())
    const [date1, setDate1] = useState(new Date())
    const [mess, setMess] = useState({
        head: "You are MESSIN Now",
        mode: "MESSOUT ",
        bool: "",
    })
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const messin = () => {
        setMess({

            mode: "MESSIN",
            bool: false
        })
    }
    const messout = () => {
        setMess({

            mode: "MESSOUT",
            bool: true
        })
    }
    const submit = () => {
        setMessage("");
        if (mess.bool) {
            setMess({
                head: "You are MESSOUT Now",
                bool: false
            })
        }
        else {
            setMess({
                head: "You are MESSIN Now",
                bool: true
            })
        }
    }

    return (
        <div>
            <Navbar />
            <div className='inout' >
                <h2>{mess.head}</h2>
                <div className='req'>
                    <button className='inreq' onClick={messout} >MESSOUT</button>
                    <button className='outreq' onClick={messin}>MESSIN</button>
                </div>

                <div className='reqbox'>
                    <h2>{mess.mode}</h2>
                    <p>NB:Minimum three days and maximum five days are allowed for
                        Messout.If you are not taking Messin after the period of
                        Messout,You will automatically become Messin.
                    </p>
                    <div className='calender1'>
                        <h3>FROM:</h3>
                        <Datepicker className='from' selected={date} onChange={date => setDate(date)} required />

                    </div>
                    <div className='calender2'>
                        <h3>TO:</h3>
                        <Datepicker format='dd-MM-yyyy' className='to' selected={date1} onChange={date1 => setDate1(date1)} required />

                    </div >

                    <div className='days'>
                        <h5>Total Days:</h5>
                        <input type="text" placeholder='No.of Days' value={message} onChange={handleChange} required />
                    </div>
                    <div className='submit'>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className='hist'>
            <h3>Messin and Messout History</h3>
            <div className='history'>
                <h5>SL.NO</h5>
                <h5>MESSOUT DATE</h5>
                <h5>MESSIN DATE</h5>
                <h5>NO.OF DAYS</h5>
            </div>
            </div>
        </div>
    )
}

export default Mess
