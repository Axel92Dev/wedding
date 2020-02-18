import React from 'react'

export const OpenSection = ({
                              title,
                              isActive,
                              hasTimeout,
                              imgSrc,
                              closeButton,
                              children,
                            }) => {
  return (
    <article
      className={`${isActive ? 'active' : ''} ${hasTimeout ? 'timeout' : ''}`}
      style={{ display: 'none' }}
    >
      <h2 className="major">{title}</h2>
      {imgSrc && <span className="image main">
        <img src={imgSrc} alt=""/>
      </span>}
      {children}
      {closeButton}
    </article>
  )
}
