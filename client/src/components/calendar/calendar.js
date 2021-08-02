import React, {useState} from "react";
import moment from 'moment'
import "./calender.css";

const Calendar = () => {
    const [calendar, setCalender] = useState([]);
    const [value, setValue] = useState(moment())

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month");
    const day = startDay.clone().subtract(1, "day");
    
    const a = []
    while (day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }
    setCalender(a);
    return (
        <div className="calendar">
            {calendar.map((week => 
            <div>
                    {week.map((day => 
                    <div className="day">{day.format("D")}</div>
                    ))}
                </div>
                ))}
        </div>

    );
}

export default Calendar;