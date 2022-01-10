import styles from '../styles/Home.Form.module.css';
export default function SignInForm() {
  const signIn = async (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    const signIn = await fetch('http://127.0.0.1:4000/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: e.target.email.value.toLowerCase(),
        password: e.target.password.value,
      }),
    });
    if (signIn.status === 403 || signIn.status != 200) {
      return (feedback.innerHTML = 'Error, please try again!');
    }
    {
      const data = await signIn.json();
      sessionStorage.setItem('user', data.token);
      window.location.href = '/board';
    }
  };
  return (
    <div>
      <form onSubmit={signIn} className={styles.form}>
        <label htmlFor='email'>
          <input
            id='email'
            type='email'
            label='email'
            required
            placeholder='Email'
            className={styles.form__input}
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
          />
        </label>
        <button type='submit' className={styles.form__button}>
          Connect
        </button>
        <p id='feedback' className={styles.feedback}></p>
      </form>
    </div>
  );
}
