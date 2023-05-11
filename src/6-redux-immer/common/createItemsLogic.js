import CreateReducer from "./createReducer";
/**
 * 리듀서에서 공통 기능 분리하기
 * : 타임라인 코드와 친구 목록 코드에는 서로 중복된 코드를 분리
 *
 * 1. 배열과 관련된 액션 타입과 액션 생성자 함수
 * 2. 초기 상탯값을 빈 배열로 정의
 * 3. 배열의 데이터를 추가, 삭제, 수정하는 리듀서 코드
 */

function createItemLogic(name) {
  // 배열의 고유한 이름을 매개변수로 받는다.
  // 받은 매개변수를 이용해 액션타입을 만든다.
  const ADD = `${name}/ADD`;
  const REMOVE = `${name}/REMOVE`;
  const EDIT = `${name}/EDIT`;

  // 액션 생성자 함수를 만든다.
  const add = (item) => ({ type: ADD, item });
  const remove = (item) => ({ type: REMOVE, item });
  const edit = (item) => ({ type: EDIT, item });

  // 이렇게도 만들어서 첫번째 매개변수를 넣을 수 있는거 아니야 ?
  // const INITIAL_STATE = { [name]: [] };
  const reducer = CreateReducer(
    // 첫 번째 인자로 초깃값으로 빈배열을 넣는다.
    { [name]: [] },
    // ADD와 EDIT를 처리하는 리듀서 코드의 로직은 이전에 작성했던 코드와 동일.
    {
      [ADD]: (state, action) => state[name].push(action.item),
      [REMOVE]: (state, action) => {
        const index = state[name].findIndex(
          (item) => item.id === action.item.id
        );
        state[name].splice(index, 1);
        /**
         * filter메소드를 사용하지 않고 splice메소드를 사용한 이유
         * : 순간의 매개변수의 값만 변경되고, 인쑤로 사용된 변수 v는 변하지 않는다.
         * ex)
         * function myFunc(a) {
         *  a = 20;
         * }
         * let v = 10;
         * myFunc(v);
         * console.log(v);  // 10
         */
      },
      [EDIT]: (state, action) => {
        const index = state[name].findIndex(
          (item) => item.id === action.item.id
        );
        if (index >= 0) state[name][index] = action.item;
      },
    }
  );
  return { add, remove, edit, reducer }; // 액션 생성자 함수와 리듀서함수를 내보낸다.
}
export default createItemLogic;
