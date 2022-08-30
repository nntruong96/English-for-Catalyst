/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Button, Flex, Icon } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import { Link } from 'react-router-dom';
import ButtonPlayAudio from 'components/ButtonPlayAudio';
import TitleForm from 'components/TitlteForm';
import Input from 'components/Input';
import { BsCheckCircle, BsFillXCircleFill } from 'react-icons/bs';
import { calculatePercentageScoreListening } from 'util/Constants';
const STATUS = {
  '-1': 'You scored {{score}}% correct on this activity.',
  0: `Please spell the pronounced <strong>vocabulary term</strong> or
  <strong>abbreviation</strong> correctly. Spaces, hyphens, and case are
  optional.`,
  2: 'You scored {{score}}% correct on this activity.',
};

export default function Listening({ data, unitNumber, userActiviti }) {
  let { countSubmit = 1, status = 0, data: { ans } = {} } = userActiviti;
  const [ansRender, setAns] = useState(ans); //ansRender just will be test
  const [isSubmit, setIsSubmit] = useState(false);
  const [ansStatus, setAnsStatus] = useState(true);
  const [showAns, setShowAns] = useState(false);
  console.log('ansRender', ansRender);
  const grenarateIndex = (defaultIndex = -1) => {
    let _index = Math.floor((defaultIndex + 1) % data.data.length);
    let count = 0;
    while (count < data.data.length) {
      if (['', null, undefined, NaN].includes(ansRender[_index])) {
        break;
      }
      count++;
    }
    return _index;
  };

  const [index, setIndex] = useState(grenarateIndex);
  const [inputValue, setInputValue] = useState(data?.data[index].ans[0]);
  console.log('index', index, data.data[index].ans);

  const onSubmit = () => {
    console.log('submit');
    setIsSubmit(true);
    if (inputValue.trim() === data?.data[index].ans) {
      let _ans = [...ansRender];
      _ans[index] = inputValue;
      setAns(_ans);
      return setAnsStatus(true);
    }
    setAnsStatus(false);
  };
  const nextIndex = () => {
    console.log('nextIndex');
    setIsSubmit(false);
    setShowAns(false);
    let _index = grenarateIndex(index);
    if (data?.data[_index]) {
      setInputValue(data?.data[_index].ans[0]);
      setIndex(_index);
    }
    //call api submit here
  };
  const onRedu = () => {
    console.log('onRedu');
  };
  const playAudio = (_audioUrl) => {
    let audio = new Audio(_audioUrl);
    audio.play();
  };
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  let percentage = '';
  let rootAns = [];
  let count = 0;
  data?.data?.forEach((item, i) => {
    rootAns.push(item.ans);
    if (ansRender[i]) {
      count++;
    }
  });
  percentage = calculatePercentageScoreListening({
    ans: rootAns,
    userAns: ansRender,
    countSubmit,
  });
  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        <Text
          dangerouslySetInnerHTML={{
            __html:
              status === 2
                ? STATUS[status].replace(`{{score}}`, percentage)
                : STATUS[status],
          }}
        ></Text>
      </TitleWelComeActivity>
      {[0, 1].includes(status) ? (
        <Flex flexWrap="wrap" gap="22px">
          <Flex
            direction="column"
            gap="12px"
            mt="22px"
            mb="12px"
            flexWrap="wrap"
            flex={1}
            minW="400px"
          >
            <ButtonPlayAudio
              onClick={() => playAudio(data?.data[index].audioUrl)}
            />
            <Flex alignItems="center" mt="12px">
              <Input
                onChange={onInputChange}
                value={inputValue}
                maxW="500px"
                isDisabled={isSubmit || showAns}
                borderColor={isSubmit ? (ansStatus ? 'green' : 'red') : ''}
              />
              {isSubmit ? (
                ansStatus ? (
                  <Icon
                    as={BsCheckCircle}
                    color="green"
                    ml="12px"
                    width="30px"
                    height="30px"
                  />
                ) : (
                  <Icon as={BsFillXCircleFill} ml="12px" color="red" />
                )
              ) : (
                ''
              )}
            </Flex>
          </Flex>
          {/* <Flex
            flexWrap="wrap"
            gap="12px"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            {percentage ? (
              <Text>
                {count} of {data?.data?.length} complete {percentage}% correct
                so far
              </Text>
            ) : (
              ''
            )}
            {percentage !== 100 ? <Button>Restart</Button> : ''}
          </Flex> */}
        </Flex>
      ) : (
        ''
      )}
      <Flex mt="22px" gap="22">
        {[0, 1].includes(status) ? (
          <>
            {isSubmit || showAns ? (
              <Box>
                {!ansStatus || showAns ? (
                  <Text mb="22px">
                    The correct answer was:{' '}
                    <strong>{data?.data[index].ans}</strong>
                  </Text>
                ) : (
                  ''
                )}
                <Button onClick={nextIndex} colorScheme="green">
                  continue
                </Button>
              </Box>
            ) : (
              <>
                <Button
                  onClick={onSubmit}
                  colorScheme="green"
                  isDisabled={
                    !inputValue || inputValue === data?.data[index].ans[0]
                  }
                >
                  Submit
                </Button>
                <Button colorScheme="blue" onClick={() => setShowAns(true)}>
                  HELP
                </Button>
              </>
            )}
            {/* <Button colorScheme="red">SAVE AND OUT</Button> */}
          </>
        ) : (
          <Box w="full" border="1px solid #e3e3e3" pb="22px">
            <TitleForm text={'Activity Complete'} mb="22px" />
            <Text px="22px">
              If you redo the activity, you can improve your grade.
            </Text>
            <Box px="22px" mt="22px">
              <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
                GO TO UNIT MENU
              </Button>
              <Button colorScheme="red" onClick={onRedu} ml="22px">
                REDO
              </Button>
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
