import React from 'react'
import { useRoutesHook } from '../Context/RoutesContex';
import EventsData from './EventsData';

const EventSafetyPolicy = () => {
    const {eventsData}=useRoutesHook();
  return (
    <div>

         
    <EventsData  value={eventsData[0]}/>
    </div>
  )
}

export default EventSafetyPolicy