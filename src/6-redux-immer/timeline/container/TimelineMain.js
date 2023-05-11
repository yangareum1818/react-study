import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../common/MockData";
import TimelineList from "../component/TimelineList";
import state, { addTimeline } from "../state";
import store from "../../common/store";

/**
 * v2. react-redux 패키지 이용하기.
 */
function TimelineMain() {
  /**
   * useSelector(선택자 함수) : 상탯값 변경에 반응
   * 1. Hook에 입력하는 함수를 선택자 함수라고 한다.
   * 2. Hook에 반환값으로 들어간다.
   * 3. 이전 반환값과 새로운 반환값을 비교한다.
   * 4. 두 값이 다른 경우에만 컴포넌트를 다시 렌더링 한다.
   *
   * useDispatch() : Hook을 사용하면 dispatch함수를 반환한다.
   * 1. action을 발생시키기 위해 dispatch함수가 필요하다.
   *
   * dispatch : action을 발생시킨다.
   */
  const timelines = useSelector((state) => state.timeline.timelines);
  const dispatch = useDispatch();

  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(addTimeline(timeline));
  }
  console.log("TimelineMain render");

  return (
    <>
      <button onClick={onAdd}>타임라인 추가하기</button>
      <TimelineList timelines={timelines} />
    </>
  );
}
export default TimelineMain;

/**
 * v1. REDUX 사용하기
 *
 * 문제점 : 친구추가 버튼을 클릭했을 경우, 타임라인 추가도 같이 렌더링 된다.
 * 개선 : 불필요한 컴포넌트 함수가 호출되지 않도록 상탯값 변경 여부를 검사한다.
 *
 * 주석처리 : 기존 코드
 */
// function TimelineMain() {
//   const [, forceUpdata] = useReducer((v) => v + 1, 0);

//   // 문제점 개선 부분 ( 상탯값 변경 여부 검사! )
//   useEffect(() => {
//     let prevTimelines = store.getState().timeline.timelines;
//     const unsubscribe = store.subscribe(() => {
//       const timelines = store.getState().timeline.timelines;
//       // 상탯값이 변경 되었을 경우에만 forceUpdata()함수를 호출
//       if (prevTimelines !== timelines) forceUpdata();

//       prevTimelines = timelines;
//     });
//     return () => unsubscribe();
//   }, []);
//   // 기존 코드
//   // useEffect(() => {
//   //   const unsubscribe = store.subscribe(() => forceUpdata());
//   //   return () => unsubscribe();
//   // }, []);

//   function onAdd() {
//     const timeline = getNextTimeline();
//     store.dispatch(addTimeline(timeline));
//   }
//   console.log("TimelineMain render");

//   // const timelines = store.getState().timeline.timelines;

//   return (
//     <>
//       <button onClick={onAdd}>타임라인 추가</button>
//       <TimelineList />
//     </>
//   );
// }
// export default TimelineMain;
