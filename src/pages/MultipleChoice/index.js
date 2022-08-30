/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import { Link } from 'react-router-dom';
import QuestionRadioList from 'components/QuestionRadioList';
import StatusQuizTest from 'components/StatusQuizTest';
export default function MultipleChoice({
  data,
  status = 0,
  unitNumber,
  ans = [],
}) {
  console.log({ ans });
  const [ansRender, setAns] = useState(ans);
  const onSubmit = () => {
    console.log('submit');
  };
  const onRedu = () => {
    console.log('onRedu');
  };
  const onAnsChange = (index, value) => {
    let _ans = [...ansRender];
    _ans[index] = value;
    setAns(_ans);
  };
  const isDisabled = () => {
    let disabled = !Boolean(ansRender.length);
    for (let i = 0; i < data?.data?.length; i++) {
      let item = ansRender[i];
      if (item === undefined || item === null) {
        disabled = true;
      }
    }
    return disabled;
  };
  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        Select the best definition of the word or phrase
      </TitleWelComeActivity>
      <Flex direction="column" gap="12px" mt="22px" mb="22px">
        <QuestionRadioList
          data={data.data}
          ans={ansRender}
          onChange={onAnsChange}
          isDisabled={Boolean(status === -1 || status === 2)}
          status={status}
        />
      </Flex>
      <StatusQuizTest
        status={status}
        text={{
          2: 'Congratulations... you passed the Multiple choice.',
          '-1': '',
        }}
      />
      <Flex mt="22px" gap="22">
        {status === 0 ? (
          <>
            <Button
              onClick={onSubmit}
              isDisabled={isDisabled()}
              colorScheme="blue"
            >
              Submit
            </Button>
            <Button as={Link} to={`/unit/${unitNumber}`}>
              CANCEL
            </Button>
          </>
        ) : (
          <>
            {' '}
            <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
              GO TO UNIT MENU
            </Button>
            <Button colorScheme="red" onClick={onRedu}>
              REDO
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
}
