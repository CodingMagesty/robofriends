import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './Constants';

export const setSearchfield = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {

  async function fetchUsers() {
    await dispatch({ type: REQUEST_ROBOTS_PENDING });

    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await resp.json();
      await dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    } catch(error) {
      await dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }, );
    }
  }

  fetchUsers();
}
