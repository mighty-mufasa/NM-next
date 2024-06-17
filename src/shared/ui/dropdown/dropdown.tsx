'use client';

import { useState } from 'react';
import css from './dropdown.module.scss';
import Image from 'next/image';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

export default function Dropdown({ options, onSelect }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`${css.dropdown} ${isOpen ? css.active : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <button className={css.dropdownToggle}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </button>
        <div className={`${css.dropdownMenu} ${isOpen ? css.active : ''}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={css.dropdownItem}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          className={`${css.arrow} ${isOpen ? css.arrowActive : ''}`}
          src={'/assets/icons/ChevronDown.svg'}
          alt="arrow"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
}
