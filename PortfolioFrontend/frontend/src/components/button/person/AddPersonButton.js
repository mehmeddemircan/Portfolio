import React, { Fragment, useState } from 'react'
import AddPersonModal from '../../modal/Person/AddPersonModal';

const AddPersonButton = () => {
    const [showAddPersonModal, setShowAddPersonModal] = useState(false);

    const handleOpenPersonModal = () => {
      setShowAddPersonModal(true);
    };
    const handleClosePersonModal = () => {
      setShowAddPersonModal(false);
    };
  
  return (
   <Fragment>
     <button
            class="btn btn-outline-primary rounded-pill float-right mx-2"
            onClick={handleOpenPersonModal}
          >
            Add Person
          </button>
          
          <AddPersonModal
            showAddPersonModal={showAddPersonModal}
            handleClosePersonModal={handleClosePersonModal}
            handleOpenPersonModal={handleOpenPersonModal}
          />

   </Fragment>
  )
}

export default AddPersonButton