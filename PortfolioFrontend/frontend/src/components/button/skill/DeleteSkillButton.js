import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteAbility } from '../../../redux/actions/AbilityActions'

const DeleteSkillButton = ({ability}) => {

    
    const dispatch = useDispatch()
    const handleDeleteSkill = (id) => {
        dispatch(DeleteAbility(id))
    }

  return (
    <Fragment>
         <button class="btn btn-outline-danger rounded-pill my-2" onClick={() => handleDeleteSkill(ability.id)}>Delete {ability.id}</button>
    </Fragment>
  )
}

export default DeleteSkillButton