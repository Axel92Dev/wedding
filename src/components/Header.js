import React from 'react'
import PropTypes from 'prop-types'
import { sections } from './sections'
import plane from '../images/plane.svg'
import { CountdownTimer } from './CountdownTimer'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="icon" src={plane}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1 className="oraqle">Giulia & Alessandro</h1>
        <h1 className="oraqle">3 Settembre 2020</h1>
        <CountdownTimer date={new Date("Sep 03, 2020 11:00:00")} />
      </div>
    </div>
    <nav>
      <ul className="row">
        {sections.map(section => (
          <li className="column">
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
