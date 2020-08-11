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
 <h5>As Links </h5>
                <a href="#" class="badge badge-primary mr-2">Primary</a>
                <a href="#" class="badge badge-success mr-2">Success</a>
                <a href="#" class="badge badge-danger mr-2">Danger</a>
                <a href="#" class="badge badge-warning mr-2">Warning</a>
                <a href="#" class="badge badge-info mr-2">Info</a>
                <a href="#" class="badge badge-dark mr-2">Dark</a>
                <a href="#" class="badge badge-secondary mr-2">Secondary</a>
                <a href="#" class="badge badge-light mr-2">Light</a>
                <a href="#" class="badge badge-white mr-2">White</a>
</div>

<div className="p-3">
 <h5>Pills </h5>
 <Badge variant="primary" pill className="m-2">Primary</Badge>{' '}
  <Badge variant="secondary" pill className="m-2">Secondary</Badge>{' '}
  <Badge variant="success" pill className="m-2">Success</Badge>{' '}
  <Badge variant="warning" pill className="m-2">Warning</Badge>{' '}
  <Badge variant="danger" pill className="m-2">Danger</Badge>{' '}
  <Badge variant="info"  pill className="m-2">Info</Badge>{' '}
  <Badge variant="light" pill className="m-2">Light</Badge>{' '}
  <Badge variant="dark" pill className="m-2">Dark</Badge>
</div>


 <div className="p-3">
                <h5>As links</h5>
                <a href="#" class="badge badge-pill badge-primary mr-2">Primary</a>
                <a href="#" class="badge badge-pill badge-success mr-2">Success</a>
                <a href="#" class="badge badge-pill badge-danger mr-2">Danger</a>
                <a href="#" class="badge badge-pill badge-warning mr-2">Warning</a>
                <a href="#" class="badge badge-pill badge-info mr-2">Info</a>
                <a href="#" class="badge badge-pill badge-dark mr-2">Dark</a>
                <a href="#" class="badge badge-pill badge-secondary mr-2">Secondary</a>
                <a href="#" class="badge badge-pill badge-light mr-2">Light</a>
                <a href="#" class="badge badge-pill badge-white mr-2">White</a>
              </div>

    

   <div className="p-3"> 
              <h2 class="h5">Sizes</h2>
              <Button variant = "primary" size="lg" className="mr-2">Large</Button>
              <Button variant = "primary" className="mr-2">Default</Button>
              <Button variant = "primary" size="sm" className="mr-2">Small</Button>
              <Button variant = "primary" size="xs" className="mr-2">Extra Small</Button>
    </div>
   
          
       
</>
  )
}