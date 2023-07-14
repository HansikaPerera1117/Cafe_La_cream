import React from "react";
import { Card , Rating} from 'semantic-ui-react'

export default function Product(props) {
  const extra = (
    <Rating icon='heart' defaultRating={3} maxRating={5} />
 )
  return (
    <Card
        image={props.imageSrc}
        header={props.header}
        meta={props.meta}
        description={props.description}
        extra={extra}
      />
  );
}
