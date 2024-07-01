import styles from '../styles/signup.module.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


export const Signup = () => {
  const {
    signupBtn,
    formInput,
    label,
    separatorTxt,
    separator,
    btn,
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
          <button
            className={btn}
            title='Currently Disabled'
            onClick={(e) => e.preventDefault()}
          >
            <FcGoogle
              style={{
                fontSize: '1.5rem'
              }}
            />
            Sign up with Google
          </button>
          <div>
            <span className={separator}></span>
            <span className={separatorTxt}> or </span>
            <span className={separator}></span>
          </div>
          <label>
            <span className={label}>Email</span>
            <input
              type='text'
              className={formInput}
              name='email'
              placeholder='JohnDoe@gmail.com'
            />
          </label>
          <label>
            <span className={label}>Username</span>
            <input
              type='text'
              className={formInput}
              value=''
              name='username'
              placeholder='johndoe20'
            />
          </label>
          <label>
            <span className={label}>Password</span>
            <input
              type='password'
              className={formInput}
              value=''
              name='password'
              placeholder='••••••••'
            />
          </label>
          <button
            className={signupBtn}
            onClick={(e) => e.preventDefault()}
          >
            Sign up
          </button>
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
