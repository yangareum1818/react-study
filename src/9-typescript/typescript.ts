function TypeScript() {
  // 타입에러가 발생하는 코드
  // let v1 : number | string = 123;
  // v1 = 'abc';


  /** 타입스크립트의 여러가지 타입 */
  // 타입스크립트의 다양한 타입
  // const size : number = 123;
  // const isBig: boolean = size >= 100;
  // const msg: string = isBig ? '크다' : '작다';

  // const values: number[] = [1, 2, 3];
  // const values2: Array<number> = [1, 2, 3];

  // values.push(123);

  // const data: [string, number] = [msg, size];
  // data[0].substr(1);
  // data[1].substr(1);   // 타입에러 발생!! 타입: number를 넣어야한다.

  // 타입으로 사용될 수 있는 null과 undefined (다른 타입과 함께 유니온 타입으로 정의할 때 많이 사용된다.)
  // let v1: undefined = undefined;
  // let v2: null = null;
  // // v1 = 123;    // 타입에러 발생!!

  // let v3: number | undefined = undefined;
  // v3 = 123;

  // 타입으로 사용되는 숫자 리터럴과 문자열 리터럴
  // let v1: 10 | 20 | 30;
  // v1 = 10;
  // v1 = 15;    // 타입에러 발생!!

  // let v2: '경찰관' | '소방관';
  // v2  = '의사';   // 타입에러 발생!!

  // any 타입 (모든 종류의 값을 허용하는 타입)
  // 실제로 타입을 알 수 없는 경우나 타입 정의가 안 된 외부 패키지를 사용하는 경우에 사용하기 좋다.
  // 단, any타입을 남발하는 경우, 타입스크립트를 사용하는 의미가 퇴색되기에 되도록 피하자!
  // let value: any;
  // value = 123;
  // value = '456';
  // value = () => {};   // 함수도 가능하다.

  // void와 never 타입
  // void : 아무 값도 반환하지 않고, 종료되는 함수의 반환 타입에 사용
  // never : 함수가 항상 예외가 발생해 비정상적으로 종료되거나, 무한루프 때문에 종료되는 함수의 반환 타입에 사용
  // function f1(): void {
  //     console.log('hello');
  // }
  // function f2(): never {
  //     throw new Error('some error');
  // }
  // function f3(): never {
  //     while(true) {}
  // }

  //  object 타입
  // let v: object;
  // v = { name: 'abc' };
  // console.log(v.prop1);   // 객체의 속성에 대한 정보가 없기에 에러!! 속성 정보를 포함해서 타입을 정의하기 위해 인터페이스를 사용해야한다.

  // 교차타입(&)과 유니온타입(|) (여러 타입의 교집합과 합집합)
  // let v1: (1 | 3 | 5) & (3 | 5 | 7);
  // v1 = 3;
  // v1 = 1; // 3 or 5가 아니므로 타입에러!!

  // type 키워드로 타입에 별칭 주기
  // type Width = number | string;
  // let width: Width;
  // width = 100;
  // width = '100px';


  /** 열거형 타입 */
  // 열거형 타입 (enum키워드를 사용해 정의. 각 원소는 값으로도 타입으로도 사용)
  // enum Fruit {
  //     Apple,
  //     Banana,
  //     Orange,
  // }
  // const v1: Fruit = Fruit.Apple;  // 원소를 값으로 사용
  // const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;    // 원소를 타입으로 사용

  // 명시적으로 원소의 값 입력하기 (숫자 또는 문자열을 할당할 수 있다.)
  // enum Fruit {
  //     Apple,
  //     Banana = 5,
  //     Orange,
  // }
  // console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange)    // 0, 5, 6
  // Apple: 값을 할당하지 않으면 자동으로 0이 할당
  // Banana: 5를 할당했기에 5
  // Orange: 명시적으로 값을 입력하지 않으면, 이전 원소에서 1만큼 증가한 값이 할당되기에 6이 할당된다.
  // (열거형 타입은 컴파일 후에도 관련된 코드가 남는다.)

  // 열거형 타입이 컴파일된 결과 (열거형 타입은 객체로 존재)
  // var Fruit;
  // (function(Fruit) {
  //     Fruit[(Fruit['Apple'] = 0)] = 'Apple';
  //     Fruit[(Fruit['Banana'] = 5)] = 'Banana';
  //     Fruit[(Fruit['Orange'] = 6)] = 'Orange';
  // })(Fruit || (Fruit = {}));  // 열거형 타입의 각 원소는 이름과 값이 양방향으로 매핑된다.
  // console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);   // 0, 5, 6
  // 객체로 존재하기에 해당 객체를 런타임에 사용할 수 있다.

  // 열거형 타입의 객체 사용하기
  // enum Fruit {
  //     Apple,
  //     Banana,
  //     Orange,
  // }
  // // 객체처럼 다룰 수 있다.
  // console.log(Fruit.Banana);
  // console.log(Fruit['Banana']);
  // console.log(Fruit[5]);  // Banana   값을 이용해 이름을 가져올 수 있다.

  // 열거형 타입에 문자열 할당하기
  // enum Language {
  //     Korean = 'ko',
  //     English = 'en',
  //     Japanese = 'jp',
  // }
  // // 열거형 타입에 문자열을 할당했을 때 컴파일된 결과
  // // 문자열을 할당한 경우에는 단방향으로 매핑된다.
  // var Language;
  // (function(Language) {
  //     Language['Korean'] = 'ko';
  //     Language['English'] = 'en';
  //     Language['Japanese'] = 'jp';
  // })(Language || (Language = {}));

  /** 열거형 타입을 위한 유틸리티 함수 */
  // 열거형 타입의 원소 개수를 알려 주는 함수
  // function getEnumLength(enumObject: any) {
  //     const keys = Object.keys(enumObject);
  //     // enum의 값이 숫자이면 두 개씩 들어가므로 문자열만 계산한다.

  //     return keys.reduce((acc, key) => (typeof enumObject[key] === 'string' ? acc + 1 : acc), 0, );
  // }
  // return : 숫자인 경우 양방향 매핑에 주의!!
  // 객체의 속성값이 문자열인 경우만 계산하면 열거형 타입에서 원소의 개수를 구할 수 있다.

  // 열거형 타입에 존재하는 값인지 검사하는 함수
  // function isValuidEnumValue(enumObject: any, value: number | string) {
  //     if (typeof value === 'number') {
  //         return !!enumObject[value];     // 값이 숫자이면 양방향으로 매핑됐는지 검사!
  //     } else {
  //         return (
  //             Object.keys(enumObject).filter(key => isNaN(Number(key))).some(key => enumObject[key] === value)    // 값이 문자열이면 양방향 매핑에 의해 생성된 키를 제거하고 해당 값이 존재하는지 검사한다.
  //         )
  //     }
  // }

  // // 앞의 getEnumLength(), isValuidEnumValue()함수를 사용했을 시 코드이다.
  // enum Fruit {
  //     Apple,
  //     Banana,
  //     Orange,
  // }
  // enum Language {
    // Korean = 'ko',
    // English = 'en',
    // Japanese = 'jp',
  // }
  // console.log(getEnumLength(Fruit), getEnumLength(Language))  // 3 3  (갯수 출력)
  // console.log('1 in Fruit:', isValuidEnumValue(Fruit, 1));    // true
  // console.log('5, in Fruit:', isValuidEnumValue(Fruit, 5));   // false
  // console.log('ko in languagechange:', isValuidEnumValue(Language, 'ko'));    // true
  // console.log('Korean in Language:', isValuidEnumValue(Language, 'Korean'));  // false
  // 타입이 존재하는 값이 맞는지 검사한다. (isValuidEnumValue함수는 서버로부터 받은 데이터를 검증할 때 유용하게 사용된다.)


  // 상수(const) 열거형 타입
  /** 열거형 타입은 컴파일 후에도 남아있기에 번들 파일의 크기가 불필요하게 커질 수 있다.
  열거형 타입의 객체에 접근하지 않는다면 굳이 컴파일 후에 객체로 남겨 놓을 필욘없다.
  상수 열거형 타입을 사용하면 컴파일 결과에 열거형 타입의 객체를 남기지 않을 수 있다. */
  // const enum Fruit {
  //     Apple,
  //     Banana,
  //     Orange,
  // }
  // const fruit: Fruit = Fruit.Apple;

  // const enum Language {
  //     Korean = 'ko',
  //     English = 'en',
  //     Japanese = 'jp',
  // }
  // const lang: Language = Language.Korean;
  // // 두 열거형 타입을 상수로 정의했다.

  // // 상수 열거형 타입이 컴파일된 결과
  // const fruit = 0;
  // const lang = 'ko';
  // // 객체를 생성되지 않은 코드를 볼 수 있다. (간소화된다.)
  // // 하지만, 상수로 정의해 버리면 열거형 타입의 객체를 사용할 수 없다.
  // const enum Fruit {
  //     Apple,
  //     Banana,
  //     Orange,
  // }
  // console.log(getEnumLength(Fruit));  // 타입 에러!!


  /** 함수 타입 */
  // 함수의 타입 정의하기 (매개변수 타입과 반환 타입이 필요!!)
  // function getInfoText(name: string, age: number) : string {  // 매개변수 타입과 반환타입 정의
  //     const nameText = name.substr(0, 10);
  //     const ageText = age >= 35 ? 'senior' : 'junior';
  //     return `name: ${nameText}, age: ${ageText}`
  // }
  // const v1: string = getInfoText('mike', 23);
  // const v2: string = getInfoText('mike', '23');   // 타입 에러!!  (매개변수 타입에러)
  // const v3: number = getInfoText('mike', 23);     // 타입 에러!!  (함수의 반환값 타입에러)
  // 자바스크립트에서 함수는 일급이므로 함수를 변수에 저장할 수 있는데, 이때 화살표 기호를 이용한다.

  // 변수를 함수 타입으로 정의하기 (변수에 정의했기에 함수에서 타입을 지정하지 않아도된다.)
  // const getinfoText: (name: string, age: number) => string = function(name, age) {
  //     // ...
  // }

  // 선택 매개변수 (반드시 입력하지 않아도 되는 매개변수. 매개변수 오른쪽에 '?'를 입력)
  // function getInfoText(name: string, age: number, language?: string) : string {  // 매개변수 타입과 반환타입 정의
  //     const nameText = name.substr(0, 10);
  //     const ageText = age >= 35 ? 'senior' : 'junior';
  //     const languageText = language ? language.substr(0, 10) : '';    // 인수의 존재여부를 검사하고 메서드 호출해야 한다.

  //     return `name: ${nameText}, age: ${ageText}, language: ${languageText}`
  // }
  // getInfoText('mike', 23, 'ko');
  // getInfoText('mike', 23);    // 인수를 입력하지 않아도 에러가 나지 않는다.
  // getInfoText('mike', 23, 123);   // 타입 에러!!

  // 선택매개변수 오른쪽에 필수 매개변수를 정의하게 되면 컴파일 에러가 발생한다!!
  // function getInfoText(name: string, language?: string, age: number) : string {}

  // 해결법 ! (undefined 이용)
  // function getInfoText(
  //     name: string,
  //     language: string | undefined,   // 유니온 타입 이용
  //     age: number,
  // ) : string {}
  // getInfoText('mike', undefined, 23);
  // 함수 호출 시 undefined 입력가능하지만, 사용성과 가독성에 좋지 않다.
  // 매개변수의 개수가 많다면 비구조화 문법을 이용해 명명된 매개변수로 작성하는 게 좋다.

  // 매개변수의 기본값 정의하기
  // function getInfoText(
  //     name: string,
  //     age: number = 15,   // 기본값 정의
  //     language = 'korean',    // 기본값 문자열로 정의
  // ) : string {
  //     //...
  // }
  // console.log(getInfoText('mike'));
  // console.log(getInfoText('mike', 23));
  // console.log(getInfoText('jone', 36, 'english'));
  // // 기본값이 있는 매개변수는 선택 매개변수이다.
  // const f1: (
  //     name: string,
  //     age?: number,
  //     language?: string,
  // ) => string = getInfoText;

  // 나머지 매개변수 (나머지 매개변수는 배열로 정의할 수 있다.)
  // function getInfoText(name: string, ...rest: string[]): string {}

  /** this 타입 (this타입을 정으ㅢ하지 않으면 기본적으로 any타입이 사용) : any타입은 가급적 사용하지 않는 것이 좋다. */
  // this 타입을 정의하지 않은 코드
  // function getParam(index: number) : string {
  //     const params = this.splt(',');  // 매소드 함수 스펠링 오타! 에러가 나지 않는다?! (this타입이 any가 되었기 때문!)
  //     if (index < 0 || params.length <= index) {
  //         return '';
  //     }
  //     return this.split(',')[index];
  // }

  // this 타입을 정의한 코드 (this의 타입을 지정해주었더니 타입에러 발생!!)
  // function getParam(this: string, index: number) : string {   // this타입은 매개변수가 아니기 때문ㄴ에 index가 첫번째 매개변수가 된다.
  //     const params = this.splt(',');  // 타입에러!!
  //     if (index < 0 || params.length <= index) {
  //         return '';
  //     }
  //     return this.split(',')[index];
  // }

  /** 원시 타입에 메서드 추가하기 (원시타입에 메서드를 등록할 때에는 인터페이스를 이용한다.) */
  // 문자열 타입에 메서드 추가하기
  // function getParam(this: string, index: number) : string {
  //     const params = this.split(',');
  //     if (index < 0 || params.length <= index) {
  //         return '';
  //     }
  //     return this.split(',')[index];
  // }
  // interface String {
  //     getParam(this: string, index: number) : string;
  // }
  // String.prototype.getParam = getParam;
  // console.log('asdf, 1234, ok'.getParam(1));


  // 함수 오버로드: 여러 개의 타입 정의하기 (하나의 함수에 여러개의 타입을 정의)
  /**
   * add함수를 만들어 다음과 일을 처리한다.
   * 1. 두 매개변수가 모두 문자열이면 문자열을 반환한다.
   * 2. 두 매개변수가 모두 숫자이면 숫자를 반환한다.
   * 3. 두 매개변수를 서로 다른 타입으로 입력하면 안된다.
   */

  // 함수 오버로드를 사용하지 않은 코드
  // function add(x: number | string, y: number | string) : number | string {
  //     if (typeof x === 'number' && typeof y === 'number') {
  //         return x + y;
  //     } else {
  //         const result = Number(x) + Number(y);
  //         return result.toString();
  //     }
  // }
  // const v1: number = add(1, 2);   // 타입 에러!! (모든 매개변수가 숫자이면 반환값도 숫자이지만 타입에러가 발생한다.)
  // console.log(add(1, '2'));   // 두 매개변수의 타입이 달라도 타입 에러가 발생하지 않는다. (왜? 함수의 타입을 구체적으로 정의하지 않았기 때문)

  // 함수 오버로드를 사용한 코드
  // function add(x: number, y: number) : number;
  // function add(x: string, y: string) : string;
  // // 👇🏻 실제 구현하는 쪽에서 정의한 타입은 함수 오버로드의 타입 목록에서 제외된다. 👇🏻
  // // (함수를 구현하는 부분에선 타입정보가 오히려 방해되는 경우가 있는데 그러면 구현하는 함수 바로 위에 @ts-ignore 코드를 입력하고 any타입으로 처리해도 괜찮다.)
  // function add(x: number | string, y: number | string) : number | string {
  //     if (typeof x === 'number' && typeof y === 'number') {
  //         return x + y;
  //     } else {
  //         const result = Number(x) + Number(y);
  //         return result.toString();
  //     }
  // }
  // const v1: number = add(1, 2);
  // console.log(add(1, '2'))    // 타입 에러!!

  // 명명된 매개변수
  // function getInfoText({
  //     // 모든 매개변수의 이름을 정의 (기본값이 있다면 함께 정의)
  //     name,
  //     age = 15,
  //     language,
  // }: {
  //     // 모든 매개변수의 타입을 정의
  //     name: string;
  //     age?: number;
  //     language?: string;
  // }) : string {
  //     const nameText = name.substr(0, 10);
  //     const ageText = age >= 35 ? 'senior' : 'junior';
    
  //     return `name: ${nameText}, age: ${ageText}, language: ${language}`;
  // }
  // 재사용하려면 인터페이스를 사용한다.

  // 인터페이스로 명명된 매개변수의 타입 정의
  // interface Param {
  //   name: string;
  //   age?: number;
  //   language?: string;
  // }
  // function getInfoText({ name, age = 15, language }: Param): string {
  //   const nameText = name.substr(0, 10);
  //   const ageText = age >= 35 ? 'senior' : 'junior';
    
  //   return `name: ${nameText}, age: ${ageText}, language: ${language}`;
  // };


  /** 인터페이스 */
  // interface Person {  // 인터페이스 정의
  //   // 객체 내부에 존재하는 각 속성의 타입 정의
  //   name: string;
  //   age: number;
  // }
  // const p1: Person = { name: 'mike', age: 23 };
  // const p2: Person = { name: 'mike', age: 'ten' };  // 타입에러!!

  // 선택 속성 (객체에서 없어도 되는 속성 : 물음표 기호 사용)
  // interface Person {
  //   name: string;
  //   age?: number;
  // }
  // const p1: Person = { name: 'mike' };

  // 물음표 기호 사용하지 않고, undefined를 유니온 타입으로 추가 (선택 속성과 달리 명시적으로 age속성을 입력해야한다.)
  // interface Person {
  //   name: string;
  //   age: number | undefined;
  // }
  // const p1: Person = { name: 'mike' };  // 타입에러 !!
  // const p2: Person = { name: 'mike', age: undefined };

  // 읽기 전용 속성 (값이 변하지 않는 속성 : readonly 키워드 사용)
  // interface Person {
  //   readonly name: string;
  //   age?: number;
  // }
  // const p1: Person = { name: 'mike', }  // 변수를 정의하는 시점에 값을 할당한다.
  // p1.name = 'jone';   // 컴파일 에러!! (읽기전용속성의 값을 수정하려고 했기 때문에 컴파일 에러가 발생 !!)

  // 정의되지 않은 속성값에 대한 처리
  // (리터럴로 값을 초기화 하는 경우 인터페이스에 정의되지 않은 속성값이 있으면 타입에러가 발생한다.)
  // interface Person {
  //   readonly name: string;
  //   age?: number;
  // }
  // const p1: Person = {
  //   name: 'mike',
  //   birthday: '1994-01-01',   // 타입 에러!!
  // };
  // const p2 = {
  //   name: 'mike',
  //   birthday: '1994-01-01',
  // };
  // // 에러가 발생하지 않는 이유
  // // (p3타입이 p2타입을 포함하는 더 큰 타입이기 때문 : '타입 호환성')
  // const p3: Person = p2;

  /** 인터페이스로 정의하는 인덱스 타입 */
  // 인덱스 타입 : 인터페이스에서 속성 이름을 구체적으로 정의하지 않고, 값의 타입만 정의하는 것
  // interface Person {
  //   readonly name: string;
  //   age: number;
  //   [key: string]: string | number;   // 문자열로 된 모든 속성 이름에 대해 값이 문자열 또는 숫자라고 정의
  // }
  // const p1: Person = {
  //   name: 'mike',
  //   birthday: '1994-01-01',   // 에러가 발생하지 않는다.
  //   age: '30',  // 타입 에러!! (명씨적으로 숫자로 정의했기 때문에 문자열을 입력했기 때문에 에러!!)
  // }


  // 여러개의 인덱스를 정의하는 경우
  /**
   * 자밧스크립트에선 속성 이름에 숫자와 문자열을 사용할 수 있다.
   * 속성이름에 숫자를 사용하면 문자열로 변환된 후 사용된다.
   * 타입스크립트에선 숫자인 속성 이름의 값이 문자열인 속성이름의 값으로 할당 가능한지 검사한다.
   */

  // 속성 이름의 타입으로 숫자와 문자열을 동시에 사용한 경우
  // (A타입은 B타입에 할당 가능해야 한다.)
  // interface YearPriceMap {
  //   [year: number]: A;
  //   [year: string]: B;
  // }

  // 여러개의 인덱스를 정의해서 사용하기
  // interface YearPriceMap {
  //   [year: number]: number;
  //   [year: string]: string | number;
  // }
  // const yearMap: YearPriceMap = {};
  // yearMap[1998] = 1000;
  // yearMap[1998] = 'abc';    // 타입에러!! (속성이름은 숫자인데, 문자열을 할당해서 에러)
  // yearMap['2000'] = 1234;
  // yearMap['2000'] = 'million';

  /** 그 밖에 인터페이스로 할 수 있는 것 */
  // 인터페이스로 함수 타입 정의하기
  // interface GetInfoText {    // 인터페이스로 함수를 정의할 땐, 속성 이름 없이 정의한다.
  //   (name: string, age: number): string;
  // }
  // const getInfoText: GetInfoText = function (name, age) {
  //   const nameText = name.substr(0, 10);
  //   const ageText = age >= 35 ? 'senior' : 'junior';

  //   return `name: ${nameText}, age: ${ageText}`
  // }

  // 함수 타입에 속성값 추가하기
  // interface GetInfoText {
  //   (name: string, age: number): string;
  //   totalCall: number;    // 숫자 타입의 속성값을 정의
  // }
  // const getInfoText: GetInfoText = function (name, age) {
  //   // 타입스크립트는 totalCall 속성값이 숫자라는 것을 알고 있다.
  //   getInfoText.totalCall += 1;
  //   console.log(`ttotalCall: ${getInfoText.totalCall}`);
  //   const nameText = name.substr(0, 10);
  //   const ageText = age >= 35 ? 'senior' : 'junior';

  //   return `name: ${nameText}, age: ${ageText}`
  // }
  // getInfoText.totalCall = 0;

  // 인터페이스로 클래스 구현하기
  // interface Person {    // 세개의 속성을 가진 인터페이스 정의
  //   name: string;
  //   age: number;
  //   isYoungerThan(age: number): boolean;
  // }
  // class SomePerson implements Person {  // implements 키워드를 사용해 인터페이스를 클래스로 구현. (만약, 하나의 속성이라도 구현하지 않으면 컴파일 에러 발생!!)
  //   name: string;
  //   age: number;
  //   constructor(name: string, age: number) {    // name, age 속성은 필수값이기에 생성자에서 값을 할당하지 않으면 컴파일 에러가 발생한다.
  //     this.name = name;
  //     this.age = age;
  //   }
  //   isYoungerThan(age: number): boolean {
  //     return this.age < age;
  //   }
  // }

  // 인터페이스의 확장
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // interface Korean extends Person {   // Person 인터페이스를 확장해 Korean 인터페이스를 만든다.
  //   isLiveInSeoul: boolean;
  // }
  /**
   * // 확장해서 만든 Korean 인터페이스는 직접 이렇게 작성한 것과 같다.
   * interface Korean {
   *    name: string;
   *    age: number;
   *    isLiveInSeoul: boolean;
   * }
   */
  // 여러 개의 인터페이스 확장하기
  // interface Programmer {
  //   favoriteProgrammingLanguage: string;
  // }
  // interface Korean extends Person, Programmer {   // Korean 인터페이스는 Person과 Programmer 인터페이스를 확장
  //   isLiveInSeoul: boolean;
  // }

  // 인터페이스 합치기 (교차 타입을 이용하면 여러 인터페이스를 하나로 합칠 수 있다. : 교집합과 같은 기능)
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // interface Product {
  //   name: string;
  //   price: number;
  // }
  // /** 타입 PP는 합쳐진 두 인터페이스인 Person과 Product의 모든 속성값을 포함한다.
  // * 교집합과 같은 기능을 한다고 했는데, PP의 타입이 name 속성만 포함하는게 아니라서 헷갈릴 수 있는데, 속성의 교집합이 아니라 타입이 가질 수 있는 값의 집합에 대한 교집합이다.
  // */
  // type PP = Person & Product;
  // const pp: PP = {
  //   name: 'a',
  //   age: 23,
  //   price: 1000,
  // }
}
export default TypeScript

// tsc -w (명령어 입력 시 js 파일 자동 컴파일)