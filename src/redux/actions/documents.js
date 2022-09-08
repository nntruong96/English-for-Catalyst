import { documentsConstants } from '../constants';
import SettingClient from '../../rest_client/settingClient';
const settingClient = new SettingClient();

const { FETCH_DOCUMENTS, FETCH_DOCUMENTS_SUCCESS, FETCH_DOCUMENTS_FAILD } =
  documentsConstants;

/**
 * @function
 * @param {Object}  - the email.
 */
export const getUnits = () => {
  let request = () => ({ type: FETCH_DOCUMENTS });
  let success = (data) => ({ type: FETCH_DOCUMENTS_SUCCESS, data });
  let failure = () => ({ type: FETCH_DOCUMENTS_FAILD });
  return (dispatch) => {
    dispatch(request());
    return settingClient
      .getSetting()
      .then((res) => {
        if (res && res.data) {
          if (res.data.error_code) {
            return dispatch(failure());
          }
          return dispatch(success(res.data));
        }
        dispatch(failure());
      })
      .catch((err) => {
        console.log('err', err);
        dispatch(failure());
      });
  };
};
