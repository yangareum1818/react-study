import { useNavigate } from "react-router-dom";

// v5 history => v6 useNavigate()
const HistorySample = () => {
  const navigate = useNavigate();

  const hadleGoBack = () => {
    navigate(-1);
  };

  const hadleHome = () => {
    navigate("/");
  };

  return (
    <>
      <button name="back" onClick={hadleGoBack}>
        뒤로 가기
      </button>
      <button name="home" onClick={hadleHome}>
        홈으로
      </button>
    </>
  );
};
export default HistorySample;
