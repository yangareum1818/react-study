import { useLocation } from "react-router-dom";

function About() {
  // v5 qs라이브러리 사용 => v6 useLocation()
  const { search } = useLocation();
  const showDetail = search === "?detail=true";

  return (
    <>
      <h3>소개</h3>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <br />
      <span>파라미터 : /profile/velopert</span>
      <p>특정 아이디 혹은 이름을 사용해 조회할 때 사용.</p>
      <span>쿼리 : /about?details=true</span>
      <p>어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용.</p>
      {showDetail && (
        <strong>detail 값을 true로 설정 하셧군요 !!!!!!!!!!!1</strong>
      )}
    </>
  );
}
export default About;
