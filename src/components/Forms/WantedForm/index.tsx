// base
import React from 'react';

// style
import { StyledWantedForm } from './style';

// libraries
import { FormControl, Input } from '@mui/material';

interface WantedFormProps {
  onChange: (value: string) => void;
}

export const WantedForm: React.FC<WantedFormProps> = ({ onChange }) => {
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
            id="subscribeEmail"
            placeholder="이메일 주소를 입력해주세요."
            onChange={handleOnChange}
          />
        </FormControl>
      </div>
    </StyledWantedForm>
  );
};
