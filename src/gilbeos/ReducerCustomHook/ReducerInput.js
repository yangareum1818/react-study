import CustomInputHooks from "./CustomInputHook";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

function ReducerInput() {
  const [state, onChange] = CustomInputHooks({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  return (
    <>
      <h3>이름, 닉네임 입력하기 ( Input 관리 CustomInputHooks.js )</h3>
      <div>
        이름
        <input name="name" value={name} onChange={onChange} />
        닉네임
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>

      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </>
  );
}
export default ReducerInput;
