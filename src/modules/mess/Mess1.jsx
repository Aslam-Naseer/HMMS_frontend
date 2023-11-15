import React, { useState } from 'react'
import { FaRegStickyNote } from "react-icons/fa";
import './Mess1.css'
import Request from './Request'
function Mess1() {

    
   
    const [mess, setMess] = useState({
       
        mode: "MESSIN ",
        bool: "",
        
    })
    const [open, setOpen] = useState(false)
    const [guide, setGuide] = useState(false)
    const messin = () => {
        setMess({
            
            mode: "MESSIN",
            bool: false,

        })
        setOpen((open)=>!open)
    }
    const messout = () => {
        setMess({
           
            mode: "MESSOUT",
            bool: true,
            
        })
        setOpen((open)=>!open)
    }
    const guideline = () => {
       setGuide((guide)=>!guide)
    }

    

    return (
        <div>
           
            <div className='inout' >
                <h2>You are {mess.mode} Now</h2>
                <h4>Remainig MessOut :</h4>
                <div className='req'>
                    <button className='inreq' onClick={messout} >MESSOUT</button>
                    <button className='outreq' onClick={messin}>MESSIN</button>
                    <FaRegStickyNote className='guide-icon' onClick={guideline}/>
                    {open && <Request messMode={mess.mode}/>}

                </div>
            </div>
            {guide &&
            <div className='guideline'>
                <h3>Guidelines</h3>
                <list>
                    <li>Messout should be taken atleast two days before the date</li>
                    <li>15 days of attendence is compulsory for every month</li>
                    <li>Minimum 3 days and maximum 5 days are allowed for Messout</li>
                    <li>If you are not taking Messin after the period of Messout,you will be automatically Messin</li>
                    
                </list>
            </div>
            }
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

export default Mess1
