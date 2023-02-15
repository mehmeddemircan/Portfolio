import React, { Fragment, useState } from 'react'
import LanguageModal from '../modal/Language/LanguageModal'
import AuthUserModal from '../modal/Auth/AuthUserModal'

const HomeHeader = () => {
  const [showAuthUserModal, setShowAuthUserModal] = useState(false)

  const handleShowAuthUserModal = () => {
    setShowAuthUserModal(true)
  }

  const handleCloseAuthUserModal = () => {
    setShowAuthUserModal(false)
  }

  const [showLanguageModal, setShowLanguageModal] = useState(false)

  const handleShowLanguageModal = () => {
    setShowLanguageModal(true)
  }
  const handleCloseLanguageModal = () => {
    setShowLanguageModal(false)
  }
  return (
   <Fragment>
     <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Features</a>
        <a class="p-2 text-dark" href="#">Enterprise</a>
        <a class="p-2 text-dark" href="#">Support</a>
        <a class="p-2 text-dark" href="#">Pricing</a>
      </nav>
      <a class="btn btn-outline-primary" onClick={handleShowAuthUserModal}>Sign up</a>
      <a
                type="button"
                class="btn  rounded-pill "
                onClick={handleShowLanguageModal}
              >
                <i class="fa-solid fa-globe"></i>
              </a>

              <LanguageModal 
                showLanguageModal={showLanguageModal}
                handleCloseLanguageModal={handleCloseLanguageModal}
              />

              <AuthUserModal 
                showAuthUserModal={showAuthUserModal}
                handleCloseAuthUserModal={handleCloseAuthUserModal}              
              />
    </div>
   </Fragment>
  )
}

export default HomeHeader