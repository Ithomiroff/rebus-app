import { StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import React from "react";
import { SelectOption } from "../../config/types";
import { components } from 'react-select';

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
    marginRight: '5px',
    fontFamily: 'Inter Variable',
    fontSize: '18px',
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
      fontFamily: 'inherit'
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
  placeholder?: string;
  options: SelectOption[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

const RebusSelect = ({ value, options, onChange, placeholder }: Props) => {

  return (
    <CreatableSelect
      isMulti
      placeholder="Название метки"
      components={{
        MultiValueRemove: (props) => (
          <components.MultiValueRemove {...props}>
            <div className="mv-remove-icon">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5.5L5 15.5" stroke="#ECECEC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 5.5L15 15.5" stroke="#ECECEC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </components.MultiValueRemove>
        )
      }}
      menuPosition="fixed"
      styles={colourStyles}
      options={options}
      value={value}
      onChange={(values) => onChange(values as SelectOption[])}
      noOptionsMessage={() => 'Ничего не найдено'}
    />
  )
};

export default RebusSelect;