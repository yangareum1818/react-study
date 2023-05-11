import { createSelectorHook } from "react-redux";

/**
 * 여러 상태값 반환하기 위한 관리 (연령제한, 개수제한) + reselect 패키지
 * 공통 상탯값을 처리하는 파일
 */
const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (_, ageLimits) => ageLimits;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelectorHook(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => friends.filter((frined) => frined.age <= ageLimit)
);
export const getFriendsWithAgeShowLimit = createSelectorHook(
  [getFriendsWithAgeLimit, getShowLimit],
  (getFriendsWithAgeLimit, showLimit) =>
    getFriendsWithAgeLimit.slice(0, showLimit)
);

export const makeGetFriendsWithAgeLimit = () => {
  return createSelectorHook([getFriends, getAgeLimit], (friends, ageLimit) =>
    friends.filter((friend) => friend.age <= ageLimit)
  );
};
