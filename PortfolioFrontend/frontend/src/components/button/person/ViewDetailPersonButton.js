import React, { Fragment } from 'react'

const ViewDetailPersonButton = ({person}) => {
  return (
   <Fragment>
        <button class="btn btn-outline-primary rounded-pill my-2 mx-2">Edit {person.id}</button>
   </Fragment>
  )
}

export default ViewDetailPersonButton