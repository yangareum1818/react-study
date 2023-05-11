import { produce } from "immer";

/**
 * 상황
 * * 타임라인 (배열로 관리)
 * 1. 게시물을 배열에 추가 혹은 삭제
 * 2. 각 게시물의 좋아요 숫자 (변하는 값 : 추가된 게시물 데이터를 수정 가능하게)
 * 3-1. 무한 스크롤 기능 (로딩된 데이터 끝에 도달하면 자동으로 다음에 이어지는 게시물 데이터를 서버로 요청)
 * 3-2. 이를 위해, 다음에 요청할 페이지 번호를 관리해야 한다.
 *
 * * 친구 목록 (배열로 관리)
 * 1. 친구를 배열에 추가 혹은 삭제
 * 2. 친구 데이터 수정 기능 : 친구가 수정한 프로필 정보를 반영
 */

export default function CreateReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
