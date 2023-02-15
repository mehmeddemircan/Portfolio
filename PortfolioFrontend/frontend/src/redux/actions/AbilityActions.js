import axios from "axios";
import {
  ADD_ABILITY_FAIL,
  ADD_ABILITY_REQUEST,
  ADD_ABILITY_SUCCESS,
  ADD_ABILITY_TO_PERSON_REQUEST,
  DELETE_ABILITY_FAIL,
  DELETE_ABILITY_REQUEST,
  DELETE_ABILITY_SUCCESS,
  GET_ALL_ABILITY_FAIL,
  GET_ALL_ABILITY_REQUEST,
  GET_ALL_ABILITY_SUCCESS,
} from "../constants/AbilityConstants";

export const AllAbility = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_ABILITY_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7265/api/Abilities/get-abilities`
    );

    dispatch({
      type: GET_ALL_ABILITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ABILITY_FAIL,
      error: error.response,
    });
  }
};
export const AddAbility = (ability) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_ABILITY_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7265/api/Abilities/add-ability`,
      ability
    );

    dispatch({
      type: ADD_ABILITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ABILITY_FAIL,
      error: error.response,
    });
  }
};

export const DeleteAbility = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_ABILITY_REQUEST,
      });
  
      const { data } = await axios.delete(
        `https://localhost:7265/api/Abilities/delete-ability/${id}`
      );
  
      dispatch({
        type: DELETE_ABILITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ABILITY_FAIL,
        payload: error.message,
      });
    }
  };



// export const AddAbilityToPerson = () => async(dispatch) => {
//     try {
//             dispatch({
//                 type  : ADD_ABILITY_TO_PERSON_REQUEST
//             })

//             const { data } = await axios.get(``);

//     dispatch({
//       type: GET_ALL_ABILITY_SUCCESS,
//       payload: data,
//     });
//     } catch (error) {

//     }
// }
