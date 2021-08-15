import React from 'react'
import './TwitterCorner.css'

export default ({ url, style, className = '', color = '#151513' }) => (
  <a
    className={`TwitterCorner ${className}`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow us on Twitter"
    style={style}
  >

    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 250 250" 
      fill={color}
    >
      <path d="M249.8 250L0 .2V0h250v250h-.2z"/>
      <path 
        d="M230.09 41.82a37.77 37.77 0 0 1-10.85 3 19 19 0 0 0 8.31-10.45 37.82 37.82 0 0 1-12 4.58 18.91 18.91 0 0 0-32.19 17.23L166 91.49a37.91 37.91 0 0 1-23.46 8.09 38.42 38.42 0 0 1-4.51-.26 53.48 53.48 0 0 0 29 8.49c34.75 0 53.76-28.79 53.76-53.76q0-1.23-.06-2.44a38.39 38.39 0 0 0 9.36-9.79z"
        fill="currentColor" 
        className="bird-body"/>
      <path 
        d="M145.41 36.63a18.91 18.91 0 0 0 5.85 25.22 18.82 18.82 0 0 1-8.56-2.36v.24a18.91 18.91 0 0 0 15.16 18.53 18.93 18.93 0 0 1-8.53.32A18.91 18.91 0 0 0 167 91.7l17.38-35.33a53.64 53.64 0 0 1-38.97-19.74z"
        fill="currentColor" 
        className="bird-wing"/>
      </svg>
      </a>
      
)
