import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Dear MRF User</Alert.Heading>
        <p>
        We have the safest way to register and withdraw money.<br/>
        We are a global player in the off-highway tire industry.<br/>
        India has five tire production bases.<br/>
        There are three business units in Europe and North America.<br/>
        We are the best business for your investment.<br/>
        We have the most complete invitation mechanism.<br/>
        Join us and improve your quality of life.<br/>
        Daily withdrawal time from 11:30 am to 21:00 pm<br/>
        You can withdraw cash every day, the minimum withdrawal is 150<br/>
        Telegram channel:https://t.me/bkt_machineryandtires
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            OK
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Notice And Rules</Button>}
    </>
  );
}

export default AlertDismissible;
//render(<AlertDismissible />);
