import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { abilityReducer, abilityUpdateDeleteReducer, addNewAbilityReducer, getAllAbilityReducer } from './reducers/AbilityReducers'
import { addNewPersonReducer, addNewSkillToPersonReducer, getAllPersonReducer, getPersonDetailsReducer, personUpdateDeleteReducer } from './reducers/PersonReducers'

const rootReducer = combineReducers({
        getAllAbility : getAllAbilityReducer,
        addNewAbility : addNewAbilityReducer,
        getAllPerson : getAllPersonReducer,
        addNewPerson : addNewPersonReducer,
        abilityUpdateDelete : abilityUpdateDeleteReducer,
        personUpdateDelete : personUpdateDeleteReducer,
        getPersonDetails : getPersonDetailsReducer,
        addNewSkillToPerson : addNewSkillToPersonReducer

})  

const initialState = {}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store ;