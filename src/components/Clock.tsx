import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

function CurrentDate() {
  /* ponytail: Simplified date retrieval and format using standard library toLocaleDateString */
  const getFormattedDate = (dateObj: Date) => 
    dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const [date, setDate] = useState(getFormattedDate(new Date()));

  useEffect(() => {
    // Only poll once a minute since date changes slowly
    const interval = setInterval(() => setDate(getFormattedDate(new Date())), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className=" flex items-center justify-center gap-4 text-2xl font-normal">
      <Calendar size={20} className="text-text"/>
      {date}
    </p>
  );
}

const CurrentTime = () => {
  /* ponytail: Simplified standard clock state */
  const getFormattedTime = (dateObj: Date) => 
    dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

  const [time, setTime] = useState(getFormattedTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setTime(getFormattedTime(new Date())), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className=" flex gap-4 text-2xl font-light text-text-hover">
      <strong>{time} </strong>
    </p>
  );
};

export default CurrentDate; 
export { CurrentTime };
