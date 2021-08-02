import React, { useState, useEffect } from "react";
import moment from 'moment'
import "./calendar.css";

const Calendar = () => {
    const [calendar, setCalender] = useState([]);
    const [value, setValue] = useState(moment());

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month");


    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const a = []
        while (day.isBefore(endDay, "day")) {
            a.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }
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