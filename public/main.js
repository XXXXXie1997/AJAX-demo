// import { getMaxListeners } from "cluster";
// import { getPackedSettings } from "http2";

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log("download succed");
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onload = () => {
    console.log(request.response);
    console.log("success");
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("error");
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("error");
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
      console.log(object);
    }
  };
  request.send();
};

let n = 1;

getPage.onclick = () => {
  const request = new XMLHttpRequest();
  console.log(request);
  request.open("get", `/page${n + 1}`);
  console.log(request.open);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
