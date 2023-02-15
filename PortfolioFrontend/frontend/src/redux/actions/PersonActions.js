import axios from "axios";
import { ADD_NEW_PERSON_FAIL, ADD_NEW_PERSON_REQUEST, ADD_NEW_PERSON_SUCCESS, ADD_SKILL_TO_PERSON_FAIL, ADD_SKILL_TO_PERSON_REQUEST, ADD_SKILL_TO_PERSON_SUCCESS, DELETE_PERSON_FAIL, DELETE_PERSON_REQUEST, DELETE_PERSON_SUCCESS, GET_ALL_PERSON_FAIL, GET_ALL_PERSON_REQUEST, GET_ALL_PERSON_SUCCESS, GET_PERSON_DETAILS_FAIL, GET_PERSON_DETAILS_REQUEST, GET_PERSON_DETAILS_SUCCESS } from "../constants/PersonConstants";

export const AllPerson = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PERSON_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7265/api/People/get-people`
      );
  
      dispatch({
        type: GET_ALL_PERSON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PERSON_FAIL,
        error: error.response,
      });
    }
  };


  export const AddPerson = (person) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_NEW_PERSON_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7265/api/People/add-person`,
        person
      );
  
      dispatch({
        type: ADD_NEW_PERSON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_NEW_PERSON_FAIL,
        error: error.response,
      });
    }
  };

  
export const DeletePerson = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_PERSON_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://localhost:7265/api/People/delete-person/${id}`
      );
  
      dispatch({
        type: DELETE_PERSON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PERSON_FAIL,
        payload: error.message,
      });
    }
  };


  export const GetPersonDetails = (id) => async (dispatch) => {
    try {
      dispatch({
        type: GET_PERSON_DETAILS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://localhost:7265/api/People/${id}/details`
      );
  
      dispatch({
        type: GET_PERSON_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PERSON_DETAILS_FAIL,
        payload: error.message,
      });
    }
  };
  

  export const AddSkillToPerson = (personSkill) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_SKILL_TO_PERSON_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://localhost:7265/api/People/add-ability-to-person`,
        personSkill
      );
  
      dispatch({
        type: ADD_SKILL_TO_PERSON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_SKILL_TO_PERSON_FAIL,
        error: error.response,
      });
    }
  };



