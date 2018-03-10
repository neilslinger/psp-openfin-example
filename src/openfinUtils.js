export function runApplication(name, height, width, top, left) {
    var app = new fin.desktop.Application({
      url: "http://localhost:8080/viewer.html",
      uuid: name,
      name: name,
      mainWindowOptions: {
          defaultHeight: height,
          defaultWidth: width,
          defaultTop: top,
          defaultLeft: left,
          saveWindowState: false,
          autoShow: true,
          shadow: true,
      }
    }, function () {
        console.log("New Application Created");
        app.run();
    }, function (error) {
        console.log("Error creating app:", error);
    });
  }

export function inOpenfin() {
    return (typeof fin !== 'undefined')
}