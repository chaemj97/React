### React

https://reactjs.org/

(vanillaJS와의 차이 : ReactJS는 바뀐 부분만 리렌더링함, vanillaJS는 렌더링하라는 부분 다 리렌더링)



### Babel

https://babeljs.io/

변환기 - @babel/standalone



### 함수 표현

```
const Title = () => (
	...
)

function Title() {
	return (
		...
	)
}
```



### React Create app

nodejs 설치 - node -v, npx  확인해보기

설치 : npx create-react-app app_name

실행 : npm start / npm run start

prop types : npm i prop-types



### React Router

설치 : npm i react-router-dom@5.3.0



### gh-pages (배포)

결과물을 github pages에 업로드 할 수 있게 해주는 패키지

설치 :  npm i gh-pages

package.json의 scripts의 build : 실행하면 우리 웹사이트의 production ready(코드가 압축되고 모든게 최적화) code를 생성

실행 : npm run build

push전 

1. package.json 마지막에 ,"homepage" : "https://chaemj97.github.io/React.git"
2. packgae.json scripts에 ,"deploy":"gh-pages -d build", "predeploy": "npm run build"
   1. deploy :  우리가 방금 설치한 gh-pages를 실행시키고 "build"라는 디렉토리를 가져가기
      1. gh-pages가 build 폴더를 homepage에 적힌 웹사이트에 업로드
   2. deploy하고 실행시 predeploy가 먼저 실행

수정 후 업테이트 하고 싶다면

npm run deploy



### Breaking Change

버전을 업데이트 하면서 코드가 깨져서 코드를 수정해야함

React.js에는 없음
