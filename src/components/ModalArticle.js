import React from 'react'

export const ModalArticle = ({
  id,
  isActive,
  hasTimeout,
  imgSrc,
  closeComponent,
  children,
}) => (
  <article
    className={`${isActive ? 'active' : ''} ${hasTimeout ? 'timeout' : ''}`}
    style={{ display: 'none' }}
  >
    <h2 className="major">{id}</h2>
    <span className="image main">
      <img src={imgSrc} alt="" />
    </span>
    {children}
    <closeComponent />
  </article>
)
