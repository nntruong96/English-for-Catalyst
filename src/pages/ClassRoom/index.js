/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TitlePage from 'components/TitlePage';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import ClassroomDetails from './ClassroomDetailsTab';
import ClassmatesTab from './ClassmatesTab';
import TheWallTab from './TheWallTab';
export default function Index(props) {
  const { classRoom, units, user } = useShallowEqualSelector((state) => {
    return {
      classRoom: state.user.classRoom,
      units: state.documents.units,
      user: state.user.user,
    };
  });
  console.log('classRoom', classRoom);
  if (!classRoom || !classRoom._id) {
    return null;
  }
  return (
    <Box mt="22px">
      <TitlePage title={classRoom.name} />
      <Tabs variant="enclosed" mt="22px">
        <TabList>
          <Tab>Classroom Details</Tab>
          <Tab>My Classmates</Tab>
          <Tab>The Wall</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ClassroomDetails classRoom={classRoom} />
          </TabPanel>
          <TabPanel>
            <ClassmatesTab classRoom={classRoom} units={units} user={user} />
          </TabPanel>
          <TabPanel>
            <TheWallTab classRoom={classRoom} user={user} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
