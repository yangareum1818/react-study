import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  // NavLink() v5 : activeStyle, activeClassName 속성이 삭제 => v6 isActive를 선언하여 활성화시키고 싶은 스타일에 css를 적용
  return (
    <>
      <h3>사용자 목록 :</h3>
      <ul>
        <li>
          <NavLink
            to={"/profiles/yangsee"}
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#ff0",
              backgroundColor: isActive ? "#ff0" : "#000",
            })}
          >
            YangSee
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profiles/gildong"}
            className={({ isActive }) =>
              "nav-link" + (isActive ? "active" : "")
            }
          >
            Gildong
          </NavLink>
        </li>
      </ul>

      {/* 서브 라우트 v5 =>render v6 */}
      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </>
  );
};
export default Profiles;
