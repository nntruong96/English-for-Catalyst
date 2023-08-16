/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import UserName from 'components/UserName';
import moment from 'moment';
import Editor from 'components/Editor';
import { useDispatch } from 'react-redux';
import { updateComment, removeComment } from 'redux/actions/userActions';
export default function Index({
  isTeacher,
  comment,
  canEdit,
  canDelete,
  user,
  classRoom,
  pageSize,
  pageNumber,
}) {
  const [value, setValue] = useState(comment.message);
  const [isEdit, setIsEdit] = useState(false);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();

  const save = () => {
    setUpdating(true);
    dispatch(
      updateComment(
        {
          message: value,
          userId: user._id,
          classRoomId: classRoom._id,
          commentId: comment._id,
          pageSize,
          pageNumber,
        },
        (err, res) => {
          if (!err) {
            setIsEdit(false);
          }
          setUpdating(false);
        }
      )
    );
  };
  const onDelete = () => {
    setUpdating(true);
    dispatch(
      removeComment(
        {
          classRoomId: classRoom._id,
          commentId: comment._id,
          pageSize,
          pageNumber,
        },
        (err, res) => {
          if (!err) {
            setIsEdit(false);
          }
          setUpdating(false);
        }
      )
    );
  };
  return (
    <Box border="1px solid #e3e3e3" p="12px" bg="#F0F2F5" borderRadius="20px">
      <Flex gap="12px" mb={isEdit ? '22px' : 0}>
        <UserName
          fontWeight="bold"
          user={{
            _id: comment.userId,
            firstName: comment.firstName,
            lastName: comment.lastName,
          }}
        >
          <Text
            as="span"
            color={isTeacher ? 'blue' : ''}
            fontWeight="normal"
            ml="4px"
          >
            {isTeacher ? '(teacher)' : '(student)'}
          </Text>
        </UserName>
        {isEdit && (
          <>
            <Button
              size="sm"
              onClick={() => setIsEdit(false)}
              isDisabled={updating}
              isLoading={updating}
              loadingText="Cancel"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              colorScheme="blue"
              onClick={save}
              isDisabled={updating}
              isLoading={updating}
              loadingText="Save"
            >
              Save
            </Button>
          </>
        )}
        {canEdit && !isEdit && (
          <Button
            size="sm"
            colorScheme="blue"
            onClick={() => setIsEdit(true)}
            isDisabled={updating}
            isLoading={updating}
            loadingText="Edit"
          >
            Edit
          </Button>
        )}
        {canDelete && !isEdit && (
          <Button
            size="sm"
            colorScheme="red"
            onClick={onDelete}
            isDisabled={updating}
            isLoading={updating}
            loadingText="Delete"
          >
            Delete
          </Button>
        )}
      </Flex>
      <Editor value={value} onChange={setValue} isView={!isEdit} />
      <Text fontSize="10px" mt="8px">
        {comment.editAt ? 'Edit on' : 'Post on'}{' '}
        {moment(comment.editAt ? comment.editAt : comment.createAt).format(
          'MMMM DD, YYYY, hh:mm:ss'
        )}
      </Text>
    </Box>
  );
}
