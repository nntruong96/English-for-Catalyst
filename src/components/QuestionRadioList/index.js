/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import {
  Box,
  Flex,
  RadioGroup,
  Stack,
  Text,
  Radio,
  Icon,
} from '@chakra-ui/react';
import { BsCheckCircle, BsFillXCircleFill } from 'react-icons/bs';
export default function Index({
  data,
  isDisabled,
  onChange,
  ans = [],
  status,
}) {
  return (
    <Flex direction="column" gap="16px">
      {data.map((item, index) => {
        return (
          <Box key={index}>
            <Text fontWeight="bold" mb="12px">
              {index + 1}. {item.question}
            </Text>
            <RadioGroup
              onChange={(value) => {
                onChange(index, Number(value));
              }}
              value={ans[index]}
              isDisabled={isDisabled}
            >
              <Stack direction="column">
                {item.listAns.map((_item, _index) => (
                  <Radio key={_index} value={_index}>
                    {_item}
                    {(status === -1 || status === 2) &&
                    _index === ans[index] ? (
                      Number(item.ans) === Number(ans[index]) ? (
                        <Icon as={BsCheckCircle} color="green" ml="12px" />
                      ) : (
                        <Icon as={BsFillXCircleFill} ml="12px" color="red" />
                      )
                    ) : null}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        );
      })}
    </Flex>
  );
}
