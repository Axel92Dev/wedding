import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown'
import { sections } from './sections'
import plane from '../images/plane.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="icon" src={plane}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>18 Giugno 2020</h1>
        {/*<CountdownTimer startTimeInSeconds={new Date("Jun 18, 2020 11:00:00").getTime()} />*/}
        <Countdown date={new Date('Jun 18, 2020 11:00:00')}
                   renderer={({ days, hours, minutes, seconds, completed }) => {
                     if (completed) {
                       return <p>Grazie di tutto!</p>
                     } else {
                       // Render a countdown
                       return <p>{days} giorni, {hours} ore {minutes} minuti {seconds} secondi</p>
                     }
                   }}/>
      </div>
    </div>
    <nav>
      <ul>
        {sections.map(section => (
          <li>
            <a
              href={null}
              onClick={() => {
                props.onOpenArticle(section.id)
              }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
