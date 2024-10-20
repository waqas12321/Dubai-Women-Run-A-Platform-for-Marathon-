import React from 'react'
import { useRoutesHook } from '../Context/RoutesContex';
import EventsData from './EventsData';
const EventSafetyManagment = () => {
  const {eventsData}=useRoutesHook();
  return (
    <div>
       <EventsData  value={eventsData[2]}/>
    </div>
  )
}

export default EventSafetyManagment