import createItemLogic from "../common/createItemsLogic";
import CreateReducer from "../common/createReducer";
import mergeReducers from "../common/mergeReducers";

/**
 * 타임 라인을 위한 리덕스 코드
 */

/** 기존코드 리펙토링 한 코드.
 * 공통적으로 사용되는 기능을 분리한 파일 createItemLogic.js
 */
const {
  add,
  remove,
  edit,
  reducer: timelinesReducer,
} = createItemLogic("timelines");

const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = CreateReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
// mergeREducers()함수를 이용해 공통 로직의 리듀서 함수와 직접 작성한 리듀서 함수를 합친다.
// 리듀서 함수의 배열을 입력으로 받는다.

/**
 * 기존 코드
 */
// // 액션 코드
// const ADD = "timeline/ADD";
// const REMOVE = "timeline/REMOVE";
// const EDIT = "timeline/EDIT";
// const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

// // 액션 생성자 함수
// export const addTimeline = (timeline) => ({ type: ADD, timeline });
// export const removeTimeline = (timeline) => ({ type: REMOVE, timeline });
// export const editTimeline = (timeline) => ({ type: EDIT, timeline });
// export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

// // 기본값 STATE
// const INITIAL_STATE = { timelines: [], nexPage: 0 };

// // 리듀서 함수
// const reducer = CreateReducer(INITIAL_STATE, {
//   [ADD]: (state, action) => state.timelines.push(action.timeline),
//   [REMOVE]: (state, action) =>
//     state.timelines.filter((timeline) => timeline.id !== action.timeline.id),
//   [EDIT]: (state, action) => {
//     const index = state.timelines.findIndex(
//       (timeline) => timeline.id === action.timeline.id
//     );
//     if (index >= 0) state.timelines[index] = action.timeline;
//   },
//   [INCREASE_NEXT_PAGE]: (state, action) => (state.nexPage += 1),
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
