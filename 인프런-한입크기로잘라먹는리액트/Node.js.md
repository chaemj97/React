- Node.js 설치 확인
  - node -v, npm -v



- **vscode**

  - 들여쓰기 자동
    - prettier 설치
    - open settings(UI)에서 
      - Editor: Format On Save 체크
      - Default Formatter : prettier로 바꾸기

  - 아이콘 바꾸기
    - meterial Icon Theme
      - theme 검색 후 Meterial Icons: Activate Icon Theme로 설정
  - 확대
    - zoom out 검색
  - node.js 실행
    - node 파일 이름



- GUL : Graphic User Interface
  - 클릭으로 명령 내리기
- CLI : Command Line Interface
  - 명령어를 입력하여 명령 내리기



- Node.js

  - 다른 파일 참조

    - 보내는 파일

      ```
      // 계산 기능을 하는 파일
      
      const add = (a,b) => a + b; 
      const sub = (a,b) => a - b; 
      
      module.exports = {
        moduleName: "calc module",
        add: add,
        sub: sub,
      };
      ```

    - 받는 파일

      ```
      const calc = require("./calc");
      
      console.log(calc.add(1,2)); // 3
      console.log(calc.sub(1,2)); // -1
      ```

      

- npm : Node Package Manager

  - Node.js의 패키지 관리 도구
  - npm init
    - package.json 만들어짐
    - 우리가 만들 패키지에 정보를 기록하는 환경 설정 파일
      - scripts :  자주 실행하는 명령어 만들어 두는 곳

- 다른 사람이 만든 패키지 다운로드
  - https://www.npmjs.com/
  - 