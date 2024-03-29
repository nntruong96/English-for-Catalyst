/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState, useEffect } from 'react';
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
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
const TABS = [
  {
    title: 'Classroom Details',
    role: [2],
    key: 0,
    component: (props) => <ClassroomDetails {...props} />,
  },
  {
    title: 'Classroom Settings',
    role: [0, 1],
    key: 1,
    component: (props) => <ClassroomSetting {...props} />,
  },
  {
    title: 'My Classmates',
    role: [2],
    key: 2,
    component: (props) => <ClassmatesTab {...props} />,
  },
  {
    title: 'My Students',
    role: [0, 1],
    key: 3,
    component: (props) => <ClassroomStudents {...props} />,
  },
  {
    title: 'The Wall',
    role: [0, 1, 2],
    key: 4,
    component: (props) => <TheWallTab {...props} />,
  },
  {
    title: 'Grade Activies',
    role: [0, 1],
    key: 5,
    component: (props) => <ClassroomGradeActivites {...props} />,
  },
  {
    title: 'Grade Certificate',
    role: [0, 1],
    key: 6,
    component: (props) => <ClassroomCertificate {...props} />,
  },
];
export default function Index(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState(Number(searchParams.get('tab')) || 0);
  const navigate = useNavigate();
  let tabSearch = Number(searchParams.get('tab'));
  useEffect(() => {
    if (tabSearch !== tab) {
      setTab(tabSearch);
    }
  }, [tabSearch, setTab, tab]);
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
  const onTabClick = (index) => {
    setTab(index);
    setSearchParams({ tab: index });
  };

  let tabs = [];
  TABS.forEach((item) => {
    if (item.role.includes(user.role)) {
      tabs.push(item);
    }
  });

  return (
    <Box mt="22px">
      <TitlePage title={classRoom.name} onBack={() => navigate('/')} />
      <Tabs variant="enclosed" mt="22px" index={tab} onChange={onTabClick}>
        <TabList>
          {tabs.map((item, index) => {
            if (item.role.includes(user.role)) {
              return <Tab key={index}>{item.title}</Tab>;
            }
            return null;
          })}
        </TabList>
        <TabPanels>
          {tabs.map((item, index) => {
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
