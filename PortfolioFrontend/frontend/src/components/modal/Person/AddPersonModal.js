import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AddPerson } from "../../../redux/actions/PersonActions";
import { ADD_NEW_PERSON_RESET } from "../../../redux/constants/PersonConstants";
const AddPersonModal = ({showAddPersonModal, handleClosePersonModal}) => {
    
    
    const [name, setName] = useState("");
    const dispatch = useDispatch()

    const {success} = useSelector((state) => state.addNewPerson)

    const handleAddNewPerson = () => {
        dispatch(AddPerson({ name }))
        handleClosePersonModal()
        if (success) {
            dispatch({type:ADD_NEW_PERSON_RESET})
            setName("")
        }
    }
 
  return (
    <Fragment>
      <Modal
        title="Add new person"
        centered
        open={showAddPersonModal}
        onOk={handleAddNewPerson}
        onCancel={handleClosePersonModal}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">New Person </h4>
            <label for="recipient-name" class="col-form-label">
              Person Name{" "}
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddPersonModal;
