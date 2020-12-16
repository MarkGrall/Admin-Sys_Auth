import React, { useState } from 'react'
import {
  FormGroup,
  FormText,
  Label
} from 'reactstrap'
import DatePicker from "./DatePicker";
const RDPBasic = () => {
  const inputName = 'reactstrap_date_picker_cweek'
  const [value, setValue] = useState("2019-06-01T00:00:00.000Z")

  return (
    <FormGroup row>
      <DatePicker
        name         = {inputName}
        instanceCount= {5}
        value        = {value}
        onChange     = {(v, _f) => setValue(v)}
        weekStartsOn = {1}
      />
    </FormGroup>
  )
}

export default RDPBasic
