import React, { Fragment, useEffect, useState } from 'react'
import AddSkillToPersonItem from '../itemModel/AddSkillToPersonItem'
import { Select } from 'antd'
import { useDispatch } from 'react-redux';
import { AddSkillToPerson } from '../../redux/actions/PersonActions';
const { Option } = Select;
const AddSkillToPersonList = ({getAllAbility,person}) => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
        window.alert(`selected ${value}`)
        setAbilityId(value)
      };
   
      const dispatch = useDispatch(); 
      const [personId, setPersonId] = useState(person.id)
      const [abilityId, setAbilityId] = useState(0)
      const [percentage, setPercentage] = useState(0)
  
      const handleAddSkillToPerson = () => {
          dispatch(AddSkillToPerson({personId,abilityId,percentage}))
      }
  
    // form 

  return (
   <Fragment>
     
        {/* {getAllAbility.abilities.map((ability) => (
          <>
           <AddSkillToPersonItem key={`ability-${ability.id}`} ability={ability} person={person} />
          </>
        ))} */}
 <form>

 <div class="form-group">
 <label for="recipient-name" class="col-form-label">
              Skills{" "}
            </label>
<Select
    showSearch
    style={{
      width: '100%',
    //   border : '1px solid #222',
    //   borderRadius : '8px'
    }}
    placeholder="Select one  skill"
    optionFilterProp="children"
    onChange={onChange}
  >
    {getAllAbility.abilities.map((ability) => (
          <Option key={`option-${ability.id}`} value={ability.id} ><h6>{ability.name} {abilityId} {percentage}</h6></Option>
    ))}
  </Select>
  </div>
          <div class="form-group">
        
            <label for="recipient-name" class="col-form-label">
              Percentage{" "}
            </label>
            <input
              type="number"
              class="form-control "
              id="percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
            <button class="btn btn-outline-primary  float-right" onClick={handleAddSkillToPerson}>Add</button>
  </form>
   </Fragment>
  )
}

export default AddSkillToPersonList