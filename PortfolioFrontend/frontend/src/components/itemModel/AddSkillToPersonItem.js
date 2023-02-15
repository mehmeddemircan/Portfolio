import React, { Fragment, useState } from 'react'
import AddSkillToPersonButton from '../button/person/AddSkillToPersonButton'
import { useDispatch } from 'react-redux'

const AddSkillToPersonItem = ({ability,person}) => {



    

   

  return (
        <Fragment>
 <div class="d-flex justify-content-between">
                <div>
                <h6>{ability.name}</h6>
                  
                </div>
                <div>
                <AddSkillToPersonButton key={`person-${person.id}`} person={person} ability={ability}   />
                </div>
            </div>
        </Fragment>
  )
}

export default AddSkillToPersonItem