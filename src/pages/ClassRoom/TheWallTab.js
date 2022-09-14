/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Flex, Button, Textarea } from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { postComment } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { getName } from 'util/Constants';
import moment from 'moment';
import UserName from 'components/UserName';
export default function Index({ classRoom, user }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e, editor) => {
    let value = editor.getData();
    setValue(value);
  };
  const submit = () => {
    dispatch(
      postComment(
        {
          message: value,
          userId: user._id,
          crateAt: Date.now(),
          classRoomId: classRoom._id,
        },
        (err, res) => {
          if (!err) {
            setValue('');
          }
        }
      )
    );
  };
  const { comments } = classRoom;
  return (
    <Box>
      <Flex gap="22px" flexDirection="column">
        {!comments.length ? (
          <Text>No post</Text>
        ) : (
          comments.map((comment, index) => {
            let isTeacher = false;
            let userData = classRoom.students.find(
              (item) => item._id === comment.userId
            );

            if (!userData) {
              userData = classRoom.teachers.find(
                (item) => item._id === comment.userId
              );
              isTeacher = true;
            }
            if (!userData) {
              return null;
            }
            return (
              <Box
                key={index}
                border="1px solid #e3e3e3"
                p="12px"
                bg="#F0F2F5"
                borderRadius="20px"
              >
                <UserName fontWeight="bold" user={userData}>
                  <Text
                    as="span"
                    color={isTeacher ? 'blue' : ''}
                    fontWeight="normal"
                    ml="4px"
                  >
                    {isTeacher ? '(teacher)' : '(student)'}
                  </Text>
                </UserName>
                <Text
                  dangerouslySetInnerHTML={{ __html: comment.message }}
                ></Text>
                <Text fontSize="10px" mt="8px">
                  Post on{' '}
                  {moment(comment.createAt).format('MMMM DD, YYYY, hh:mm:ss')}
                </Text>
              </Box>
            );
          })
        )}
      </Flex>
      <Box mt="22px">
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
          onChange={onInputChange}
          // disabled={disabled}
        />
      </Box>
      <Flex justifyContent="flex-end" w="full">
        <Button colorScheme="blue" mt="12px" onClick={submit}>
          POST
        </Button>
      </Flex>
    </Box>
  );
}
