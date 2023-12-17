// base
import React from 'react';
import dynamic from 'next/dynamic';

// styles
import { StyledBasicTextEditor } from './style';

interface BasicTextEditorProps {
  isEditorReady: boolean;
  editorData: string;
}

interface CKEditorProps {
  data: string;
}

const CKEditorWithCustomEditor = dynamic(
  async () => {
    const { CKEditor } = await import('@ckeditor/ckeditor5-react');
    const Editor = await import('ckeditor5-custom-build/build/ckeditor').then(
      (module) => module.default || module
    );
    return (props: CKEditorProps) => (
      <CKEditor editor={Editor} {...props} disabled />
    );
  },
  { ssr: false }
);

export const BasicTextEditor: React.FC<BasicTextEditorProps> = ({
  isEditorReady,
  editorData
}) => {
  return (
    <StyledBasicTextEditor scrolly={scrollY}>
      {isEditorReady && <CKEditorWithCustomEditor data={editorData} />}
    </StyledBasicTextEditor>
  );
};
