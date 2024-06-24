import styles from '../styles/signup.module.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


export const Signup = () => {
  const {
    button,
    form,
    main,
    page
  } = styles;
  return (
    <section className={page}>
      <main className={main}>
        <img
          src={process.env.PUBLIC_URL + '/logo512.png'}
          width={192}
          height={192}
          alt='Logo'
        />
        <form className={form}>
          <button className={button}>
            <FcGoogle />
            Sign up with Google
          </button>
          <label>
            <span>Email</span>
            <input
              type='text'
              value=''
              name='email'
              placeholder='JohnDoe@gmail.com'
            />
          </label>
          <label>
            <span>Username</span>
            <input
              type='text'
              value=''
              name='username'
              placeholder='johndoe20'
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type='password'
              value=''
              name='password'
              placeholder='********'
            />
          </label>
          <div>separator</div>
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
