import axios from 'axios'
import React, { useEffect, } from 'react'

interface SerchFiledsProps {
    city:string;
    day:string;
    weather:string;
}

const Home = () => {
    const [text,setText] = React.useState('')
    const [locationList, setLocationList]= React.useState({})
    const SerchFileds =[
        {
            city:'amman',
            day:'Sunday',
            weather:'Smoke'
        },
        {
            city:'amman',
            day:'Sunday',
            weather:'Rain'
        },
    ]

    useEffect(()=>{
        axios.get('https://wtm-sample-apis.staging.wtmsrv.com/api/weather-api/weather/amman')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])
  return (
    <>
    <input type="text" placeholder='location' value={text} onChange={e=>setText(e.target.value)} />
    <button>Search</button>
    {/* <div className='body'>
        {locationList?.length>0 && locationList?.map(location =>{
            return(
                <div className='body'>
                    <h3>{location.city}</h3>
                    <h4>{location.day}</h4>
                    <p>{location.weather}</p>
                </div>
            )
        }) }
    </div> */}
    </>
  )
}

export default Home