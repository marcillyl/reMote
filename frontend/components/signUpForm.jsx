import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.Form.module.css';
export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const signUp = async (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    const signUp = await fetch('http://127.0.0.1:4000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    if (signUp.status != 201) {
      return (feedback.innerHTML = 'Error, please try again');
    }
    setSignedUp(true);
  };
  if (signedUp) {
    return (
      <div>
        <h3>Your account has been created !</h3>
        <Link href='/'>
          <a>Click here to sign in</a>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.main}>
      <form onSubmit={signUp} className={styles.form}>
        <label htmlFor='username'>
          <input
            id='username'
            type='text'
            label='username'
            required
            placeholder='Username'
            className={styles.form__input}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <input
            id='email'
            type='email'
            label='email'
            required
            placeholder='Email'
            className={styles.form__input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            type='password'
            label='password'
            required
            placeholder='Password'
            className={styles.form__input}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit' className={styles.form__button}>
          Create account
        </button>
        <p id='feedback' className={styles.feedback}></p>
      </form>
    </div>
  );
}
