import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAbility, AllAbility } from "../../../redux/actions/AbilityActions";
import {
  ADD_ABILITY_FAIL,
  ADD_ABILITY_RESET,
} from "../../../redux/constants/AbilityConstants";
import { Modal } from "antd";

const AddSkillModal = ({
  setshowAddSkillModal,
  showAddSkillModal,
  handleCloseSkillModal,
}) => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(4)
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.addNewAbility);

  const handleAddNewAbility = () => {
    dispatch(AddAbility({ name ,categoryId}));
    setshowAddSkillModal(false);
    if (success) {
      dispatch({ type: ADD_ABILITY_RESET });
      setName("");
    }
  };

  return (
    <Fragment>
      <Modal
        title="Add new ability"
        centered
        open={showAddSkillModal}
        onOk={handleAddNewAbility}
        onCancel={handleCloseSkillModal}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">New Ability </h4>
            <label for="recipient-name" class="col-form-label">
              Ability Name{" "}
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

export default AddSkillModal;
 