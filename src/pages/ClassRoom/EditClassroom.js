/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  Icon,
  Button,
  Checkbox,
  Collapse,
  Flex,
} from '@chakra-ui/react';
import { BsArrowUpDown } from 'react-icons/bs';
import ContainerForm from 'components/ContainerForm';
import { deepClone } from 'util/Constants';
import { updateClassRoom } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';

export default function Index({ classRoom, onBack }) {
  let {
    _id,
    name,
    classKey = '',
    description,
    settings = {
      writing: {
        min: 65,
        max: 400,
        isDisabled: false,
      },
      speaking: {
        isDisabled: false,
      },
      restarts: true,
      help: true,
    },
  } = classRoom;
  const [data, setData] = useState({
    name,
    classKey,
    description,
    settings,
  });
  const [isOpenBasic, setIsOpenBasic] = useState(true);
  const [isOpenAdvanced, setIsOpenAdvanced] = useState(true);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const onChange = (key, value) => {
    let newData = deepClone(data);
    setData({ ...newData, [key]: value });
  };
  const generateKey = () => {
    let r = generateId(15);
    onChange('classKey', r);
  };
  const onSettingChange = (key, value) => {
    const _setting = deepClone(data.settings);
    onChange('settings', { ..._setting, [key]: value });
  };
  const onWritingChange = (key, value) => {
    let _writing = deepClone(data.settings.writing);
    onSettingChange('writing', {
      ..._writing,
      [key]: value,
    });
  };
  const onSpeakingChange = (key, value) => {
    let _writing = deepClone(data.settings.writing);
    onSettingChange('speaking', {
      ..._writing,
      [key]: value,
    });
  };
  const submit = () => {
    setUpdating(true);
    dispatch(
      updateClassRoom({ settings: data, classRoomId: _id }, (err, res) => {
        console.log(res);
        setUpdating(false);
      })
    );
  };
  const isDisabled = () => {
    let { min, max } = data.settings.writing;
    return !data.name || !data.classKey || min >= max;
  };
  return (
    <ContainerForm title="Edit Classroom">
      <Form
        title="Class name* (5 to 35 characters)"
        value={data.name}
        input={{ placeholder: 'Class name', isDisabled: updating }}
        onChange={onChange}
        objectKey="name"
      />
      <Form
        title="Class key* (8 to 40 characters)"
        value={data.classKey}
        input={{ placeholder: 'Class key', isDisabled: updating }}
        onChange={onChange}
        objectKey="classKey"
      >
        <InputRightElement width="fit-content">
          <Button
            h="100%"
            size="sm"
            onClick={generateKey}
            isDisabled={updating}
          >
            Generate new key
          </Button>
        </InputRightElement>
      </Form>
      <Form
        title="Class description"
        value={data.description}
        input={{ placeholder: 'Class description', isDisabled: updating }}
        onChange={onChange}
        objectKey="description"
        type
      />
      <ContainerForm
        title={
          <Text cursor="pointer" onClick={() => setIsOpenBasic(!isOpenBasic)}>
            Activity Settings (Basic Tier)
          </Text>
        }
        contentStyle={{
          p: 0,
        }}
      >
        <Collapse in={isOpenBasic}>
          <Flex direction="column" p="12px">
            <Checkbox
              isChecked={data.settings.help}
              onChange={(e) => {
                onSettingChange('help', e.target.checked);
              }}
              isDisabled={updating}
              mb="12px"
            >
              Enable activity help
            </Checkbox>
            <Checkbox
              defaultChecked={data.settings.restarts}
              isChecked={data.settings.restarts}
              onChange={(e) => {
                onSettingChange('restarts', e.target.checked);
              }}
              isDisabled={updating}
              mb="12px"
            >
              Enable activity restarts
            </Checkbox>
            <Form
              title="Minimum allowed words in Writing activity*"
              value={data.settings.writing.min}
              onChange={(key, value) => onWritingChange(key, Number(value))}
              input={{
                type: 'number',
                isDisabled: updating,
                max: data.settings.writing.max - 1,
                isInvalid:
                  data.settings.writing.min >= data.settings.writing.max,
              }}
              objectKey="min"
            ></Form>
            <Form
              title="Maximum allowed words in Writing activity*"
              value={data.settings.writing.max}
              input={{
                type: 'number',
                isDisabled: updating,
                min: data.settings.writing.min + 1,
                isInvalid:
                  data.settings.writing.min >= data.settings.writing.max,
              }}
              onChange={(key, value) => onWritingChange(key, Number(value))}
              objectKey="max"
            ></Form>
          </Flex>
        </Collapse>
      </ContainerForm>
      <ContainerForm
        title={
          <Text
            cursor="pointer"
            onClick={() => setIsOpenAdvanced(!isOpenAdvanced)}
          >
            Activity Settings (Advanced Tier)
          </Text>
        }
        contentStyle={{
          p: 0,
        }}
      >
        <Collapse in={isOpenAdvanced}>
          <Flex direction="column" p="12px">
            <Checkbox
              isChecked={data.settings.writing.isDisabled}
              onChange={(e) => {
                onWritingChange('isDisabled', e.target.checked);
              }}
              isDisabled={updating}
              mb="12px"
            >
              Disable all Writing Activities
            </Checkbox>
            <Checkbox
              isChecked={data.settings.speaking.isDisabled}
              onChange={(e) => {
                onSpeakingChange('isDisabled', e.target.checked);
              }}
              isDisabled={updating}
            >
              Disable all Speaking Activitie
            </Checkbox>
          </Flex>
        </Collapse>
      </ContainerForm>
      <Flex mt="22px" gap="22px" justifyContent="flex-end">
        <Button isDisabled={updating} onClick={onBack}>
          CANCEL
        </Button>
        <Button
          colorScheme="blue"
          isDisabled={isDisabled() || updating}
          isLoading={updating}
          loadingText="UPDATE CLASS"
          onClick={submit}
        >
          UPDATE CLASS
        </Button>
      </Flex>
    </ContainerForm>
  );
}

function dec2hex(dec) {
  return dec.toString(16).padStart(2, '0');
}

// generateId :: Integer -> String
function generateId(len) {
  var arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}
const Form = ({
  value,
  title,
  input,
  text,
  type = 0,
  children,
  onChange,
  objectKey,
}) => {
  const _onChange = (e) => {
    onChange(objectKey, e.target.value);
  };
  return (
    <>
      <Text fontWeight="bold" {...text}>
        {title}
      </Text>
      <InputGroup size="md" mt="12px" mb="22px">
        {type ? (
          <Textarea value={value} {...input} onChange={_onChange} />
        ) : (
          <Input value={value} {...input} onChange={_onChange} />
        )}
        {children}
      </InputGroup>
    </>
  );
};
