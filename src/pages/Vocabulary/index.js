/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import VocabularyItem from 'components/VocabylaryItem';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import { Link } from 'react-router-dom';
export default function Vocabulary({ data, status = 0, unitNumber }) {
  const onSubmit = () => {
    console.log('submit');
  };
  const onRedu = () => {
    console.log('onRedu');
  };
  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        Please study the <strong>{data.data.length}</strong> vocabulary below
        and press the <strong>Mark Complete</strong> button to continue.
      </TitleWelComeActivity>
      <Flex direction="column" gap="12px" mt="22px">
        {data.data.map((item, index) => {
          return (
            <VocabularyItem
              bg="#f5f5f5"
              p="22px"
              border="1px solid #e3e3e3"
              vocabulary={item}
              key={index}
            />
          );
        })}
      </Flex>
      <Flex mt="22px" gap="22">
        {status === 0 ? (
          <>
            <Button onClick={onSubmit} colorScheme="blue">
              Mark Activity Complete
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
