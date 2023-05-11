import { useEffect, useState } from "react";

// react-hook-useEffect Profile부분을 커스텀 훅으로 만들어보자.
function useUser({ userId }) {
  const [user, setUser] = useState(null);

  // 두번째 매개변수로 배열을 입력하면, 배열의 값이 변경되는 경우에만 함수가 호출된다.
  // 의존성 배열이라고한다.
  // useEffect(() => {
  //   getUserApi(userId).then((data) => setUser(data));
  // }, [userId]);

  return user;
}

// react-hook useEffect WidthPrinter부분을 커스텀 훅으로 만들어보자.
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

// useMounted 커스텀 훅
// mounted상탯값은 첫번째 렌더링 결과가 실제 돔에 반영된 후에 항상 참을 반환한다.
function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted;
}
