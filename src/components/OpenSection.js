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
      <h1 className="major oraqle" style={{paddingBottom: 0, lineHeight: 1}}>{title}</h1>
      {imgSrc && <span className="image main">
        <img src={imgSrc} alt=""/>
      </span>}
      {children}
      {closeButton}
    </article>
  )
}
