import React, { Fragment } from 'react'
import DeletePersonButton from '../button/person/DeletePersonButton'
import ViewDetailPersonButton from '../button/person/ViewDetailPersonButton'
import PersonItem from '../itemModel/PersonItem'

const PersonList = ({getAllPerson}) => {
  return (
    <Fragment>
        <h2>people</h2>
        {getAllPerson.people.map((person) => (
          <>
            <PersonItem key={person.id}  person={person} />
          </>
        ))}
    </Fragment>
  )
}

export default PersonList