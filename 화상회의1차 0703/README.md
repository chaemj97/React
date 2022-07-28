# 화상회의 만들기

- 기본 설정
  - fontend
    - npx create-react-app frontend
  - server
    - server.js
    - package.json
      - npm init으로 만들 수 있음
  - 설치
    - npm i express socket.io nodemon
      - express
        - 
      - socket.io
        - 
      - nodemon
  - 실행
    - server : npm run dev
    - frontend : yarn start



- ## yarn

  - javascirpt 의 package manager

  - 설치

    ```
    npm install -g yarn
    ```

  - 패키지 설치

    - 자동으로 package.json 파일에 저장

    ```
    yarn add <package>
    
    // 현 프로젝트에 필요한 설치
    yarn add yarn add simple-peer socket.io-client @material-ui/core @material-ui/icons react-copy-to-clipboard
    ```

    

- ## **socket.io** : 서버와 클라이언트 연결

  - event_name은 개발자가 임의로 설정 가능

  - socket 서버 설정

    - app서버 설정

      ```
      const app = require("express")(); 
      const server = app.listen(8005, ()=>{ });
      ```

    - 소켓IO에 서버 정보를 넘겨주고 구동

      ```
      const io = require("socket.io")(server, {
        cors: {
        	// frontend 주소
          origin: "http://localhost:3000",
          methods: ["GET", "POST"],
        },
      });
      ```

      

  - 클라이언트 -> 서버

    - on 메소드

      - io.on

        ```
        io.on('connection/disconnection',function(socket){});
        
        //'connection' : socket.io의 기본 이벤트, 사용자가 웹사이트에 접속하면 자동으로 발생하는 이벤트
        ```

      - socket.on

        - 클라이언트에서 지정한 이벤트가 emit되면 수신 발생

        ```
        socket.on('event_name', function(data) {
          console.log('Message from Client: ' + data);
        });
        ```

  - 서버 -> 클라이언트

    - emit 메서드

      - io.emit

        - 서버가 현재 접속해 있는 모든 클라이언트에게 이벤트 전달

        ```
        io.emit('event_name', msg);
        ```

      - socket.emit

        - 메시지를 전송한 클라이언트에게만 메시지 전송
        - 서버쪽에서 event 발생시키는 함수
        - 서버에서 이벤트 발생시키면 클라이언트 페이지의 해당 이벤트 리스너가 받아서 처리
        - 해당 소켓을 통해 클라이언트에게 메시지 전송

        ```
        socket.emit('event_name', msg);
        ```

      - socket.broadcast.emit

        - 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송

        ```
        socket.broadcast.emit('event_name', msg);
        ```

      - ioi.to(id).emit

        - 특정 클라이언트에게만 메시지를 전송

        ```
        io.to(id).emit('event_name',data);
        ```



- app.js

  - 카메라 마이크 사용

    ```
    navigator.mediaDevices.getUserMedia({audio: true, video: true})
    ```

    