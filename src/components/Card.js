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
      <div className={`Card ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div className="Card--Content">
              {item.title && <h3 className="Card--Title">{item.title}</h3>}
              {item.description && <div className="Card--Text">{item.description}</div>}
            </div>
          ))}
      </div>
    )
  }
}

// const Card = ({
//   featuredImage,
//   title,
//   excerpt,
//   slug,
//   categories = [],
//   className = '',
//   ...props
// }) => (
//   <Link to={slug} className={`Card ${className}`}>
//     {featuredImage && (
//       <div className="Card--Image relative">
//         <Image background src={featuredImage} alt={title} />
//       </div>
//     )}
//     <div className="Card--Content">
//       {title && <h3 className="Card--Title">{title}</h3>}
//       <div className="Card--Category">
//         {categories && categories.map(cat => cat.category).join(', ')}
//       </div>
//       {excerpt && <div className="Card--Excerpt">{excerpt}</div>}
//     </div>
//   </Link>
// )

//export default Card
