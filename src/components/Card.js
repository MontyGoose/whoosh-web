import React from 'react'
//import { Link } from 'gatsby'
//import Image from './Image'
import './Card.css'


export default class Card extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }


  render() {
    const { items, className } = this.props
    console.log('I was triggered during render')
    console.log(items)

    return (
      <div className={`cards ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div className="card">
              <figure class="card__thumb">
              <img src={item.featuredImage} class="card__image" />
              <figcaption class="card__caption">
              {item.title && <h2 className="card__title">{item.title}</h2>}
              {item.description && <p className="card__snippet">{item.description}</p>}
              <a href={item.canonicalLink} class="card__button">Read more</a>
              </figcaption>
              </figure>
            </div>
          ))}
      </div>
    )
  }
}
