import React, { useState, useEffect } from "react";
import moment from 'moment'
import "./calendar.css";

const Calendar = () => {
    const [calendar, setCalender] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {

        setCalender(a);
    }, [value])

    return (
        <div className="calendar">
            {calendar.map((week =>
                <div>
                    {week.map((day =>
                        <div className="day" onClick={() => setValue(day)}>
                            <div className={value.isSame(day, "day") ? "selected" : ""}>
                            {day.format("D")}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    );
}

export default Calendar;