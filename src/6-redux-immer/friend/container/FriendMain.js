import React, { useEffect, useReducer } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNextFriend } from "../../common/MockData";
import FriendList from "../component/FriendList";
import NumberSelect from "../component/NumberSelect";
import { addFriend, setAgeLimit, setShowLimit } from "../state";
import store from "../../common/store";
import state from "../../timeline/state";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
  makeGetFriendsWithAgeLimit,
} from "../state/selector";

/**
 * 여러 상탯값 관리 + 추가 필터링 옵션 (나이, 개수 제한)
 *
 * 한 가지의 문제점
 * useSelector훅의 선택자 함수의 내부 코드이다.
 * 리덕스에 저장된 원본 데이터를 화면에 보여 줄 데이터로 가공하는데,
 * 리덕스의 액션이 처리될 때마다 새로운 목록을 만드는 연산이 수행되는 점이다.
 * 친구 목록이 변경되지 않았을 때도 새로운 목록을 만드는 연산이 수행되며, 친구 목록의 크기가 크면 클수록 불필요한 연산도 증가한다.
 */
function FriendMain({ ageLimits }) {
  /**
   * reselect 패키지 사용 O
   */
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
    useSelector(
      (state) => [
        getAgeLimit(state),
        getShowLimit(state),
        getFriendsWithAgeLimit(state, ageLimits),
        getFriendsWithAgeShowLimit(state),
      ],
      shallowEqual
    );

  /**
   * reselect 패키지 사용 X
   */
  // const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
  //   useSelector((state) => {
  //     const { friends, ageLimit, showLimit } = state.friend;
  //     const friendsWithAgeLimit = friends.filter(
  //       // filter메소드를 이용해 연령 제한 적용
  //       (friend) => friend.age <= ageLimit
  //     );
  //     return [
  //       ageLimit,
  //       showLimit,
  //       friendsWithAgeLimit,
  //       // 연령 제한이 적용된 목록에 개수 제한을 적용해 새로운 목록 만듦
  //       friendsWithAgeShowLimit.slice(0, showLimit),
  //     ];
  //   }, shallowEqual);
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }
  console.log("FriendMain render");

  return (
    <>
      <button onClick={onAdd}>친구 추가 하기</button>
      <NumberSelect
        /**
         * 연령제한 옵션 view
         * 1. 연령제한 옵션 선택하면 setAgeLimit 액션 생성
         * 2. 리덕스의 상탯값이 변경
         */
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList
        // 연령제한으로 필터링 된 목록을 보여준다.
        friends={friendsWithAgeLimit}
      />
      <NumberSelect
        /**
         * 개수제한 옵션 view
         * 1. 갯수제한 옵션을 선택하면 setShowLimit 액션 생성
         * 2. 리덕스의 상탯값이 변경
         */
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList
        // 연령 제한과 개수 제한이 모두 적용된 친구 목록을 보여준다.
        friends={friendsWithAgeShowLimit}
      />
    </>
  );
}
export default FriendMain;

// 연령제한과 개수 제한을 위한 옵션 목록
const AGE_LIMIT_OPTIONS = [41, 24, 150, 32, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 7, 23, MAX_SHOW_LIMIT];

/**
 * v2. react-redux 패키지 이용하기.
 */
// function FriendMain() {
//   const friends = useSelector((state) => state.friend.friends);
//   const dispatch = useDispatch();

//   function onAdd() {
//     const friend = getNextFriend();
//     dispatch(addFriend(friend));
//   }
//   console.log("FriendMain render");

//   return (
//     <>
//       <button onClick={onAdd}>친구 추가 하기</button>
//       <FriendList friends={friends} />
//     </>
//   );
// }
// export default FriendMain;

/**
 * v1. REDUX 사용하기
 *
 * 문제점 : 친구추가 버튼을 클릭했을 경우, 타임라인 추가도 같이 렌더링 된다.
 * 개선 : 불필요한 컴포넌트 함수가 호출되지 않도록 상탯값 변경 여부를 검사한다.
 *
 * 주석처리 : 기존 코드
 */
// function FriendMain() {
//   const [, forceUpdata] = useReducer((v) => v + 1, 0);

//   // 문제점 개선 부분 ( 상탯값 변경 여부 검사! )
//   useEffect(() => {
//     let prevFriends = store.getState().friend.friends;
//     const unsubscribe = store.subscribe(() => {
//       const friends = store.getState().friend.friends;
//       // 상탯값이 변경 되었을 경우에만 forceUpdata()함수를 호출
//       if (prevFriends !== friends) forceUpdata();

//       prevFriends = friends;
//     });
//     return () => unsubscribe();
//   }, []);
//   // 기존 코드
//   // useEffect(() => {
//   //   const unsubscribe = store.subscribe(() => forceUpdata());
//   //   return () => unsubscribe();
//   // }, []);

//   function onAdd() {
//     const friend = getNextFriend();
//     store.dispatch(addFriend(friend));
//   }
//   console.log("FriendMain rennder");

//   // const friends = store.getState().friend.frineds;

//   return (
//     <>
//       <button onClick={onAdd}>친구 추가</button>
//       <FriendList />
//     </>
//   );
// }
// export default FriendMain;
