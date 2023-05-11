const frineds = [
  { name: "쯔위", age: 16 },
  { name: "사나", age: 40 },
  { name: "모모", age: 23 },
  { name: "지효", age: 32 },
  { name: "다현", age: 13 },
  { name: "정연", age: 21 },
];

const timelines = [
  { desc: "카페에 갔다.", likes: 0 },
  { desc: "드라이브를 했다.", likes: 5 },
  { desc: "넷플릿스를 봤다.", likes: 45 },
  { desc: "소고기가 짱이지 !!", likes: 234 },
  { desc: "라면 잘 끓이는 법.", likes: 62 },
  { desc: "무기력 해요ㅠㅠ", likes: 13 },
  { desc: "열정 가득한 날", likes: 6 },
  { desc: "할게 너무 많아", likes: 2 },
  { desc: "리덕스는 어려워요", likes: 37 },
  { desc: "리액트, 리액트, 타입스크립트 공부하자.", likes: 732 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;

  return function getNextData() {
    const item = items[itemIndex % items.length];

    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(frineds);
export const getNextTimeline = makeDataGenerator(timelines);
