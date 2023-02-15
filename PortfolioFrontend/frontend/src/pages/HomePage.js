import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import AddPersonButton from "../components/button/person/AddPersonButton";
import AddSkillButton from "../components/button/skill/AddSkillButton";
import { useDispatch, useSelector } from "react-redux";
import { AllAbility } from "../redux/actions/AbilityActions";
import { AllPerson } from "../redux/actions/PersonActions";
import SkillList from "../components/list/SkillList";
import PersonList from "../components/list/PersonList";
import { DELETE_ABILITY_RESET } from "../redux/constants/AbilityConstants";
import { DELETE_PERSON_RESET } from "../redux/constants/PersonConstants";

const HomePage = () => {

    // bunu paylasştırabilir miyiz ? 
    
  const getAllAbility = useSelector((state) => state.getAllAbility);
  const getAllPerson = useSelector((state) => state.getAllPerson);
  const addNewAbility = useSelector((state) => state.addNewAbility);
  const addNewPerson = useSelector((state) => state.addNewPerson);
  const {deletedAbility} = useSelector((state) => state.abilityUpdateDelete);
  const {deletedPerson} = useSelector((state) => state.personUpdateDelete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllAbility());
    dispatch(AllPerson());

    if (deletedAbility) {
        dispatch({type : DELETE_ABILITY_RESET})
    }
    if (deletedPerson) {
        dispatch({type:DELETE_PERSON_RESET})
    }


  }, [addNewAbility.success, dispatch, addNewPerson.success,deletedAbility,deletedPerson]);
  return (
    <MainLayout>
      <HomeJumbotron />
      <div class="container">
        {/* <!-- Example row of columns --> */}
        <div class="d-flex flex-row my-3 justify-content-end">
          <AddPersonButton />
          <AddSkillButton />
        </div>
        <SkillList getAllAbility={getAllAbility} />
        <PersonList getAllPerson={getAllPerson} />
      </div>
      <hr />
    </MainLayout>
  );
};

export default HomePage;
