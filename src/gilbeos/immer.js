import { produce } from "immer";
import { useCallback, useRef, useState } from "react";

const ImmerState = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // Input 수정 함수.
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // setForm({
    //   ...form,
    //   [name]: [value],
    // });
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  // form 등록 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      // setData({
      //   ...data,
      //   array: data.array.concat(info),
      // });
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목 삭제 함수
  const onRemove = useCallback((id) => {
    // setData({
    //   ...data,
    //   array: data.array.filter((info) => info.id !== id),
    // });
    setData(
      produce((draft) => {
        const index = draft.array.findIndex((info) => info.id === id);
        draft.array.splice(index, 1);
      })
    );
  }, []);

  return (
    <>
      <h2>Input 상태관리 Immer패키지</h2>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>

      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ImmerState;
