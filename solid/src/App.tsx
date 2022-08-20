import { Component, createEffect, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [message, setMessage] = createSignal<string>('');
  const [toggle, setToggle] = createSignal<boolean>(false);

 createEffect(async () => {
   await fetch('http://192.168.64.25:32000/', {
     method: 'GET',
     
    headers: {
      'Content-Type': 'application/json',
      'Allow-Control-Allow-Origin': '*',
    },
  }).then(res => res.json()).then(data => {
    setMessage(data.message);
  }).catch(err => {
    console.log(err);
  })
   console.log(message());
  })
  
  return (
    <div class={styles.App}>
      <h1 class={styles.h1}>Get message from api</h1>
      <button onClick={() => setToggle(() => !toggle())} > {!toggle() ? "SHOW" : "HIDE"}</button>
  
      {toggle() && (<p>{message()}</p>)}

    </div>
  );
};

export default App;
