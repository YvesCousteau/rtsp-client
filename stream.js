const Stream = require("node-rtsp-stream");

const stream = new Stream({
  name: "test_stream",
  streamUrl: "rtsp://127.0.0.1:8554/test",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "",
    "-r": 30, // Frame rate
  },
});

console.log("RTSP stream is running on ws://localhost:9999");
