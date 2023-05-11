import React, { useCallback, useEffect, useRef, useState } from "react";

function TextInput({ inputRef }) {
  return (
    <>
      <h3>함수형 컴포넌트에서 ref 속성값 사용하기.</h3>
      <input type={"text"} ref={inputRef} />
      <button>저장</button>
      <p>
        자식 요소에 ref속성값을 넣는 형태인데, 그런데 자식컴포넌트(TextInput)의
        내부구조를 외부가 알아야하므로 비추. 필요한 경우만 사용하는 것이 좋다.
      </p>
    </>
  );
}

const ForwardRefUse = React.forwardRef((props, ref) => (
  <div>
    <h3>forwardRef함수로 ref 속성값 직접 처리하기.</h3>
    <p>
      forwardRef를 사용하면 부모컴포넌트에서 넘어온 ref속성값을 직접 처리할 수
      있다.
    </p>
    <input type={"text"} ref={ref} />
    <button>저장</button>
  </div>
));

const INITIAL_TEXT = "안녕? 반가워";
function RefFunction() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);
  //useCallback을 이용해 함수를 만들어 ref속성값으로 넣어준다.
  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  return (
    <>
      <h2>ref속성값으로 함수를 사용한 상황</h2>
      <p>
        input의 value값이 변경되지 않는다. <br /> 이유는 Input에 안녕?반가워 를
        고정값으로줬기때문에 input에 텍스트를 적어도 기본값으로 덮어씌우기
        때문이다.
        <br />
        컴포넌트가 렌더링 될때마다 새로운 함수를 ref속성값으로 넣기때문이다.
        <br />
        텍스트를 입력하면 컴포넌트가 렌더링되고, ref속성값에 입력된 새로운
        함수가 호출되면서 안녕? 반가워로 덮어쓰는 거다.
      </p>
      {showText && (
        <input
          type={"text"}
          // ref={(ref) => ref && setText(INITIAL_TEXT)}
          ref={setInitialText} // input의 ref속성값에 새로운 함수를 입력하지않아 input요소가 생성되거나 제거될때만 setInitialText함수가 호출된다.
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기 / 가리기</button>

      <h4>
        ref속성값으로 함수를 사용한 상황의 문제점을 해결하는 방법 (
        ref속성값으로 고정된 함수 입력 )
      </h4>
      <p>
        useCallback을 이용해 함수를 만들어 ref속성값으로 넣어준다. <br />
        메모이제이션 기능이 내장되어 있어 한 번 생성된 함수를 계속 재사용한다.
        <br />
        input의 ref속성값에 새로운 함수를 입력하지않아 input요소가 생성되거나
        제거될때만 setInitialText함수가 호출된다.
      </p>
    </>
  );
}

function NoRefCurrent() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <>
      <h3>ref 속성값 사용시 주의사항이 있다.</h3>
      <strong>ref객체의 current속성이 없는 경우이다.</strong>
      <div>
        {/* showTText상탯값에 따라 존재하지 않을 수 있다. 조건부 렌더링을 하는 경우에는 컴포넌ㄴ트가 생성된 이후라 하더라도 ref객체를 사용할 때 주의해야한다. input요소가 존재하지 않는 상태에서 이동버튼을 누르면 inputRef객체의 current속성은 존재하지 않기 때문ㄴ에 에러가 발생한다.!! */}
        {/* 즉! 조건ㄴ부 렌ㄷ너링이 사용된 요소의 ref객체는 current속성을 검사하는 코드가 필요하다. */}
        {showText && <input type={"text"} ref={inputRef} />}
        <button onClick={() => setShowText(!showText)}>
          텍스트야 보여라 / 보이지마라
        </button>
        {/* 에러가 날 수 있는 문제의 코드. */}
        {/* <button onClick={() => inputRef.current.focus()}>
          텍스트로 이동해라 !
        </button> */}

        {/* current속성이 존재하는지 검사 하는 코드 */}
        <button onClick={() => inputRef.current && inputRef.current.focus()}>
          텍스트로 이동해라 !
        </button>
      </div>
      <p>
        showText상탯값에 따라 존재하지 않을 수 있다.
        <br /> 조건부 렌더링을 하는 경우에는 컴포넌트가 생성된 이후라 하더라도
        ref객체를 사용할 때 주의해야한다.
        <br /> input요소가 존재하지 않는 상태에서 이동버튼을 누르면
        inputRef객체의 current속성은 존재하지 않기 때문에 에러가 발생한다.!!{" "}
        <br />
        즉! 조건부 렌더링이 사용된 요소의 ref객체는 current속성을 검사하는
        코드가 필요하다.
      </p>
    </>
  );
}

function TextInputMovie() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>함수형 컴포넌트에서의 ref 속성값의 다양한 활용법</h2>
      <ul>
        <li>ref속성값을 사용하는 방법</li>
        <li>forwardRef 함수로 ref 속섯값을 직접 처리하는 방법</li>
        <li>ref속성값으로 함수 사용하는 방법</li>
      </ul>

      <h2>함수형 컴포넌트에서 ref속성값 사용하기.</h2>
      <p>
        함수형 컴포넌트는 클래스형 컴포넌트처럼 인스턴스로 만들어지지 않는다.
      </p>
      <p>
        하지만, useImperativeHandle훅을 사용하면 변수와 함수를 외부로 노출 시킬
        수 있다.
      </p>
      <p>
        ref속성값을 입력할 수는 없지만, 다른이름으로 ref 객체를 입력받아 내부의
        리액트 요소에 연결할 수는 있다.
      </p>

      <TextInput inputRef={inputRef} />
      <ForwardRefUse ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
      <RefFunction />
      <NoRefCurrent />
    </>
  );
}
export default TextInputMovie;
