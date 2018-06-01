# React Components 

React는 UI(User-Interface)를 만들기 위한 자바스크립트 Library입니다. React가 DOM에 접근을 하는 도구들을 제공해준다는 점은 기본 JavaScript 또는 jQuery와 같지만, 언어의 구조가 사람의 생각 구조에 가깝게 직관적이라는 점(Declarative)에서 큰 장점이 있습니다. (참고로 Facebook이 만들었습니다)

#### React의 Components를 **특별한 능력**들이 추가된 HTML tag들이라고 생각해 봅시다:
* 어떻게 행동 할지에 대한 정보를 줄 수 있고
* Component끼리 서로 소통할 수 있고
* 합쳐지고, 다시 사용되고, nested되어져 작은 app에서부터 아주 큰 app까지 감당할 수 있습니다.
이번 과정에서는 다음을 공부하게 될 것입니다:
	- React Component들이 어떻게 소통하는지 배우고
	- JSX와 ES6에 대해서 배우고
	- Props를 어떻게 사용하는지 배우고
	- Event처리를 어떻게 하는지 배우고
	- 상태가 없는 함수와 class의 차이를 배우고
	- state가 왜 존재하며 어떻게 업데이트 하는지 배우게 될 것입니다.

## Setup
<a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" target="_blank">NPX</a> 는 npm 5.6버전 이후부터 제공되는 package manger입니다.

*	npx create-react-app todolist
* todolist 경로로 이동
*	yarn start // npm보다 빨라서 사용합니다.
* 브라우저가 자동으로 열릴 것입니다. 켜두신 상태에서 작업을 하겠습니다.

(Create-React-App 은 React의 세팅을 미리 해 놓은 공식 boiler plate입니다.)

## Bare Minimum Requirements
React에서 Component는 **생성**하고 **render**하면 끝입니다. 개념은 단순하지만 구조를 먼저 이해를 해야 합니다.
예시들을 보면서 **충분히 익히시고** 이 md파일 끝에 주어진 task들을 완성하시면 됩니다.

* `npx create-react-app todolist` 을 통해 todolist 폴더가 형성됬을 것입니다.

내부적으로 dependency(현 app이 의존하는 라이브러리)들이 있는 `node_modules`폴더는 package manager통해서 받은 라이브러리들이 저장되는 곳입니다. 대부분의 라이브러리들은 내부적으로 또 다른 라이브러리를 사용하고 그것까지 폴더에 포함되어 있기 때문에 상당히 긴 내용을 담고 있습니다. 내부적으로는 건드릴 필요가 없고, `package.json`을 통해서 어떤 라이브러리들을 직접적으로 사용하는지를 확인하는 것이 편리합니다.

`public` 폴더에는 브라우저 탭창 옆에 자그마한 이미지로 사용할 수 있는 `favicon.ico`가 있고 browser에 그려질 `index.html`이 있고 메타정보를 담고 있는 `manifest.json`이 있습니다. 여기서는 `index.html`만 신경씁시다. `index.html`로 브라우저에 내용들이 그려지고 있고, 이것을 확인을 위해 title안의 내용을 To Do List로 바꿔봅시다. 
```js
<title>React App</title>
```
tab창의 주제가 바꼈을 것입니다. 

다음으로 `src`폴더에는 `index.html`에 들어갈 **JavaScript**파일 및 style을 주는 **Cascading Style Sheet(css)** 그리고 그 외 도우미 파일들이 있습니다. 프로젝트에 편리상 `logo.svg, App.js, App.test.js, index.css, App.css를 삭제`합시다. 그리고 caching(브라우저에서 저장)을 통해 윈도우가 멈추거나 느려져도 화면이 보이게 하는 도우미 역할을 하는 `registerServiceWorker.js`도 삭제합시다. 이제 남은 파일은 `index.js`일 것입니다.

브라우저가 에러가 났을 것입니다. `index.js`에서 다음과 같이 남겨놓고 다 지우고 시작하겠습니다.
```js
import React from 'react';
import ReactDOM from 'react-dom';
```


### 먼저 기존 HTML을 살펴봅시다 
이 구조 안에 React Component가 삽입이 될 것입니다. 그러나 삽입을 직접하는 것이 아니고 방법은 React가 간편한 코드로 진행되게 해줍니다.
```js
<div id="root"></div>
```
`html`아래쪽에  `<div>`태그를 보시면 `id="root"`이고 속이 빈 것을 살펴볼 수 있습니다. 이렇게 만들어 놓으면 이후 Component를 만들고 render하는 과정에서 React가 저 장소에다 작성된 코드를 삽입해주는 코드를 작성하게 되는 것입니다. 

### App.js에서 Component만들어보기
다음은 ES6문법 및 JSX로 작성된 단순한 React Component 입니다.
<a target="_blank"  src=https://reactjs.org/docs/jsx-in-depth.html>JSX</a>는HTML과 비슷한 구조의 JavaScript syntax입니다)

```js
const HelloWorld = () => (
  <div>HELLO WORLD</div>
);
```
`index.js`에서 위 기본 Component를 작성해봅시다.

위 함수로 JSX를 반환하는 React Component를 **생성**했으니(component는 참고로 첫글자가 대문자로 작성하는 convention이 있습니다) 이제 **render**를 할 차례입니다.
**render**는 React에서 제공하는 ReactDOM의 render 메소드를 사용해야 합니다. 
`ReactDOM.render(<Componet함수>, <그릴 실제 DOM element>)` 과 같은 구조로 작성하게 됩니다.
```js
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
```
위 HTML에서 작성된 `<div id="root"></div>`에다 HelloWord를 **render**하는 함수입니다. 

`index.js`에다 작성해봅시다.
```js
import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => (
  <div>HELLO WORLD</div>
);

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
```

사실상 위 방식으로 React Component의 기본 방식은 완성이 된 것입니다. 이제는 위 개념을 토대로 어떻게 확장할 수 있는지를 살펴봅시다. 여기서 배워야 하는 것이 **nested**의 개념인데, 위에 작성한  `HelloWorld`는 다른 JSX안에 nested되거나 위로 nest를 할 수 있다는 개념입니다. 

`index.js`에서 `HelloWord`를 감싸는 `SuperWorld`를 만들어봅시다. 그리고 이번에는 `SuperWorld`를 **render**해봅시다.
```js
import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => (
  <div>HELLO WORLD</div>
);

const SuperWorld = () => (
  <div>
    슈퍼월드!
    <HelloWorld />
  </div>
);

ReactDOM.render(<SuperWorld />, document.getElementById("root"));

```

`<HelloWord />` 뿐만 아니라, 여러가지 component를 SuperWord함수에 넣을 수 있습니다. 그리고 기존 html tag들도 바로 사용해서 넣을 수 있습니다. 

```js 
const SuperWorld = () => (
  <div>
    <div>easy peasy</div>
    <HelloWorld />
    <OtherWorld />
    <AnotherWorld />
  <div>
);
```
한번 다양한 컴포넌트들을 작성해서 **nested** 시켜봅시다.
그리고 난 후, 위 내용처럼 가장 상위인 **SuperWorld**를 **render**하면 되게 되는 것입니다. 

참고로) 가장 상위는 보통 아까 지운 `App.js` 파일을 사용하고 App이라고 짓습니다. (SuperWorld가 보통 App이 되는 경우가 정석이라는 말입니다) 이라는 convention이 있습니다.

* ES6코드가 어떻게 ES5코드로 변환되는지 확인하고 싶으시면 
<a src="http://babeljs.io/repl/#?evaluate=false&presets=es2015%2Creact&experimental=false&loose=false&spec=false&playground=false" target="_blank">Babel REPL</a>을 사용해보세요!

---
### TO DOs
이제 만들어 놓은 코드 Hello World 및 SuperWorld 코드는 지워주시고 스프린트를 위한 component를 만들어보겠습니다.
* `index.js`에서 2가지 grocery품목(unordered list)이 들어있는 `GroceryList` component를 생성하고 `index.html`에 **render**되게 해보세요!

* 2가지 grocery품목은 **cucumbers**와 **kale**입니다. 먼저 기존 html에서는 어떻게 작성할 수 있을지를 상상해보세요. 상상한 그 모양에서 React의 **dynamic**한 방법을 사용하여 `GroceryList`를 작성하게 될 것입니다. 먼저  `GroceryList`의 `<li>`안에 nested 시킬 각각의 품목을 React Component로 만들어서 완성해보세요.

---

* 이제는 **dynamic**한 방법을 배워볼 차례입니다. React는 `component`들끼리 데이터를 주고 받을 수 있도록 구조되어 있습니다. 그 데이터를 `props` 즉 Component의 properties라고 부릅니다.  `props`를 주고받는 방식을 한번 살펴봅시다:

```js
const TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li> // 중괄호를 확인하세요~!
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);
const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList
      todos={[
        'Learn React',
        'Crush Recast.ly',
        'Maybe sleep',
      ]}
    />
  </div>
);
```
`<TodoList />`안에 `todos`라는 `props`를 만들고 그 안에 `['Learn React', 'Crush Recast.ly', 'Maybe sleep']`을 넣었습니다. 이것을 `TodoList`함수에서 `props`의 todos로 받아 list안에 중괄호를 사용하여 넣을 수 있게 됩니다.

아래는 기존 html에도 있는 `onclick` **event**의 **JSX** 형태입니다.
```js
const TodoList = (props) => {
  const onListItemClick = (event) => {
    console.log('I got clicked');
  };
 
  // arrow function에 중괄호는 return이 요구되기 때문에 아래와 같이
  // return 할 값을 작성한 것을 확인하세요!
  return (
    <ul>
      // onClick 등 JSX는 camelCase 문법을 사용합니다.
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}
``` 
여러분 나름대로의 `props`를 작성해보시고, 이후 `click event`까지 작성해보세요!

## State를 사용하여 Stateful한 App을 만들기!
지금까지는 **stateless** 상태 변수가 없는 App을 구현했다면, 이제는 **state**, 즉 상태에 따라 상호작용을 구현할 수 있는 App을 구현하는 방법을 살펴보겠습니다. 상태 변화가 위의 방식과 달리 `class` 방식을 사용하여 어떤 특정한 상황에 따라 상태를 바뀌게 할 수 있는 `state`의 개념을 배워봅시다.

`ToDoList`안에 들어갈 list를 class의 형식으로 바꾸면 다음과 같습니다.

```js
// class ToDoList는 React의 Component를 부모로 받습니다.
class TodoListItem extends React.Component {
  // constructor 메소드는 constructor에 props를 넘기는데,
  constructor(props) { 
    // 부모의 props를 넘기게 됩니다.
    // constructor안에 super는 필수!
    super(props);
    //이로 인해 여기서 this.props는 받은 props가 됩니다.

  }
  // 모든 클레스는 render메소드가 있어야 합니다. 
  // 가장 기본의 형태는 이 render 메소드만 있어도 됩니다.
  render() {
    // 위에 props를 super(props)러 constructor에 props를 넘겨줬으니, this.props로 부모에게 받은 props를 사용할 수 있게 됩니다.
    return (
      <li>{this.props.todo}</li>
    );
  }
}
```
위 `ToDoListItems`를 감싸는 부모 Component인 TodoList는 다음과 같이 작성할 수 있습니다.

상황상, 상태의 변화가 필요없기 때문에 stateless function으로 작성할 수 있습니다. 

```js
// 아래 코드는 function이 Class를 감쌀 수 없습니다. 
const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

```

이 코드에 dynamic함을 더하기 위해 class에만 존재하는 `state`를 작성해봅시다. immutable(바꿀 수 없는) `props`와 달리 `setState`를 통해 상태를 바꿀 수 있는 `state`는 특정한 상황에 따른 변화를 그려낼 수 있게 해줍니다. 

```js
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    // 아래와 같이 state를 만들고 안에 key value를 설정합니다.
    this.state = {
      done: false
    };
  }
  
  // constructor와 render 사이에 메소드를 다음과 같이 작성할 수 있습니다. 
  onListItemClick() {
    // 기존의 state를 this.setState을 통해 바꿀 수 있습니다.
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    // 삼항 연산자로 <li>의 스타일을 state에 상황에 따라 바꿉니다.
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    // inline style에 위 style을 넣고,
    // onClick event 메소드는 클릭시 위 onListItemClick() 메소드가 실행될 수 있도록 합니다. 
    // this가 바인드 안되어있기 때문에 bind를 해줘야 실행이 됩니다.
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

```
* `참고로) 메소드를 작성할 때, 바인드를 시키는 arrow function으로 함수로 작성을 하면 this를 바인드 따로 해줄 필요가 없게 됩니다.`

### 여러분의 Task
* 여러분의 `GroceryListItem`도 위와 같은 방식을 토대로 class로 refactor해봅시다.
* `GroceryListItem`의 list들 즉, <li> 들은 클릭을 했을 때 `state`가 변해서 `crossed-out style`이 되게끔 작성을 해주세요.
* list들을 `hover` 했을 때에 글자가 `bold`가 되게도 해주세요.
