import React from 'react'
import Card from 'react-bootstrap/Card'

function PartyMember({image, name, description, player}) {
  return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt={name} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
      <hr />
      Played By {player}
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default PartyMember;
