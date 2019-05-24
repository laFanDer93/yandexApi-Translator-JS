class KeyStorage {
  getKey = function() {
    return "trnsl.1.1.20170408T091129Z.c48f89c680ca9072.9a307807964083741a2848110b90a7c7fe4d525a";
  };
}

window.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btn"),
    txt1 = document.getElementById("txt1"),
    txt2 = document.getElementById("txt2");
  btn.addEventListener("click", function() {
    let firstLang = document.getElementById("firstLang");
    let secondLang = document.getElementById("secondLang");
    let request = new XMLHttpRequest();
    let text = encodeURIComponent(txt1.value);
    let key = new KeyStorage();
    const url =
      "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
      key.getKey() +
      "&text=" +
      text +
      "&lang=" +
      firstLang.value +
      "-" +
      secondLang.value +
      "&format=plain&options=1";
    request.open("GET", url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        txt2.value = data.text;
      }
    };
    request.send();
  });
});
if (firstLang.selectedIndex === 2) {
  alert("hi");
}
