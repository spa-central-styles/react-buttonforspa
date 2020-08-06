import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export default ({ name }) => {
  const testButton =(e) => {
      e.preventDefault();
    alert('here');
  }
    const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
<h3> Buttons, Badges and Pills </h3>

 <div className="p-3">
  <h5> Default Buttons </h5>
  <Button variant="primary" className="m-2">Primary</Button>{' '}
  <Button variant="success" className="m-2">Success</Button>{' '}
  <Button variant="danger" className="m-2">Danger</Button>
  <Button variant="warning" className="m-2">Warning</Button>{' '}
  <Button variant="info">Info</Button>{' '}
  <Button variant="secondary" className="m-2">Secondary</Button>{' '}
  <Button variant="light" className="m-2">Light</Button>
   <Button variant="White">White</Button>{' '}
  <Button variant="link" className="m-2">Link Button</Button>
</div>

<div className="p-3">
  <Button variant="primary" className="m-2" disabled={isDisabled}>Primary</Button>{''}
  <Button variant="success" className="m-2" disabled>Success</Button>{' '}
  <Button variant="danger" className="m-2" disabled>Danger</Button>
  <Button variant="warning" className="m-2" disabled>Warning</Button>{' '}
  <Button variant="info" disabled>Info</Button>{' '}
  <Button variant="secondary" className="m-2" disabled>Secondary</Button>{' '}
  <Button variant="light" className="m-2" disabled>Light</Button>
   <Button variant="White" disabled>White</Button>{' '}
  <Button variant="link" className="m-2" disabled>Link Button</Button>
</div>

 <div className="p-3">
 <h5>Outline Buttons</h5>
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
 
 <Button variant="outline-primary" className="m-2" disabled>Primary</Button>{' '}
  <Button variant="outline-secondary" className="m-2" disabled>Secondary</Button>{' '}
  <Button variant="outline-success" className="m-2" disabled>Success</Button>{' '}
  <Button variant="outline-warning" className="m-2" disabled>Warning</Button>{' '}
  <Button variant="outline-danger" className="m-2" disabled>Danger</Button>{' '}
  <Button variant="outline-info" className="m-2" disabled>Info</Button>{' '}
  <Button variant="outline-light" className="m-2" disabled>Light</Button>{' '}
  <Button variant="outline-dark" className="m-2" disabled>Dark</Button>
</div>

 <div className="p-3">
 <h5>Badges </h5>
 <Badge variant="primary" className="m-2">Primary</Badge>{' '}
  <Badge variant="secondary" className="m-2">Secondary</Badge>{' '}
  <Badge variant="success" className="m-2">Success</Badge>{' '}
  <Badge variant="warning" className="m-2">Warning</Badge>{' '}
  <Badge variant="danger" className="m-2">Danger</Badge>{' '}
  <Badge variant="info" className="m-2">Info</Badge>{' '}
  <Badge variant="light" className="m-2">Light</Badge>{' '}
  <Badge variant="dark" className="m-2">Dark</Badge>
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