import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import { OpenSection } from './OpenSection'
import { sections } from './sections'

class Main extends React.Component {
  render() {
    const Close = () => (
      <div className="close" onClick={() => this.props.onCloseArticle()} />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {sections.map((section) => (
          <OpenSection
            id={section.id}
            title={section.title}
            isActive={this.props.article === section.id}
            hasTimeout={this.props.articleTimeout}
            imgSrc={section.image}
            closeButton={<Close />}
          >
            {section.body}
          </OpenSection>
        ))}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
