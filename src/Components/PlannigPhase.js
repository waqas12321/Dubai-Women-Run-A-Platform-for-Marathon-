import React from 'react'
import { useRoutesHook } from '../Context/RoutesContex';
import EventsData from './EventsData';
const PlannigPhase = () => {
    const {eventsData}=useRoutesHook();
  return (
    <div>
         <EventsData  value={eventsData[1]}/>
    </div>
  )
}

export default PlannigPhase