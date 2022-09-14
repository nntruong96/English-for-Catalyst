/**
 * Copyright (c) 2022 - KuKuLu Vietnam Limited
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
export const calculatePercentageScoreListening = ({
  ans,
  userAns,
  countSubmit,
}) => {
  let correct = 0;
  ans.forEach((item, index) => {
    if (item === userAns[index]) {
      correct++;
    }
  });
  return Math.floor((correct / countSubmit) * 100);
};
export const isNotStudent = (user) => {
  return Number(user.role) !== 2;
};
export const deepClone = (data) => {
  return JSON.parse(JSON.stringify(data));
};
export const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};
export const isEmptyAns = (ans) => {
  return ans === undefined || ans === null || ans === '';
};
export const checkScorePass = (countAnsCorrect, numberQuestion) => {
  if (countAnsCorrect / numberQuestion > 0.85) {
    return true;
  }
  return false;
};

export const compact = (string = '', lg = 20, position) => {
  if (string?.length > lg) {
    if (position === 'end') {
      return string.substr(0, lg) + '...';
    }

    return (
      string.substring(0, lg / 2) +
      '...' +
      string.substring(string.length - lg / 2, string.length)
    );
  }

  return string;
};
export const getName = (user = { firstName: '', lastName: '' }) => {
  return user.firstName + ' ' + user.lastName;
};
const COMPUTER_GRADE = [4, 5];
const STEACHER_GRADE = [6, 7];
export const calGrade = ({ userUnits, rootUnits }) => {
  let teacher = [],
    computerGrade = [],
    _units = [],
    unitComplete = 0,
    res = {};
  userUnits?.forEach((unit, index) => {
    let _unit = { actitivies: [], title: rootUnits[index].title },
      count = 0,
      completeTime = 0,
      unitGrade = [];
    unit?.actitivies?.forEach((activi) => {
      if ([-1, 2].includes(activi.status)) {
        _unit.actitivies.push({
          ...activi,
        });
        completeTime = Math.max(completeTime, activi.updateAt || 1);
        count++;
        if (STEACHER_GRADE.includes(activi.type)) {
          if (typeof activi.grade === 'number') {
            teacher.push(activi.grade || 0);
            unitGrade.push(activi.grade || 0);
          } else {
            //writing have to grade for content and for grama
            if (Array.isArray(activi.grade)) {
              activi.grade.forEach((item) => {
                teacher.push(item);
                unitGrade.push(item);
              });
            }
          }
        }
        if (COMPUTER_GRADE.includes(activi.type)) {
          if (typeof activi.grade === 'number') {
            computerGrade.push(activi.grade || 0);
            unitGrade.push(activi.grade || 0);
          }
        }
      }

      if (STEACHER_GRADE.includes(activi.type) && activi.status === 1) {
        _unit.actitivies.push({
          ...activi,
        });
      }
    });

    if (unit?.actitivies?.length === count) {
      unitComplete++;
      _unit.complete = true;
      _unit.updateAt = completeTime;
      _unit.grade = unitGrade.length
        ? Number.parseInt(unitGrade.reduce((a, b) => a + b) / unitGrade.length)
        : 0;
    }
    _units.push(_unit);
  });
  res.units = _units;
  res.numberUnitComplete = unitComplete;
  if (!teacher.length) {
    res.teacherGrade = 0;
  } else {
    let _sum = teacher.reduce((a, b) => a + b);
    res.teacherGrade = Number.parseInt(_sum / teacher.length);
  }

  if (!computerGrade.length) {
    res.computerGrade = 0;
  } else {
    let _sum = computerGrade.reduce((a, b) => a + b);
    res.computerGrade = Number.parseInt(_sum / computerGrade.length);
  }
  return res;
};
const Constants = {
  ACTIVITES_NAME: [
    'vocabulary',
    'reading',
    'choice',
    'listening',
    'spelling',
    'speaking',
    'wringting',
  ],
  ACTIVITES_NAME_TO_TITLE: {
    vocabulary: 'Vocabulary',
    reading: 'Reading Aactivity',
    choice: 'Multiple Choice',
    listening: 'Listening Comprehension',
    spelling: 'Spelling and Recognition',
    speaking: 'Speaking Activity',
    wringting: 'Wringting Activity',
  },
  SCORE: [
    { text: 'A+(100)', value: 100 },
    { text: 'A(90)', value: 90 },
    { text: 'B(80)', value: 80 },
    { text: 'C(70)', value: 70 },
    { text: 'D(60)', value: 60 },
    { text: 'F(50)', value: 50 },
  ],
};
export default Constants;
