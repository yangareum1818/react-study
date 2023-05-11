import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Profile = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <>
      <p>{`name is ${props.name}`}</p>
      <p>{`age is ${props.age}`}</p>
      <input type={"text"} ref={ref} onChange={(e) => e.target.value} />
    </>
  );
});

function UseImperativeHandle() {
  const ProfileRef = useRef();
  const onClick = () => {
    if (ProfileRef.current) {
      console.log("current name lengt:", ProfileRef.current.getNameLength());
      ProfileRef.current.addAge(5);
    }
  };

  return (
    <>
      <h2>useImperativeHandle 훅에 대해 알아보자.</h2>
      <Profile ref={ProfileRef} />
      <button onClick={onClick}>Add age 5</button>
      <p>
        - 자식 컴포넌트의 상태변경을 부모 컴포넌트에서 할 때<br />- 자식
        컴포넌트의 핸들러를 부모 컴포넌트에서 호출해야할 때
      </p>
    </>
  );
}
export default UseImperativeHandle;
