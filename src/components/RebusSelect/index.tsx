import { StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import React from "react";
import { SelectOption } from "../../config/types";

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#252525',
    borderColor: 'rgba(89, 89, 89, 0.5)!important',
    borderRadius: '14px',
    height: '53px',
    boxShadow: 'none!important',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
  }),
  multiValue: (styles) => ({
    ...styles,
    minHeight: '39px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#383838",
    borderRadius: "6px",
    padding: '0 14px',
    margin: 0,
    marginRight: '5px'
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#252525",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#FFFFFF'
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  input: (styles) => ({
    ...styles,
    color: "#ffffff",
    'input': {
      height: 'unset',
    }
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: "#252525!important",
  }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles, }),
  multiValueRemove: (styles, { data }) => ({ ...styles, backgroundColor: 'transparent!important', color: '#FFFFFF!important' }),
};

type Props = {
  options: SelectOption[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

const RebusSelect = ({ value, options, onChange }: Props) => {

  return (
    <CreatableSelect
      isMulti
      menuPosition="fixed"
      styles={colourStyles}
      options={options}
      value={value}
      onChange={(values) => onChange(values as SelectOption[])}
      placeholder=""
      noOptionsMessage={() => 'Ничего не найдено'}
    />
  )
};

export default RebusSelect;