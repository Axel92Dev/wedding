import React from 'react'
import PropTypes from 'prop-types'
import { sections } from './sections'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-plane"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>18 Giugno 2020</h1>
        <p>Mettiamo un contatore?</p>
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
