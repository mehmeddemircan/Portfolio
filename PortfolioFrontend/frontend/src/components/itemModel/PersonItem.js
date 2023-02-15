import React, { Fragment } from 'react'
import ViewDetailPersonButton from '../button/person/ViewDetailPersonButton'
import DeletePersonButton from '../button/person/DeletePersonButton'
import { Link } from 'react-router-dom'
import AddSkillToPersonButton from '../button/person/ShowAddSkillToPersonModalButton'
import ShowAddSkillToPersonModalButton from '../button/person/ShowAddSkillToPersonModalButton'

const PersonItem = ({person}) => {

 
  
        


  return (
    <Fragment>
          
         <div class="d-flex flex-row justify-content-between align-items-center">
         <Link className='col-md-6' to={`person/${person.id}/details`}>
                <div>
                <h6>{person.name}</h6>
                </div>
               
                </Link>
                <div >
                    <ShowAddSkillToPersonModalButton key={person.id} person={person}  />
                <ViewDetailPersonButton key={person.id} person={person} />
                <DeletePersonButton key={person.id} person={person} />
             
                </div>
          
            </div>
        
    </Fragment>
  )
}

export default PersonItem