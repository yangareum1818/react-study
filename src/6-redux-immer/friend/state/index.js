import createItemLogic from "../../common/createItemsLogic";
import CreateReducer from "../../common/createReducer";
import mergeReducers from "../../common/mergeReducers";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

/**
 * 친구 목록을 위한 리덕스 코드
 *
 * 여러 상탯값 관리 + 추가 필터링 옵션 (나이, 개수 제한) + reselect 패키지를 사용함으로 구조 변경.
 * friend/state.js => friend/state/index.js
 */

/**
 * 기존 코드 리펙토링 한 코드 + 여러 상탯값 반환하기 위한 관리 (연령제한, 개수제한)
 * friend/state.js 였던 상태
 */
const {
  add,
  remove,
  edit,
  reducer: friendsReducer,
} = createItemLogic("friends");

const SET_AGE_LIMIT = "friend/SET_AGE_LIMIT";
const SET_SHOW_LIMIT = "friend/SET_SHOW_LIMIT";

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = (showLimit) => ({
  type: SET_SHOW_LIMIT,
  showLimit,
});

const INITIAL_STATE = { ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT };
const reducer = CreateReducer(INITIAL_STATE, {
  [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
});
const reducers = [reducer, friendsReducer];
export default mergeReducers(reducers);

/** 기존코드 리펙토링 한 코드.
 * 공통적으로 사용되는 기능을 분리한 파일 createItemLogic.js
 */
// const { add, remove, edit, reducer } = createItemLogic("friends");
// export const addFriend = add;
// export const removeFriend = remove;
// export const editFriend = edit;
// export default reducer;

/**
 * 기존 코드
 */
// // 액션 action
// const ADD = "friend/ADD";
// const REMOVE = "friend/REMOVE";
// const EDIT = "friend/EDIT";

// // 액션 생성자 함수
// export const addFriend = (friend) => ({ type: ADD, friend });
// export const removeFriend = (friend) => ({ type: REMOVE, friend });
// export const editFriend = (friend) => ({ type: EDIT, friend });

// // 기본값 STATE
// const INITIAL_STATE = { friends: [] };

// // 리듀서 함수
// const reducer = CreateReducer(INITIAL_STATE, {
//   [ADD]: (state, action) => state.friends.push(action.friend),
//   [REMOVE]: (state, action) =>
//     state.friends.filter((friend) => friend.id !== action.friend.id),
//   [EDIT]: (state, action) => {
//     const index = state.friends.findIndex(
//       (friend) => friend.id === action.friend.id
//     );
//     if (index >= 0) state.friends[index] = action.friend;
//   },
// });
// export default reducer;

/**
 * 덕스(ducks) 패턴
 * 1. 연관된 액션 타입, 액션 생성자 함수, 리듀서 함수를 하나의 파일로 작성
 * 2. 리듀서 함수는 export default 키워드로 내보낸다.
 * 3. 액션 생성자 함순는 export 키워드로 내보낸다.
 * 4. 액션 타입은 접두사와 액션 이름을 조합해서 만든다.
 *
 * 대부분의 경우 덕스 패턴으로 리덕스 코드로 작성하는 것이 효율적이다.
 * but, 특정 파일의 코드가 많아지면 굳이 하나의 파일을 고집할 필요는 없다.
 *
 * ex) redux-thunk 패키지를 이용해 비동기 코드를 작성하는 경우.
 * 1. 액션 생성자 함수의 양이 많아진다.
 * : 이럴 때, 리듀서 코드와 액션 코드를 별도의 파일로 분리하는게 좋다.
 */
