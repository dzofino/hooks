import React, { useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { moviesData } from '../Data';

const Addmovie = ({add}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [rate,setRate] = useState(0)
  const [posterUrl,setPosterUrl] = useState("")

  const handletitle=(e)=>{
    setTitle(e.target.value)
  }
  const handledescription=(e)=>{
    setDescription(e.target.value)
  }
  const handlerate=(e)=>{
    setRate(e.target.value)
  }
  const handleposturl=(e)=>{
    setPosterUrl(e.target.value)
  }
  const handleAdd=()=>{
    let newMovie={title,description,rate,posterUrl}
    add(newMovie)
    handleClose()
  }

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
         <Button variant="primary" onClick={() => setShow(true)}>
       add movies
      </Button>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD MOVIES
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row style={{display:"flex", justifyContent:"center", margin:"5%"}}>
            <Col xs={12} md={8}>
            <FormControl onChange={handletitle} placeholder='enter the movie titlename'/>
            </Col>
            <Col style={{display:"flex", margin:"5%"}} xs={8} md={6}>
            <FormControl onChange={handlerate} placeholder='enter the rate'/>
            </Col>
          </Row>

          <Row style={{display:"flex", justifyContent:"center", margin:"5%"}}>
            <Col xs={18} md={8}>
              <FormControl onChange={handledescription} placeholder='enter the movie description'/>
            </Col>

            <Col style={{display:"flex", justifyContent:"center", margin:"5%"}} xs={8} md={12}>
            <FormControl onChange={handleposturl} placeholder='enter the link'/>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> handleAdd()}>Addmovie</Button>
      </Modal.Footer>
    </Modal>

    </div>
  )
}

export default Addmovie