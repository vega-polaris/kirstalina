import axios from 'axios';

/**
 * ACTION TYPES
 */

const GOT_USER_TRANSACTIONS = 'GOT_USER_TRANSACTIONS';

/**
 * INITIAL STATE
 * const defaultUser = {};
 */

const defaultTransactions = { transactions: null };

/**
 * ACTION CREATORS
 * const getUser = user => ({type: GET_USER, user});
 */

const gotUserTransactions = transactions => ({
  type: GOT_USER_TRANSACTIONS,
  transactions
});

/**
 * THUNK CREATORS
 * export const me = () => async dispatch => {
    try {
      const res = await axios.get('/auth/me');
      dispatch(getUser(res.data || defaultUser));
    } catch (err) {
      console.error(err);
    }
  };
 */

export const getUserTransactionsThunkCreator = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/transactions/`);
    dispatch(gotUserTransactions(res.data));
  } catch (err) {
    console.error(err);
  }
};
/**
 * REDUCER
 * export default function(state = defaultUser, action) {
    switch (action.type) {
      case GET_USER:
        return action.user;
      default:
        return state;
    }
  }
 */

export default function(state = defaultTransactions, action) {
  switch (action.type) {
    case GOT_USER_TRANSACTIONS:
      return { ...state, transactions: action.transactions };
    default:
      return state;
  }
}
