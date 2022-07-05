const http = require("http");
const app = require("express")();
const server = http.createServer(app);
// 서버 연결
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// 클라이언트가 웹 소켓으로 서버에 연결했을 때
io.on("connection", (socket) => {
  // 메시지를 전송한 클라이언트에게만 socket.id 전송
  socket.emit("me", socket.id);
  // 연결 종료 시
  socket.on("disconnect", () => {
    // 연결 종료하는 사람 제외 모두에게 전달
    socket.broadcast.emit("callEnded");
  });
  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(5000, () => console.log("server is running on port 5000"));
