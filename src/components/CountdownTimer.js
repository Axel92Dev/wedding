import React from 'react'
import Countdown from 'react-countdown'
import '../assets/css/countdown.css'

export const CountdownTimer = ({ date }) => {
  return <Countdown date={date}
                    renderer={({ days, hours, minutes, seconds, completed }) => {
                      if (completed) {
                        return <p>Grazie di tutto!</p>
                      } else {
                        // Render a countdown
                        return <div className="clock-container">
                          <div className="clock-col">
                            <div className="clock-day clock-timer">
                              {days}
                            </div>
                            <span className="clock-label">
                              Giorni
                            </span>
                          </div>
                          <div className="clock-col">
                            <div className="clock-hours clock-timer">
                              {hours}
                            </div>
                            <span className="clock-label">
                              Ore
                            </span>
                          </div>
                          <div className="clock-col">
                            <div className="clock-minutes clock-timer">
                              {minutes}
                            </div>
                            <span className="clock-label">
                              Minuti
                            </span>
                          </div>
                          <div className="clock-col">
                            <div className="clock-seconds clock-timer">
                              {seconds}
                            </div>
                            <span className="clock-label">
                              Secondi
                            </span>
                          </div>
                        </div>
                      }
                    }}/>
};
