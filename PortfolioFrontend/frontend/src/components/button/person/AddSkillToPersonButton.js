import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddSkillToPerson } from '../../../redux/actions/PersonActions';

const AddSkillToPersonButton = ({person,ability}) => {


  return (
    <Fragment>
          <button class="btn btn-outline-primary rounded-pill my-2 mx-2" >Add </button>
    </Fragment>
  )
}

export default AddSkillToPersonButton