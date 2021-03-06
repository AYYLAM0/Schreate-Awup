import React, { useState, useEffect } from "react";
import moment from 'moment'

import buildCalendar from "./build";

const Calendar = () => {
    const [calendar, setCalender] = useState([]);
    const [value, setValue] = useState(moment());


    useEffect(() => {
        setCalender(buildCalendar(value));
    }, [value])

    const isSelected = (day) => {
        return value.isSame(day, "day")
    }

    const beforeToday = (day) => {
        return day.isBefore(new Date(), "day")
    }

    const isToday = (day) => {
        return day.isSame(new Date(), "day")
    }

    const dayStyles = (day) => {
        if (beforeToday(day)) return "before"
        if (isSelected(day)) return "selected"
        if (isToday(day)) return "today"
        return ""
    }

    return (
        <div className="calendar">
            {calendar.map((week =>
                <div>
                    {week.map((day =>
                        <div className="day" onClick={() => setValue(day)}>
                            <div className={dayStyles(day)}>
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