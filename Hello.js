import React from 'react';
import Button from 'react-bootstrap/Button'

export default ({ name }) => {
  const testButton =(e) => {
      e.preventDefault();
    alert('here');
  }
   
  return (
    <>

 <div className="p-3">
 <Button variant="primary" className="m-2">Primary</Button>{' '}
  <Button variant="secondary" className="m-2">Secondary</Button>{' '}
  <Button variant="success" className="m-2">Success</Button>{' '}
  <Button variant="warning" className="m-2">Warning</Button>{' '}
  <Button variant="danger" className="m-2">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light" className="m-2">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link" className="m-2">Link</Button>
</div>

 <div className="p-3">
 <Button variant="outline-primary" className="m-2">Primary</Button>{' '}
  <Button variant="outline-secondary" className="m-2">Secondary</Button>{' '}
  <Button variant="outline-success" className="m-2">Success</Button>{' '}
  <Button variant="outline-warning" className="m-2">Warning</Button>{' '}
  <Button variant="outline-danger" className="m-2">Danger</Button>{' '}
  <Button variant="outline-info" className="m-2">Info</Button>{' '}
  <Button variant="outline-light" className="m-2">Light</Button>{' '}
  <Button variant="outline-dark" className="m-2">Dark</Button>
</div>

      <div className="p-3"> 
        <Button  className=" mr-4 " variant="success" onClick={testButton} > Regular Button</Button> 

        <Button  size="lg" className=" mr-4" variant="success"  >Large Button</Button> 
</div>

    <div className="p-3"> 
           <Button size="sm" className=" mt-4 " variant="link">Regular Link</Button>


           <Button  className=" mt-4 " variant="link">Small  Link</Button>
       </div>
</>
  )
}