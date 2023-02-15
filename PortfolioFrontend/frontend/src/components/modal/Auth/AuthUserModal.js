import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import LoginForm from "../../form/LoginForm";
import RegisterForm from "../../form/RegisterForm";

const AuthUserModal = ({ showAuthUserModal, handleCloseAuthUserModal }) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Fragment>
      <Modal
        footer={null}
        centered
        open={showAuthUserModal}
        width={"50%"}
        onCancel={handleCloseAuthUserModal}
      >
        <div class="container py-5 h-100 " >
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-12" >
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0" >
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem;" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center" >
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex justify-content-between align-items-center mb-3 pb-1">
                          <div>
                            <i
                              class="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span class="h1 fw-bold mb-0">Portfolio</span>
                          </div>

                          <a
                            class="btn btn-outline-primary rounded-pill"
                            onClick={() => setIsRegister((prev) => !prev)}
                          >
                            {isRegister ? <a>Login</a> : <a>Signup</a>}
                          </a>
                        </div>

                        {isRegister ? (
                          <>
                            <LoginForm />
                          </>
                        ) : (
                          <>
                            <RegisterForm />
                          </>
                        )}

                        <a class="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                        <a href="#!" class="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" class="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default AuthUserModal;
