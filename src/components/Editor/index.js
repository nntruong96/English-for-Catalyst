/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box } from '@chakra-ui/react';
import './index.css';
export default function Index({
  value = '',
  onChange = () => {},
  isView,
  ...style
}) {
  const _onChange = (e, editor) => onChange(editor.getData());
  return (
    <Box className={isView ? 'editer-view' : ''}>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            '|',
            'undo',
            'redo',
          ],
          ckfinder: {
            uploadUrl: '/api/v1/settings/uploadImage',
          },
        }}
        onChange={_onChange}
        {...style}
      />
    </Box>
  );
}
