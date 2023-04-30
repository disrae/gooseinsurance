import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import { loginStart, loginSuccess, loginFailure } from './authSlice';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, any>;

export function login(email: string, password: string): ThunkResult<void> {
  return async (dispatch) => {
    try {
      dispatch(loginStart());

      const response = await fetch(
        'https://gslwn81z5i.execute-api.us-east-2.amazonaws.com/goose/technical-challenge/login',
        {
          method: 'POST',
          body: JSON.stringify({
            // email: 'candidate@gooseinsurance.com',
            // password: 'gooseinsurance',
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        const { error } = await response.json();
        if (response.status === 400) {
          dispatch(loginFailure({ error }));
        }
        return;
      }

      const loginPayload = await response.json();
      dispatch(loginSuccess(loginPayload));
    } catch (error) {
      dispatch(loginFailure({ error: 'Unhandled failure on login' }));
    }
  };
}
