export default function Email() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">Book Appointment</option>
        <option value="2">Change Appointment</option>
        <option value="3">Jewlery</option>
        <option value="4">Questions</option>
        <option value="5">Consult</option>
        <option value="6">Other</option>
      </Form.Select>

      <Form.Group className="mb-3 h-25" controlId="formBasicMessage">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="input" placeholder="What's your question about" />
      </Form.Group>
      <Form.Group className="mb-3 h-25" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="input" placeholder="Message to Our Staff" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
