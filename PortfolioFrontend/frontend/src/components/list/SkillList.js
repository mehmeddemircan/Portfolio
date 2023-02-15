import React, { Fragment } from 'react'

import DeleteSkillButton from '../button/skill/DeleteSkillButton'
import { SkillItem } from '../itemModel/SkillItem'

const SkillList = ({getAllAbility}) => {
    
  return (
   <Fragment>
     <h2>skills</h2>
        {getAllAbility.abilities.map((ability) => (
          <>
           <SkillItem key={ability.id} ability={ability} />
          </>
        ))}
        <hr />
   </Fragment>
  )
}

export default SkillList