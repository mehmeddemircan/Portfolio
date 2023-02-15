
import { ADD_NEW_PERSON_FAIL, ADD_NEW_PERSON_REQUEST, ADD_NEW_PERSON_RESET, ADD_NEW_PERSON_SUCCESS, ADD_SKILL_TO_PERSON_FAIL, ADD_SKILL_TO_PERSON_REQUEST, ADD_SKILL_TO_PERSON_RESET, ADD_SKILL_TO_PERSON_SUCCESS, DELETE_PERSON_FAIL, DELETE_PERSON_REQUEST, DELETE_PERSON_RESET, DELETE_PERSON_SUCCESS, GET_ALL_PERSON_FAIL, GET_ALL_PERSON_REQUEST, GET_ALL_PERSON_SUCCESS, GET_PERSON_DETAILS_FAIL, GET_PERSON_DETAILS_REQUEST, GET_PERSON_DETAILS_SUCCESS, UPDATE_PERSON_FAIL, UPDATE_PERSON_REQUEST, UPDATE_PERSON_RESET, UPDATE_PERSON_SUCCESS } from "../constants/PersonConstants";

export const getAllPersonReducer = (state = { people: [] }, action) => {
    switch (action.type) {
      case GET_ALL_PERSON_REQUEST :
        return { ...state, loading: true };
  
      case GET_ALL_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          people: action.payload,
        };
  
      case GET_ALL_PERSON_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const addNewPersonReducer = (state = { person: {} }, action) => {
    switch (action.type) {
      case ADD_NEW_PERSON_REQUEST:
        return { ...state, loading: true };
  
      case ADD_NEW_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          person : action.payload,
        };
  
      case ADD_NEW_PERSON_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      case ADD_NEW_PERSON_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };
  


  export const personUpdateDeleteReducer = (state = { updatedPerson: {}, deletedPerson : false }, action) => {
    switch (action.type) {
      case DELETE_PERSON_REQUEST:
      case UPDATE_PERSON_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          deletedPerson: true,
        };
  
      case UPDATE_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          updatedPerson: action.payload,
          updateSuccess: true,
        };
  
        // case GET_GROUP_DETAILS_RESET:
        //   return {
        //     ...state,
        //     updateSuccess: false,
        //   };
    
  
      case DELETE_PERSON_FAIL:
      case UPDATE_PERSON_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_PERSON_RESET:
        return {
          ...state,
          deletedPerson: false,
        };
      case UPDATE_PERSON_RESET:
        return {
          ...state,
          updateSuccess: false,
        };
      default:
        return state;
    }
  };
  

  export const getPersonDetailsReducer = (state = { person: { personAbilities : [] } }, action) => {
    switch (action.type) {
      case GET_PERSON_DETAILS_REQUEST :
        return { ...state, loading: true };
  
      case GET_PERSON_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          person: action.payload,
        
        };
  
      case GET_PERSON_DETAILS_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const addNewSkillToPersonReducer = (state = { personSkill: {} }, action) => {
    switch (action.type) {
      case ADD_SKILL_TO_PERSON_REQUEST:
        return { ...state, loading: true };
  
      case ADD_SKILL_TO_PERSON_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          personSkill : action.payload,
        };
  
      case ADD_SKILL_TO_PERSON_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      case ADD_SKILL_TO_PERSON_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };
  
