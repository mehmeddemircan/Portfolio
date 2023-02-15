import React, { Fragment } from 'react'
import DeleteSkillButton from '../button/skill/DeleteSkillButton'

export const SkillItem = ({ability}) => {
  return (
    <Fragment>
         <div class="d-flex justify-content-between">
                <div>
                <h6>{ability.name}</h6>
                </div>
                <div>
                <DeleteSkillButton key={ability.id} ability={ability} />
                </div>
            </div>
    </Fragment>
  )
}
