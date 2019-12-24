import { greet } from "./greet.js";

isWebpackDevServer
  ? go()
  : // 加载客户端socket runtime
    import("./client.js").then(function() {
      go();
    });

function go() {
  function render() {
    document.getElementById("app").innerHTML = greet("Tony~");
  }
  render();

  if (module.hot) {
    module.hot.accept(["./greet.js"], () => {
      render();
    });
  }
}
