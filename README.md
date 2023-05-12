# React Study
>
>리액트 Hook, 리덕스, Router ... 들을 공부하면서 작업했던 내용물.
실전리액트프로그래밍, 리액트다루는기술 두가지의 책을 보고 공부했다.
버전이 달라서, 구글링하면서 찾아가보면서 코드를 쳤다.
Router부분에서 v5 => v6 으로 달라진 부분이 꽤 많았다.

## REACT HOOK

```javascript
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
```

* 평균 값을 입력하고 버튼을 누르면 계산이 되는 상황

### useMemo() Hook

: 평균값을 계산하는 상황에서 useMemo()를 사용하게되면, 렌더링하는 과정에서 특정값이 바뀌었을 때 사용된다.
문제 : `Input`에 숫자를 입력할 때마다 렌더링 된다.
해결 : `useMemo()`를 사용해 값이 바뀌었을 때만, 렌더링 된다.

### useCallback() Hook

1. `useMemo()`와 매우 비슷하지만, `useCallback()`은 함수를 재사용할 때 자주 사용된다.
2. 주로 렌더링을 최적화 하는데 사용된다.
3. 이벤트가 이뤄질 때 사용된다. (값이 바뀌는 Input, 버튼을 클릭했을 경우 달라지는 상황)

### useRef() Hook

: 포커스가 가도록 해주는 Hook.

1. 위의 상황은 등록 버튼을 클릭 했을 때, Input창에 포커스가 가는 상황이다.

---

## ContextAPI /gilbeos/ContextAPI

>리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능이다.
( 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등 .. )<br />
ContextAPI를 사용하지 않고 따로 관리를 하려면,
Recoil, Redux, MobX 등.. 상태 관리 라이브러리를 사용해 전역 상태 관리 작업을 한다.

* 사용이유<br />
: 컴포넌트 간에 데이터를 props로 전달하기 때문에 컴포넌트 여기저기서 필요한 데이터를 중간 컴포넌트에게 불필요하게 거쳐서 전달해야하기에 코드가 가독성이 떨어지고, 유지보수에 어려움을 느낀다.
그래서 필요한 데이터가 있을 경우에는 주로, 최상위 컴포넌트 App의 state에 넣어 관리한다.

Context를 만들어 단 한번에 원하는 값을 받아와 사용할 수 있다.

---

## REDUX : react-redux 이용하기

### 리덕스 키워드

1. 액션 (Action)상태에 변화가 필요할 때 발생시킴 (객체하나로 표현)type을 필수로 그외의 값들은 개발자 마음대로 생성
2. 액션 생성함수 (Action Creator)컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함필수 아님
3. 리듀서 (Reducer)변화를 일으키는 함수현재의 상태와 액션을 참조하여 새로운 상태를 반환
4. 스토어 (Store)한 애플리케이션당 하나의 스토어현재의 앱 상태와, 리듀서, 내장함수 포함
5. 디스패치 (dispatch)스토어의 내장함수액션을 발생 시키는 것
6. 구독 (subscribe)스토어의 내장함수subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출(리액트에서는 connect 함수 또는 useSelector Hook 을 사용)

### 리덕스의 3가지 규칙

1. 하나의 애플리케이션 안에는 단 하나의 스토어가 있다. 그 곳에 저장된다.
: 여러개의 스토어를 사용하는 것은 가능하지만 ( combineReducers ), 권장하지는 않는다.
왜 ? 특정 업데이트가 너무 빈번하게 일어나거나, 애플리케이션의 특정 부분을 완전히 분리시키게 될 때, 여러개의 스토어를 만들 수도 있다. 하지만 그렇게 되면, 개발 도구를 활용하지 못하게 된다.
: 외부에서 상태값 변경 여부를 알기 위해선 스토어에 이벤트 처리 함수( subscribe() )를 등록하면 상탯값 변경 여부를 검사하는 한다.

2. 상태는 읽기전용이다. ( 리액트의 불변성 : 데이터 참조 )
: 리액트에선 state를 업데이트 해야할 때, setState를 사용한다.
배열을 업데이트 해야할 때는 배열 자체에 push를 직접하지 않고, concat같은 함수를 사용하여 기존의 배열을 수정하지 않고, 새로운 배열을 만들어 교체하는 방식으로 업데이트를 한다.
깊고 복잡한 구조로 된 객체를 업데이트 할 때에도, 기존 객체를 건드리지 않고, Object.assign을 사용하거나 spread 연산자 ( … )를 사용하여 업데이트 한다.<br />
리덕스도 마찬가지로, 기존의 상태를 건들지 않고 새로운 상태를 생성하여 업데이트를 해주는 방식이라면, 나중에 개발자 도구를 통해 뒤로 돌릴 수 있고, 다시 앞으로 돌릴 수 있다.<br />
리덕스에서 불변성을 유지해야 하는 이유는
내부적으로 데이터가 변경 되는 것을 감지하기 위해 shallow equality검사를 하기 때문이다.
객체의 변화를 감지 할 때, 객체 깊은 안까지 비교하는 것이 아니라 겉핥기 식으로 비교를 하여 좋은 성능을 유지할 수 있는 것이다.<br />
자바스크립트에서 불변 객체를 관리할 목적으로 나온 여러 패키지가 있다.
더 깊은 곳 까지 수정하기 위해 사용되는 immer.js, immutable.js가 있고 주로 사용한다.

3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야 한다.
    1. 리듀서 함수는 이전상태와, 액션 객체를 파라미터로 받는다.
    2. 이전 상태는 절.대. 건들지 않고, 변화를 일으킨 새로운 상태 객체를 만들어 반환한다.
    3. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야만 한다.
동일한 인푼 => 동일한 아웃풋 이 있어야한다.
하지만, new Data(), 랜덤 숫자생성, 네트워크 요청 등.. 인 순수하지 않은 작업이기에 리듀서 함수 바깥에서 처리해줘야 한다.
이것이 리덕스 미들웨어를 사용하는 이유다.

### 리액트 상탯값, 리덕스로 관리하기

: 리덕스는 리액트뿐만 아니라 자바스크립트를 사용하는 모든 곳에서 사용할 수 있다.
리액트 컴포넌트의 상탯값과 마찬가지로 리덕스의 상탯값도 불변 객체다.
상탯값이 불변 객체이면 값의 변경 여부를 빠르게 확인할 수 있고, 이것이 리액트의 렌더링 성능을 좋게 만드는 요인이 된다.
리액트에서 리덕스를 사용할 때 react-redux패키지가 많이 사용된다.

<br />
<br />
<br />
<br />
<br />

### useSelector 훅으로 여러 상탯값 반환하기

>`useSelector`훅으로 여러 상탯값을 가져오기 위해선 선택자 함수를 반환해야한다.<br/>
이때 객체 리터럴 문법을 이용하면 실제 상태값이 바뀌지 않아도 매번 새로운 객체가 반환되어 문제가 된다.

#### useSelector Hook으로 여러 상탯값 반환 방법

1. useSelector Hook을 필요한 상탯값 갯수만큼 사용
2. useSselector Hook의 두 번째 매개변수를 활용
3. reselect와 같은 라이브러리의 메모이제이션 기능 이용
4. react-redux에서 제공하는 shallowEqual함수를 이용한다.

<br/>

>`useSelector`훅을 여러 번 사용한다고 성능이 떨어지거나 하진 않는다.<br/>
단지, 코드를 여러번 작성하는 번거로움 때문이다.

3번의 방법은 컴포넌트 렌더링 여부를 판단하는 역할을 한다.
이 매개변수를 입력하지 않으면 참조값만 비교하는 단순 비교 함수가 사용된다.
결국 선택자 함수가 객체 리터럴을 반환ㄴ하면 컴포넌트가 불필요하게 자주 렌더링되는 문제가 생긴다.

<br/>

#### shallowEqual 함수

```javascript
import { shallowEqual } from 'react-redux';

export default function MyComponent() {
  const [value1, value2, value3] = usSelector(state => [state.value1, state.value2, state.value3], shallowEqual,
  );
}
```

1. useSelector 훅의 선택자 함수를 보면 여러개의 상탯값을 배열에 담아 반환한다.
2. useSelector 훅의 두번째 매개변수에 shallowEqual함수를 입력하면 배열의 각 원소가 변경됐는지 검사한다

(배열뿐 아니라 객체를 사용할 수 있다.)

#### 항상 shallowEqual 함수를 이용하는 커스텀 Hook

```javascript
function useMySelector(selector) {
  return useSelector(selector, shallowEqual); // 1.
}

function MyComponennt() {
  const [value1, value2] = useMySelector(state => [state.value1, state.value2];
  const value3 = useMySelector(state => state.value3);  // 2.
  const [value4] = useMySelector(state => [state.value4]);  // 3.
  );
}
```

1. 항상 shallowEqual 함수를 입력
2. 상탯값 하나만 반환하는 경우는 다소 비효율적일 수 있다.
하나라면 한번의 단순 비교만으로도 충분하지만, value3내부의 모든 속성값을 비교하게 된다.
3. 성능이 걱정이라면 상탯값을 하나만 반환할 때도 배열로 감싼다.

#### reselect 패키지로 선택자 함수 만들기

: 다양한 형식으로 가공할 때 사용할 수 있도록 도와준다.

* 리덕스의 데이터를 리액트 컴포넌트에서 필요한 데이터로 가공하는 용도로 많이 사용된다.
  1. 연령 제한 옵션 설정
  2. 갯수 제한 옵션 설정
  3. 두 가지 적용한 친구 목록
* 친구목록을 보여주는 화면에선 여러가지 필터 옵션을 제공한다.<br />
  1. 내 위치에서 10km 이내에 사는 친구들만 보여주기
  2. 성별이나 나이 필터링
  3. 필터링 된 친구목록을 다양한 방식으로 정렬
