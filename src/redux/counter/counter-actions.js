import { createAction } from '@reduxjs/toolkit';
import actionTypes from './counter-types';

// const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });

// toolkit
const increment = createAction(actionTypes.INCREMENT);
const decrement = createAction(actionTypes.DECREMENT);

export default { increment, decrement };
