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
import ClassroomSetting from './ClassroomSettingTab';
import ClassroomStudents from './ClassroomStudents';
import ClassroomGradeActivites from './ClassroomGradeActivites';
import ClassroomCertificate from './ClassroomCertificate';
const TABS = [
  {
    title: 'Classroom Details',
    role: [2],
    component: (props) => <ClassroomDetails {...props} />,
  },
  {
    title: 'Classroom Settings',
    role: [0, 1],
    component: (props) => <ClassroomSetting {...props} />,
  },
  {
    title: 'My Classmates',
    role: [2],
    component: (props) => <ClassmatesTab {...props} />,
  },
  {
    title: 'My Students',
    role: [0, 1],
    component: (props) => <ClassroomStudents {...props} />,
  },
  {
    title: 'The Wall',
    role: [0, 1, 2],
    component: (props) => <TheWallTab {...props} />,
  },
  {
    title: 'Grade Activies',
    role: [0, 1],
    component: (props) => <ClassroomGradeActivites {...props} />,
  },
  {
    title: 'Grade Certificate',
    role: [0, 1],
    component: (props) => <ClassroomCertificate {...props} />,
  },
];
export default function Index(props) {
  const { classRoom, units, user } = useShallowEqualSelector((state) => {
    return {
      classRoom: state.user.classRoom,
      units: state.documents.units,
      user: state.user.user,
    };
  });
  if (!classRoom || !classRoom._id) {
    return null;
  }
  return (
    <Box mt="22px">
      <TitlePage title={classRoom.name} />
      <Tabs variant="enclosed" mt="22px">
        <TabList>
          {TABS.map((item, index) => {
            if (item.role.includes(user.role)) {
              return <Tab key={index}>{item.title}</Tab>;
            }
            return null;
          })}
        </TabList>
        <TabPanels>
          {TABS.map((item, index) => {
            if (item.role.includes(user.role)) {
              return (
                <TabPanel key={index}>
                  {item.component({
                    classRoom,
                    user,
                    units,
                  })}
                </TabPanel>
              );
            }
            return null;
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
