import {
  ADD_ABILITY_FAIL,
  ADD_ABILITY_REQUEST,
  ADD_ABILITY_RESET,
  ADD_ABILITY_SUCCESS,
  DELETE_ABILITY_FAIL,
  DELETE_ABILITY_REQUEST,
  DELETE_ABILITY_RESET,
  DELETE_ABILITY_SUCCESS,
  GET_ALL_ABILITY_FAIL,
  GET_ALL_ABILITY_REQUEST,
  GET_ALL_ABILITY_SUCCESS,
  UPDATE_ABILITY_FAIL,
  UPDATE_ABILITY_REQUEST,
  UPDATE_ABILITY_RESET,
  UPDATE_ABILITY_SUCCESS,
} from "../constants/AbilityConstants";

export const getAllAbilityReducer = (state = { abilities: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ABILITY_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_ABILITY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        abilities: action.payload,
      };

    case GET_ALL_ABILITY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addNewAbilityReducer = (state = { ability: {} }, action) => {
  switch (action.type) {
    case ADD_ABILITY_REQUEST:
      return { ...state, loading: true };

    case ADD_ABILITY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        ability: action.payload,
      };

    case ADD_ABILITY_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ADD_ABILITY_RESET:
      return { ...state, success: false };

    default:
      return state;
  }
};


export const abilityUpdateDeleteReducer = (state = { updatedAbility: {}, deletedAbility : false }, action) => {
    switch (action.type) {
      case DELETE_ABILITY_REQUEST:
      case UPDATE_ABILITY_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_ABILITY_SUCCESS:
        return {
          ...state,
          loading: false,
          deletedAbility: true,
        };
  
      case UPDATE_ABILITY_SUCCESS:
        return {
          ...state,
          loading: false,
          updatedAbility: action.payload,
          updateSuccess: true,
        };
  
        // case GET_GROUP_DETAILS_RESET:
        //   return {
        //     ...state,
        //     updateSuccess: false,
        //   };
    
  
      case DELETE_ABILITY_FAIL:
      case UPDATE_ABILITY_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_ABILITY_RESET:
        return {
          ...state,
          deletedAbility: false,
        };
      case UPDATE_ABILITY_RESET:
        return {
          ...state,
          updateSuccess: false,
        };
      default:
        return state;
    }
  };
  