import { useParams } from "react-router-dom";
import WithRouterSample from "./withRouterSample";

const data = {
  yangsee: {
    name: "yang see",
    description: "개발공부 중인 양씨 인간",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  // 파라미터 | v5 : match  => v6 : useParams()사용
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않은 사용자입니다.</div>;
  }

  return (
    <>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </>
  );
};
export default Profile;
