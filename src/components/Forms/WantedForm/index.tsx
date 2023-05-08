// base
import React from 'react';

// style
import { StyledWantedForm } from './style';

// libraries
import { FormControl, Input } from '@mui/material';

interface WantedFormProps {
  id: string;
  onChange: (value: string) => void;
}

export const WantedForm: React.FC<WantedFormProps> = ({ id, onChange }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    onChange(e.currentTarget.value);
  };

  return (
    <StyledWantedForm>
      <div className="wform-wrapper">
        <FormControl className="wform-wrapper-form">
          <Input
            className="wform-wrapper-form-input"
            id={id}
            onChange={handleOnChange}
          />
        </FormControl>
      </div>
    </StyledWantedForm>
  );
};
