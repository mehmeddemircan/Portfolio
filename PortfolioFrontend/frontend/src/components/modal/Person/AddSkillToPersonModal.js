import React, { Fragment } from 'react'
import SkillList from '../../list/SkillList'
import { Modal } from 'antd'
import AddSkillToPersonList from '../../list/AddSkillToPersonList'

const AddSkillToPersonModal = ({person,getAllAbility,showAddSkillToPersonModal,handleCloseAddSkillToPersonModal}) => {
  return (
        <Fragment>

<Modal
        title="Add Skill To Person"
        centered
        footer={null}
        bodyStyle={{
            height: 200
        }}
        open={showAddSkillToPersonModal}
        onOk={handleCloseAddSkillToPersonModal}
        onCancel={handleCloseAddSkillToPersonModal}
      >
        <AddSkillToPersonList getAllAbility={getAllAbility} person={person}  />
      
      
      </Modal>


        </Fragment>
  )
}

export default AddSkillToPersonModal