import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { DeletePerson } from '../../../redux/actions/PersonActions'

const DeletePersonButton = ({person}) => {

    const dispatch = useDispatch()

    const handleDeleteUser = (id) => {
        dispatch(DeletePerson(id))
    }

  return (
   <Fragment>
    <button class="btn btn-outline-danger rounded-pill my-2 mx-2" onClick={() => handleDeleteUser(person.id)}>Delete {person.id}</button>
   </Fragment>
  )
}

export default DeletePersonButton