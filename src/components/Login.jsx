import React from 'react'
import { Link } from 'react-router-dom';

function Login({ account, setLogin }) {
  const [name, setName] = React.useState();
  const [password, setPassword] =  React.useState();
  function handleSubmit() {
    console.log(name, password);
    account.map((elem) => {
      if (name === elem.name && password === elem.password) {
        setLogin(true);
      }
    });
  }

  function onPasswordChange(e) {
    let val = e.target.value;
    setPassword(val);
  }
  function onNameChange(e) {
    let val = e.target.value;
    setName(val);
  }

  let nameColor = name === true ? 'green' : 'red';
  let passwordColor = password === true ? 'green' : 'red';
  return (
    <div>
      <form className='Forms'>
        <p>
          <label>Имя:<br/>
          <input className = "inputs" value={name} onChange={onNameChange} style={{ borderColor: nameColor }}/>
          </label>
        </p>
        <p>
          <label>Пароль:<br/>
          <input className = "inputs" value={password} onChange={onPasswordChange} style={{ borderColor: passwordColor }}/>
          </label>
        </p>
        <button className = "btn" type="submit" value="отправить" onClick={handleSubmit}>
          <Link to="/">Авторизоваться</Link>
        </button>
      </form>
    </div>
  );
}

export default Login