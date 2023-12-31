import React from "react";
import { Card , Rating} from 'semantic-ui-react'
import './product.scss'

export default function Product(props) {
  const extra = (
    <Rating icon='heart' defaultRating={3} maxRating={5} />
  )

  return (
    <Card
        className="p-cards shadow"
        key={props.id}
        image={props.imageSrc}
        header={props.header}
        meta={props.meta}
        description={props.description}
        extra={extra}
      />
  );
}
