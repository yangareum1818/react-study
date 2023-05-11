/**
 * reselect 패키지 사용해 구현
 */

/**
 * reselect 패키지 없이 구현
 */
function NumberSelect({ value, options, postfix, onChange }) {
  return (
    <>
      <select
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          // 사용자가 옵션을 선택하면 부모컴포넌트에게 전달한다.
          onChange(value);
        }}
        value={value}
      >
        {/* 부모컴포넌트에게 전달 받은 목록을 화면에 보여준다.
          주어진 속성값으로 화면을 그리는 방법만 표현해서 프레젠테이션 컴포넌트로 만들었다.
        */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </>
  );
}
export default NumberSelect;
