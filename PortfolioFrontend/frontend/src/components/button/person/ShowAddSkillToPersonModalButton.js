


import React, { Fragment, useState } from 'react'
import AddSkillToPersonModal from '../../modal/Person/AddSkillToPersonModal'
import { useSelector } from 'react-redux'

const ShowAddSkillToPersonModalButton = ({person}) => {


    const getAllAbility = useSelector((state)=> state.getAllAbility)

    const [showAddSkillToPersonModal, setShowAddSkillToPersonModal] = useState(false)

    const handleOpenAddSkillToPersonModal = () => {
        setShowAddSkillToPersonModal(true)
    }

    const handleCloseAddSkillToPersonModal = () => {
        setShowAddSkillToPersonModal(false)
    }
  return (
    <Fragment>
         <button
            class="btn btn-outline-secondary rounded-pill float-right mx-2 my-2"
            onClick={handleOpenAddSkillToPersonModal}
          >
            Add Skill
          </button>

            <AddSkillToPersonModal
                key={person.id} 
                person ={person}
                getAllAbility={getAllAbility}
                showAddSkillToPersonModal={showAddSkillToPersonModal}
                handleCloseAddSkillToPersonModal={handleCloseAddSkillToPersonModal}
            />


    </Fragment>
  )
}

export default ShowAddSkillToPersonModalButton