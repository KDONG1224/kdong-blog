// base
import React from 'react';

// style
import { StyledWantedForm } from './style';

// libraries
import { FormControl, Input } from '@mui/material';

interface WantedFormProps {
  id: string;
  onChangeEmail: (value: string) => void;
  onChangeName: (value: string) => void;
}

export const WantedForm: React.FC<WantedFormProps> = ({
  id,
  onChangeEmail,
  onChangeName
}) => {
  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChangeEmail) return;

    onChangeEmail(e.currentTarget.value);
  };

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChangeName) return;

    onChangeName(e.currentTarget.value);
  };

  return (
    <StyledWantedForm>
      <div className="wform-wrapper">
        <FormControl className="wform-wrapper-form">
          <Input
            className="wform-wrapper-form-input"
            id={id}
            onChange={handleOnChangeName}
            placeholder="이름 및 회사명을 입력해주세요."
          />

          <Input
            className="wform-wrapper-form-input"
            id={id}
            onChange={handleOnChangeEmail}
            placeholder="이메일을 입력해주세요."
          />
        </FormControl>
      </div>
    </StyledWantedForm>
  );
};
