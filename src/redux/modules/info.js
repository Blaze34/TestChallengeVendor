import update from 'react/lib/update';

const SET_PHONE = 'info/SET_PHONE';
const CHANGE_BALANCE = 'info/CHANGE_BALANCE';
const RESET = 'info/RESET';

const initialState = {balance: 0};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PHONE:
      return update(state, {
        phone: {$set: action.phone}
      });
    case CHANGE_BALANCE:
      return update(state, {
        balance: {$apply: (value) => value + action.amount}
      });
    case RESET:
      return {...initialState};
    default:
      return state;
  }
}

export function setPhone(phone) {
  return {
    phone,
    type: SET_PHONE
  };
}

export function changeBalance(amount) {
  return {
    amount,
    type: CHANGE_BALANCE
  };
}

export function reset() {
  return {
    type: RESET
  };
}
