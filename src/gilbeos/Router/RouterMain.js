import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";

function RouterMain() {
  return (
    <>
      <h2>SPA Router</h2>
      <ul>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/about"}>소개</Link>
        </li>
        <li>
          <Link to={"/profiles"}>프로필</Link>
        </li>
        {/* <li>
          <Link to={"/profile/yangsee"}>yang see 프로필</Link>
        </li>
        <li>
          <Link to={"/profile/gildong"}>dildong 프로필</Link>
        </li> */}
        <li>
          <Link to={"/history"}>History Sample</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        {/* 서브라우트 하기 위해 부모인 profiles/뒤에 * 을 줌ㅎ.. */}
        <Route path="/profiles/*" element={<Profiles />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
        <Route path="/history" element={<HistorySample />} />
        <Route path="/*" element={<h1>404 페이지를 찾을 수 없습니다.</h1>} />
      </Routes>
    </>
  );
}
export default RouterMain;
