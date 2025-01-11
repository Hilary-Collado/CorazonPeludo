import { ClassNames } from "@emotion/react";
import React, { Component, Fragment, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";


const people = [
  {
    value: 1,
    label: 'Wade Cooper',
  },
  {
    value: 2,
    label: 'Arlene Mccoy',
  },
  {
    value: 3,
    label: 'Devon Webb',
  },
  {
    value: 4,
    label: 'Tom Cook',
  },
  {
    value: 5,
    label: 'Tanya Fox',
  },
  {
    value: 6,
    label: 'Hellen Schmidt',
  },
  {
    value: 7,
    label: 'Caroline Schultz',
  },
  {
    value: 8,
    label: 'Mason Heaney',
  }
]


const Selector = () => {
  const handleChange = selectOption => {
    this.setState({ selectOption });
  }

  return (
    <>
        <Select id="select"
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          options={people}
          isRtl={false}
          isSearchable={true}
          onchange={handleChange}
          isMulti={true}
        />

    </>
  )
}

export default Selector