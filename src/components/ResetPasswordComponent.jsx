// GLOBAL
import React from 'react';
import { Form, Button, Divider, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// LOCAL
import { ROUTES } from '../lib/enums';

const ResetPasswordComponent = ({ email, setEmail, loading, handleResetPassword, success ,error}) => {
  return (
    <Dimmer.Dimmable  as={Segment} dimmed={loading} >
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Form unstackable error success>
        {error && <Message
          error
          header='Error'
          content={error}
        />}
        {success && <Message
          success
          header='Message '
          content={success}
        />}
        <Form.Input
          label='Email'
          placeholder='Email'
          onChange={e => setEmail( e.target.value )}
          value={email}
        />
        <Button type='submit' primary fluid onClick={handleResetPassword} >Send</Button>
        <Divider/>
        <Button type='submit' fluid as={Link} to={ROUTES.SIGNUP.path}>Dont have an accout?</Button>
      </Form>
    </Dimmer.Dimmable>
  );
};

export default ResetPasswordComponent;