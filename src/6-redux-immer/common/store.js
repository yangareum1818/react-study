import { combineReducers, legacy_createStore } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
/**
 * 리액트 상탯값 리덕스로 관리하기
 * : 스토어 객체를 원하는 곳에서 가져다 사용할 수 있도록 하기 위해 store.js 파일로 분리한다. (index.js => store.js)
 * 1. react-redux 패키지 없이 직접 구현하기.
 * 2. react-redux 패키지를 이용해 구현하기.
 */

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = legacy_createStore(reducer);
export default store;
