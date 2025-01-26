import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const CalendarApp = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [stopwatchTime, setStopwatchTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  // Update real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Stopwatch functionality
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setStopwatchTime((prev) => prev + 10); // Increase by 10 ms
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Format time for stopwatch
  const formatTime = (time) => {
    const milliseconds = (`0${Math.floor((time % 1000) / 10)}`).slice(-2);
    const seconds = (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
    const minutes = (`0${Math.floor((time / 60000) % 60)}`).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white font-sans p-4">
      <h1 className="text-3xl font-bold mb-6">Calendar, Clock & Stopwatch</h1>

      {/* Real-Time Clock */}
      <div className="bg-white text-black rounded-lg shadow-lg p-4 mb-6 w-full max-w-md flex items-center justify-center">
        <h2 className="text-xl font-bold">{currentTime.format("hh:mm:ss A")}</h2>
      </div>

      {/* Calendar Section */}
      <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-8 w-full max-w-lg">
        <h2 className="text-lg font-bold mb-4 text-center">{currentDate.format("MMMM YYYY")}</h2>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-medium text-sm">
              {day}
            </div>
          ))}
          {Array.from({ length: currentDate.startOf("month").day() }, (_, i) => (
            <div key={`empty-${i}`} className="h-8" />
          ))}
          {Array.from({ length: currentDate.daysInMonth() }, (_, i) => (
            <div
              key={i + 1}
              className={`h-8 w-8 flex items-center justify-center rounded-full ${
                currentDate.date() === i + 1
                  ? "bg-blue-500 text-white font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Stopwatch Section */}
      <div className="bg-white text-black rounded-lg shadow-lg p-4 w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4 text-center">Stopwatch</h2>
        <div className="flex items-center justify-center text-xl font-mono mb-4">
          {formatTime(stopwatchTime)}
        </div>
        <div className="flex justify-center gap-2">
          {!isRunning ? (
            <button
              onClick={() => setIsRunning(true)}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-lg"
            >
              Pause
            </button>
          )}
          <button
            onClick={() => {
              setStopwatchTime(0);
              setIsRunning(false);
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
