import { useLocation, useNavigate, useParams } from "react-router-dom";

const WithRouterSample = () => {
  const location = useLocation();
  const parms = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h3>v5 : withRouter() 👉🏻 v6 : useparms, useLocation, useNavigate</h3>

      <h4>Location</h4>
      <textarea
        style={{ height: "125px" }}
        value={JSON.stringify(location, null, 2)}
        readOnly
      />
      <h4>parms</h4>
      <textarea
        style={{ height: "125px" }}
        value={JSON.stringify(parms)}
        readOnly
      />
      <button style={{ display: "block" }} onClick={() => navigate("/")}>
        홈으로 가기
      </button>
    </>
  );
};
export default WithRouterSample;
