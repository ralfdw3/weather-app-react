import "./Register.css";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import RegisterPage from "../../components/RegisterPage/RegisterPageBody";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-page-header">
        <PageHeader />
      </div>

      <div className="register-page-body">
        <RegisterPage />
      </div>

      <div className="register-page-footer">
        <PageFooter />
      </div>
    </div>
  );
};

export default Register;
