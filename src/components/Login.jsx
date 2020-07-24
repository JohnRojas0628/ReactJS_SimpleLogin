import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/simple-logo.png';
import iconGoogle from '../assets/static/ico-google.png';
import iconTwitter from '../assets/static/ico-twitter.png';

class Login extends Component {

    // const Login = (props) => {
    //     const [form, setValues] = useState({
    //       email: '',
    //     });
      
    //     const handleInput = (event) => {
    //       setValues({
    //         ...form,
    //         [event.target.name]: event.target.value,
    //       });
    //     };
      
    //     const handlSubmit = (event) => {
    //       event.preventDefault();
    //       props.loginRequest(form);
    //       props.history.push('/');
    //     };
      
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //   });email-password.html

  render() {
    return (
        <section className='login'>
            <section className='login__container'>
                <img src={logo} alt='logo' />
                <h2>Inicia sesión</h2>
                <form className='login__container--form'>
                    <input 
                        name='email'
                        className='input'
                        type='email'
                        placeholder='Correo'
                        // onChange={handleInput}
                        // required                    
                    />
                    <input 
                        name='password'
                        className='input'
                        type='password'
                        placeholder='Contraseña'
                        // onChange={handleInput}
                        // required
                    />
                <button type='submit' className='button'>Iniciar sesión</button>
                <div className='login__container--remember-me'>
                    <label>
                        <input type='checkbox' name='recordarme' id='cbox1' value='checkbos' />Recuérdame
                    </label>
                    <a href='/'>Olvidé mi contraseña</a>
                </div>
                </form>
                <section className='login__container--social-media'>
                    <div><img src={iconGoogle} alt='Google' />Inicia sesión con Google</div>
                    <div><img src={iconTwitter} alt='Twitter' />Inicia sesión con Twitter</div>
                </section>
                <p className='login__container--register'>Ya tienes cuenta <Link to='/registro'>Regístrate</Link></p>
            </section>
        </section>
    );
  }
}

export default Login;
