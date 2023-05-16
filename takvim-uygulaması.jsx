import React, { useState } from 'react';

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate;
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonthDate;
    });
  };

  const renderCalendar = () => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendarDays = [];

    // Boş günleri eklemek için döngü
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    // Ayın günlerini eklemek için döngü
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(<div className="calendar-day" key={`day-${i}`}>{i}</div>);
    }

    return calendarDays;
  };

  return (
    <div className="calendar-app">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Önceki Ay</button>
        <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={handleNextMonth}>Sonraki Ay</button>
      </div>
      <div className="calendar">
        <div className="calendar-days">
          <div className="calendar-day">Pzt</div>
          <div className="calendar-day">Sal</div>
          <div className="calendar-day">Çar</div>
          <div className="calendar-day">Per</div>
          <div className="calendar-day">Cum</div>
          <div className="calendar-day">Cmt</div>
          <div className="calendar-day">Paz</div>
        </div>
        <div className="calendar-dates">
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
