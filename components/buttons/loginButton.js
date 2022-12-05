import { signIn } from '../../utils/auth';
import ABCs from '../../assets/ABCs.jpg';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<h1>Welcome to Vocab-YOU-lary Y'all!</h1><p>Let's all learn our Coding A.B.C.'s*</p><p>*A.B.C. = Always Be Coding</p><img src=${ABCs} alt="Abc logo with green background and white text"><br><br><button id="google-auth" class="btn btn-success">Google Login</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
