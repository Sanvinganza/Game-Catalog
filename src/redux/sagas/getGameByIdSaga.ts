// import { AxiosResponse } from "axios";
// import { all, call, put, takeLatest } from "redux-saga/effects";
// import { getGameById } from "../../api/getGameById";
// import { EGetGameById, fetchGameByIdFailure, fetchGameByIdSuccess } from "../actions/getGameById";
// import { IGame } from "../types/types";


// function* fetchGameByIdSaga() {
//   try {
//     const response: AxiosResponse<IGame[]> = yield call(getGameById());
    
//     yield put(fetchGameByIdSuccess({
//       games: response.data
//     }));
//   } catch (e) {
//     if (e instanceof Error) {
//       yield put(
//         fetchGameByIdFailure({
//           error: e.message
//         })
//       );
//     } else {
//       console.log('Unexpected error', e);
//     }
//   }
// }

// function* getGameByIdSaga() {
//   yield all([takeLatest(EGetGameById.GET_GAME_BY_ID_REQUEST, fetchGameByIdSaga)]);
// }

// export default getGameByIdSaga;