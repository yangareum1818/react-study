import { Provider } from "react-redux";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";
import store from "./common/store";
import { combineReducers, legacy_createStore } from "redux";
import friendReducer, {
  addFriend,
  editFriend,
  removeFriend,
} from "./friend/state";
import timelineReducer, {
  addTimeline,
  editTimeline,
  increaseNextPage,
  removeTimeline,
} from "./timeline/state";

function IndexReduxImmer() {
  /**
  * common/store.js를 만들어 리덕스로 관리하기 위해
  * 밑에 코드 들을 store.js파일에서 관리된다.
  * 
  //여러 리듀서 하나로 합치기
  
  // combineReducers()함수를 이용해 두개의 리듀서를 하나로 합친다.
  // 상댓값에 각각 timeline, friend란 이름으로 데이터 저장
  const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer,
  });

  const store = legacy_createStore(reducer); // 스토어 생성
  // 디버깅을 위해 액션 처리가 끝날 때마다 상탯값을 로그에 출력
  store.subscribe(() => {
    const state = store.getState();
    console.log(state);
  });

  // 타임라인을 테스트하기 위해 다섯개의 액션 생성
  store.dispatch(addTimeline({ id: 1, desc: "코딩은 즐겁니?" }));
  store.dispatch(addTimeline({ id: 2, desc: "리덕스 개어려워" }));
  store.dispatch(increaseNextPage());
  store.dispatch(editTimeline({ id: 2, desc: "리덕스 복잡하다 -" }));
  store.dispatch(removeTimeline({ id: 1, desc: "코딩은 즐겁니?" }));

  // 친구 목록을 테스트하기 위해 네 개의 액션 생성
  store.dispatch(addFriend({ id: 1, name: "아이유" }));
  store.dispatch(addFriend({ id: 2, name: "손나은" }));
  store.dispatch(editFriend({ id: 2, name: "수지" }));
  store.dispatch(removeFriend({ id: 1, name: "아이유" }));
  */
  return (
    /**
     * react-redux 패키지 이용하기
     * 1. store객체를 속성값으로 넣는다.
     * 2. 전달받은 스토어 객체의 subscribe메서드를 호출해 액션처리가 끝날 때 마다 알림을 받는다.
     * 3. 컨텍스트 API를 사용해 리덕스의 상탯값을 하위 컴포넌트로 전달한다.
     */
    // <>
    //   <hr />
    //   <h1>6장 Redux</h1>
    //   <FriendMain />
    //   <TimelineMain />
    // </>

    <Provider store={store}>
      <hr />
      <h1>6장 Redux</h1>
      <FriendMain ageLimits={"30"} />
      <FriendMain ageLimits={"15"} />
      <TimelineMain />
    </Provider>
  );
}
export default IndexReduxImmer;
