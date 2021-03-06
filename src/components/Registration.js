import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import useCountries from '../hooks/useCountries';
import CountryOption from './CountryOption';
import Card from 'react-bootstrap/Card';
import bcrypt from 'bcryptjs';

export default function Registration(props) {
  const { setPlayers } = props;
  let navigate = useNavigate();

  const pwChange = (event) => {
    const pwElement = event.target.parentElement.querySelector("#password");
    const pwConfirmElement = event.target.parentElement.querySelector("#password-confirm");
    pwConfirmElement.setCustomValidity(passwordMatch(pwElement.value, pwConfirmElement.value) ? '' : 'Passwords must match');
  }

  const passwordMatch = (pw, pwConfirm) => {
    return pw === pwConfirm
  };

  const [countries] = useCountries();
  let countryKey = 0;
  const countryOptions = countries.map((country) => {
    countryKey++;
    return (
      <CountryOption country={country} key={countryKey}/>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const surname = form.surname.value;
    const email = form.email.value;
    const nationality = form.nationality.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordconfirm.value;

    if (passwordMatch(password, passwordConfirm)) {
      const hashPassword = bcrypt.hashSync(password, 8);
      const newMember = {
        name: name,
        surname: surname,
        email: email,
        password: hashPassword,
        nationality: nationality,
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
      <Card style={{ padding: '15px' }} >
        <Card.Header>
          <h1>Registration</h1>
          <p>Fill out the form below to join our Tennis Club!</p>
        </Card.Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" name="name" required />
        </Form.Group>
        <Form.Group controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Surname" name="surname" required />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
        </Form.Group>
        <Form.Group controlId="formNationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Select name="nationality" aria-label="Nationality select" required options={countries}>
            <option></option>
            {countryOptions}
          </Form.Select>
        </Form.Group>
        <Form.Group id="password-group" onChange={pwChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control id="password" type="password" placeholder="Password" name="password" default="" required/>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control id="password-confirm" type="password" placeholder="Confirm Password" name="passwordconfirm" default="" required/>
        </Form.Group>
        <Button type="submit" id="register-button">
          Register!
        </Button>
      </Form>
      </Card>
    </div>
  )
}