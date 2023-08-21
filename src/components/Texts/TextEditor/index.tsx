/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React, { Dispatch, SetStateAction } from 'react';
import dynamic from 'next/dynamic';

// style
import { StyledTextEditor } from './style';

// libraries
import { EditorProps, EditorState } from 'react-draft-wysiwyg';

interface TextEditorProps {
  editorState: EditorState;
  readOnly?: boolean;
  onSave?: () => void;
  onEditorStateChange?: Dispatch<SetStateAction<EditorState>>;
}

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);

export const TextEditor: React.FC<TextEditorProps> = ({
  editorState,
  readOnly = false,
  onSave,
  onEditorStateChange
}) => {
  const uploadCallback = (file: Blob) => {
    console.log('== file == : ', file);
    // return new Promise((resolve, reject) => {
    //     const reader = new FileReader();

    //     reader.onloadend = async () => {
    //         const formData = new FormData();
    //         formData.append("multipartFiles", file);
    //         const res = await axios.post('http://localhost:8080/uploadImage', formData);

    //         resolve({ data: { link: res.data } });
    //     };

    //     reader.readAsDataURL(file);
    // });
  };

  // toolbar 설정
  const toolbar = {
    inline: { inDropdown: true },
    list: { inDropdown: true }, // list 드롭다운
    textAlign: { inDropdown: true }, // align 드롭다운
    link: { inDropdown: true }, // link 드롭다운
    history: { inDropdown: false }, // history 드롭다운
    image: { uploadCallback: uploadCallback } // 이미지 커스텀 업로드
  };

  // 언어 설정
  const localization = {
    locale: 'ko'
  };

  return (
    <StyledTextEditor>
      <div className="editor-wrapper">
        <Editor
          readOnly={readOnly}
          editorState={editorState}
          toolbarHidden={readOnly}
          toolbarClassName="text-editor-toolbar"
          wrapperClassName="text-editor-wrapper"
          editorClassName="text-editor"
          onEditorStateChange={onEditorStateChange}
          toolbar={toolbar}
          localization={localization}
        />
      </div>
    </StyledTextEditor>
  );
};
