import React, { Fragment, useState } from 'react'
import AddSkillModal from '../../modal/Skill/AddSkillModal';

const AddSkillButton = ({getAllAbility}) => {
    const [showAddSkillModal, setshowAddSkillModal] = useState(false);

    const handleOpenSkillModal = () => {
      setshowAddSkillModal(true);
    };
  
    const handleCloseSkillModal = () => {
      setshowAddSkillModal(false);
    };
  
  return (
    <Fragment>
    <button
            class="btn btn-outline-primary rounded-pill float-right mx-2 "
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleOpenSkillModal}
          >
            Add Skill
          </button>
           <AddSkillModal
           showAddSkillModal={showAddSkillModal}
           handleCloseSkillModal={handleCloseSkillModal}
           handleOpenSkillModal={handleOpenSkillModal}
           getAllAbility={getAllAbility}
           setshowAddSkillModal={setshowAddSkillModal}
         />
</Fragment>
  )
}

export default AddSkillButton