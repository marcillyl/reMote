import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/layout';
import styles from '../../styles/Create.module.css';
export default function Create() {
  const checkToken = async () => {
    const token = sessionStorage.getItem('_token');
    if (!token) {
      sessionStorage.clear();
      window.location.href = '/';
    }
  };
  checkToken();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const createProject = async (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem('_id');
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    const createProject = await fetch(
      `http://127.0.0.1:4000/api/project/${userId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );
    if (createProject.status != 201) {
      return (feedback.innerHTML = 'Error, please try again');
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='content' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.main__title}>Alright,</h1>
        <h2 className={styles.main__text}>let's create your new project.</h2>
        <form onSubmit={createProject} className={styles.form}>
          <label htmlFor='title'>
            <input
              id='title'
              type='text'
              label='title'
              required
              className={styles.form__input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor='content'>
            <textarea
              id='content'
              name='content'
              label='content'
              rows='10'
              required
              className={styles.form__input}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button type='submit' className={styles.form__button}>
            Create
          </button>
          <p id='feedback' className={styles.feedback}></p>
        </form>
      </main>
    </div>
  );
}
Create.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
