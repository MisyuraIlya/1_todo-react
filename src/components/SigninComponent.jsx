import React from 'react';
import { Form, Button, Divider, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/enums';
const SigninComponent = ({ details, setDetails, createAccount, error, loading }) => {
  return (
    <Dimmer.Dimmable as={Segment} dimmed={loading}>
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Form unstackable error>
        {error && <Message
          error
          header='Error'
          content={error}
        />}
        <Form.Group widths={2}>
          <Form.Input label='First name' placeholder='First name' onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
          <Form.Input label='Last name' placeholder='Last name' onChange={e => setDetails({ ...details, lastname: e.target.value })} value={details.lastname} />
        </Form.Group>
        <Form.Input label='Email' placeholder='Email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
        <Form.Input label='Passowrd' placeholder='Password' onChange={e => setDetails({ ...details, password1: e.target.value })} value={details.password1} />
        <Form.Input label='Repeat Password' placeholder='Repeat Password' onChange={e => setDetails({ ...details, password2: e.target.value })} value={details.password2} />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit' primary fluid onClick={createAccount}>Sign In</Button>
        <Divider />
        <Button type='submit' fluid as={Link} to={ROUTES.LOGIN.path} >Alreay i have account</Button>
      </Form>
    </Dimmer.Dimmable>
  );
};

export default SigninComponent;