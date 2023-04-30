import './Register.css'
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import RegisterPage from '../../components/RegisterPage';

const Register = () => {

  return (
    <div className='register-container'>

      <header>
        <PageHeader />
      </header>

      <body>
        <RegisterPage />
      </body>

      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}

export default Register
