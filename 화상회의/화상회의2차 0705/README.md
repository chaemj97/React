# 화상회의 만들기

- 기본 설정

  - fontend

    - npx create-react-app frontend

  - server

    - server.js
    - package.json
      - npm init으로 만들 수 있음
      - yarn init -y도 가능

  - 설치

    - server

      ```
      yarn add express socket.io
      ```

    - frontend

      ```
      yarn add socket.io-client styled-components
      ```

      

- 순서
  - yarn init -y
  - npx create-react-app frontend
  - 설치



- server url
  - "http://localhost:8080"
  - frontend의 package.json의 "proxy":"http://localhost:8080" 추가



- 실행

  - server

    ```
    node server.js
    ```

  - frontend

    ```
    yarn start
    ```

    