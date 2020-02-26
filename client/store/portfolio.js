import axios from 'axios';

/**
 * ACTION TYPES
 */

const GOT_PORTFOLIO = 'GOT_PORTFOLIO';

/**
 * INITIAL STATE
 */

const defaultPortfolio = { portfolio: null };

/**
 * ACTION CREATORS
 */

const gotPortfolio = portfolio => ({
  type: GOT_PORTFOLIO,
  portfolio
});

/**
 * THUNK CREATORS
 */

export const getPortfolioThunkCreator = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/portfolio/`);
    dispatch(gotPortfolio(res.data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */

export default function(state = defaultPortfolio, action) {
  switch (action.type) {
    case GOT_PORTFOLIO:
      return { ...state, portfolio: action.portfolio };
    default:
      return state;
  }
}
