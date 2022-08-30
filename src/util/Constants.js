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
  console.log('calculatePercentageScoreListening', ans, userAns, countSubmit);
  let correct = 0;
  ans.forEach((item, index) => {
    if (item === userAns[index]) {
      correct++;
    }
  });
  console.log('correct', correct);
  return Math.floor((correct / countSubmit) * 100);
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
    vocabulary: 'VOCABULARY',
    reading: 'READING ACTIVITY',
    choice: 'Multiple Choice',
    listening: 'Listening Comprehension',
    spelling: 'Spelling and Recognition',
    speaking: 'Speaking Activity',
    wringting: 'Wringting Activity',
  },
};
export default Constants;
