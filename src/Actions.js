import { CHANGE_SEARCHFIELD } from './Constants';

export const setSearchfield = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})
