import { greet } from "./greet.js";

if (isCustomDevServer) {
  // 加载客户端socket runtime
  import("./client.js").then(function () {
    go();
  });
} else {
  go();
}

function go() {
  function render() {
    document.getElementById("app").innerHTML = greet("Tony~");
    document.getElementById("inputText").onchange = function () {
      console.log('onchange')
    }
    document.getElementById("inputText").oninput = function () {
      console.log('oninput')
    }
    document.getElementById("inputText").onfocus = function () {
      console.log('onfocus')
    }
    document.getElementById("inputText").onblur = function () {
      console.log('onblur')
    }
  }
  render();

  if (module.hot) {
    module.hot.accept(["./greet.js"], () => {
      render();
    });
  }
}
