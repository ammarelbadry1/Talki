import styles from './styles/signup.module.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IconBtn } from '../components/IconBtn';
import { FormSep } from '../components/FormSep';
import { FormField } from '../components/FormField';
import { Button } from '../components/Button';
import { useState } from 'react';


export const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <section className={styles.page}>
      <main className={styles.main}>
        <img
          src={process.env.PUBLIC_URL + '/logo512.png'}
          width={192}
          height={192}
          alt='Logo'
        />
        <form className={styles.form}>
          <IconBtn
            icon={<FcGoogle style={{fontSize: '1.5rem'}} />}
            value='Sign up with Google'
            handleClick={(e) => e.preventDefault()}
          />
          <FormSep />
          <FormField
            label='Email'
            type='text'
            name='email'
            value={email}
            placeholder='JohnDoe@gmail.com'
            handleChange={handleEmail}
          />
          <FormField
            label='Username'
            type='text'
            name='username'
            value={username}
            placeholder='johndoe20'
            handleChange={handleUsername}
          />
          <FormField
            label='Password'
            type='password'
            name='password'
            value={password}
            placeholder='••••••••'
            handleChange={handlePassword}
          />
          <Button
            value='Sign up'
            onClick={(e) => e.preventDefault()}
          />
        </form>
        <div>
          <span>Have an account? </span>
          <Link to='/login'>
            Log in
          </Link>
        </div>
      </main>
    </section>
  );
}
