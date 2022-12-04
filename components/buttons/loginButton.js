import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1>Welcome to Vocab-YOU-lary Y\'all!</h1><p>Let\'s all learn our Tech ABC\'s</p><img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Babel_icono_128.png"><br><br><button id="google-auth" class="btn btn-success">Google Login</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
