import React from 'react'
import { Form } from 'react-bootstrap'

const Filtermovies = ({inputSearch,setInputSearch}) => {
  return (
    <div>
          <Form style={{display:"flex",justifyContent:"center"}}>
        <Form.Group className="mb-3">
          <Form.Control value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} id="disabledTextInput" placeholder="search" />
        </Form.Group>
          </Form>

    </div>
  )
}

export default Filtermovies