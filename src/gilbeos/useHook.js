import { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중 ...");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성 (기존값이 불필요하기 때문에 빈배열을 넣을 수 있다. 그러면 이 함수가 렌더링 된다.)

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus(); // 버튼을 클릭했을 때 포커스가 가도록 한다.
  }, [number, list]); // number, list가 바뀌었을 때만 함수 생성 (기존값을 가지고 계산을 해야하는 부분이라 필요로한 number, list를 넣어줘야한다.)

  // useMemo를 사용해 버튼을 클릭했을 때만 렌더링 되게 최적화.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <h2>Hook</h2>
      <h3>useMemo() Hook</h3>
      <p>
        Input에 숫자를 입력할 때마다 렌더링이 되며,
        <br />
        평균값을 계산하는 상황에서 useMemo를 사용하게 되면,
        <strong>렌더링하는 과정에서 특정값이 바뀌었을 때 사용</strong>된다.
      </p>

      <h3>useCallbak() Hook</h3>
      <p>
        useMemo와 매우 비슷하다.
        <br />
        주로 렌더링을 최적화하는데 사용된다. <br />
        <strong>만들어 놨던 함수를 재사용할 때 사용된다.</strong>
        <br />
        Input의 내용이 바뀔 때, 등록을 눌렀을 때의 경우 useCallbak Hook을
        사용한다.
      </p>

      <h3>useRef() Hook</h3>
      <p>
        포커스가 되도록 해주는 훅이다.
        <br />
        등록버튼을 클릭했을 때, Input에 포커스가 가도록 작성해본다.
      </p>

      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <span>평균 값 :</span>
        {avg}
        {/* {getAverage(list)} */}
        <br />
      </div>
    </>
  );
};
export default Average;
