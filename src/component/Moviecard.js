import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

const Moviecard = ({movie}) => {
  return (
    <div>
         <Card style={{ width: '18rem', height:"auto" }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title} </Card.Title>
        <Card.Text> {movie.description} </Card.Text>
        <Card.Text> {movie.rate} </Card.Text>
        <ReactStars count={5} edit={false} value={movie.rate} size={24} color2={'#ffd700'}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard