import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Registration(props) {
  const { players, setPlayers } = props;
  let navigate = useNavigate();
  const passwordMatch = (pw, pwConfirm) => {
    return pw === pwConfirm
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const surname = form.surname.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordconfirm.value;

    if (passwordMatch(password, passwordConfirm)) {
      const newMember = {
        name: name,
        surname: surname,
        email: email,
        password: password,
        points: 0
      }
      console.log(JSON.stringify(newMember));
      setPlayers(players => [...players, newMember]);
      navigate({
        pathname: 'welcome'
      });
    }
  }


  return (
    <div className="registration">
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" name="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Surname" name="surname" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name="passwordconfirm" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}