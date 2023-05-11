/**
 * 여러 리듀서를 합치는 함수 mergeReducers()함수
 * 사용이유.
 * 1. combineReducers함수를 이용하면 상탯값의 깊이가 불필요하게 깊어진다.
 * 2. 불필요한 이름의 객체가 생성된다.
 * 리펙토링 전과 결과는 같지만, 공통 로직을 분리했기 때문에 코드는 더욱 간결해진다.
 */
function mergeReducers(reducers) {
  return function (state, action) {
    if (!state) {
      return reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {});
      // 초기 상탯값을 계산할 때는 모든 리듀서 함수의 결과값을 합친다.
    } else {
      // 초기화 단계가 아니라면 입력된 모든 리듀서를 호출해서 다음 상탯값을 반환한다.
      let nexeState = state;
      for (const r of reducers) {
        nexeState = r(nexeState, action);
      }
      return nexeState;
    }
  };
}
export default mergeReducers;
