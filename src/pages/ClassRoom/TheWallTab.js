/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { postComment, getComments } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { deepClone } from 'util/Constants';
import Comment from 'components/Comment';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import Pagination from 'components/Pagination';
export default function Index({ classRoom, user }) {
  const [value, setValue] = useState('');
  const [updating, setUpdating] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const { comments } = useShallowEqualSelector((state) => ({
    comments: state.user.comments,
  }));
  const { data, pageSize, pageNumber, hasFetched, total } = comments;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!hasFetched) {
      setRequesting(true);
      dispatch(
        getComments(
          {
            classroomId: classRoom._id,
            pageSize,
            pageNumber,
          },
          () => {
            setRequesting(false);
          }
        )
      );
    }
  }, [
    hasFetched,
    setRequesting,
    classRoom._id,
    pageSize,
    pageNumber,
    dispatch,
  ]);
  const handlePageClick = (pageNumber) => {
    if (requesting) {
      return;
    }
    setRequesting(true);
    dispatch(
      getComments({ classroomId: classRoom._id, pageNumber, pageSize }, () => {
        setRequesting(false);
      })
    );
  };
  const onInputChange = (e, editor) => {
    let value = editor.getData();
    setValue(value);
  };
  const submit = () => {
    setUpdating(true);
    dispatch(
      postComment(
        {
          message: value,
          userId: user._id,
          crateAt: Date.now(),
          classRoomId: classRoom._id,
          pageNumber,
          pageSize,
        },
        (err, res) => {
          if (!err) {
            setValue('');
          }
          setUpdating(false);
        }
      )
    );
  };
  let _comments = deepClone(data);
  _comments.sort((a, b) => b.createAt - a.createAt);
  return (
    <Box>
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
            // ckfinder: {
            //   uploadUrl: '/api/v1/settings/uploadImage',
            // },
          }}
          onChange={onInputChange}
          // disabled={disabled}
        />
      </Box>
      <Flex justifyContent="flex-end" w="full" mb="22px">
        <Button
          colorScheme="blue"
          mt="12px"
          onClick={submit}
          isDisabled={updating}
          isLoading={updating}
          loadingText="POST"
        >
          POST
        </Button>
      </Flex>
      <Flex justifyContent="flex-end" mb="22px">
        <Pagination
          onPageChange={handlePageClick}
          pageSize={pageSize}
          total={total}
          pageNumber={pageNumber}
          disabled={requesting}
        />
      </Flex>
      <Flex gap="22px" flexDirection="column">
        {!_comments.length ? (
          <Text>No post</Text>
        ) : (
          _comments.map((comment, index) => {
            let isOwner = false,
              isTeacher =
                classRoom.teachers.findIndex(
                  (item) => item._id === comment.userId
                ) >= 0
                  ? true
                  : false;
            isOwner = comment.userId === user._id;
            return (
              <Comment
                key={comment._id}
                isTeacher={isTeacher}
                comment={comment}
                canEdit={isOwner}
                canDelete={isOwner || [0, 1].includes(user.role)}
                user={user}
                classRoom={classRoom}
                pageSize={pageSize}
                pageNumber={pageNumber}
              />
            );
          })
        )}
      </Flex>
    </Box>
  );
}
