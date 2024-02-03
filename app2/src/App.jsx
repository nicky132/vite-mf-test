class Mkh {
  constructor() {
    console.log("enter constructor");
    // this.init();
  }
  init() {
    return new Promise((resolve, reject) => {
      if (navigator.appVersion.includes("Macintosh")) {
        const jsweixin = import("./jweixin/jweixin-1.6.0.js");
        jsweixin.then((res) => {
          console.log("app2 10：", res);
          resolve("sucess");
        });
      } else {
        resolve("sucess");
      }
    });
  }
  navigatorTo() {
    console.log("enter navigatorTo");
  }
}

const mkh = new Mkh();

export default mkh;
