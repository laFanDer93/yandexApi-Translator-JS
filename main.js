window.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btn"),
    txt1 = document.getElementById("txt1"),
    txt2 = document.getElementById("txt2");
  btn.addEventListener("click", function() {
    let firstLang = document.getElementById("firstLang").options.selectedIndex;
    let secondLang = document.getElementById("secondLang").options
      .selectedIndex;
    let firstLangStr = "";
    let secondLangStr = "";
    switch (firstLang) {
      case 0:
        firstLangStr = "en";
        break; //Английский  en
      case 1:
        firstLangStr = "ru";
        break; //Русский     ru
      case 2:
        firstLangStr = "de";
        break; //Немецкий    de
      case 3:
        firstLangStr = "es";
        break; //Испанский   es
      case 4:
        firstLangStr = "zh";
        break; //Китайский   zh
      default:
        firstLangStr = "en";
    }
    switch (secondLang) {
      case 0:
        secondLangStr = "en";
        break;
      case 1:
        secondLangStr = "ru";
        break;
      case 2:
        secondLangStr = "de";
        break;
      case 3:
        secondLangStr = "es";
        break;
      case 4:
        secondLangStr = "zh";
        break;
      default:
        secondLangStr = "en";
    }

    let request = new XMLHttpRequest();
    let text = encodeURIComponent(txt1.value);
    const key =
      "trnsl.1.1.20170408T091129Z.c48f89c680ca9072.9a307807964083741a2848110b90a7c7fe4d525a";
    const url =
      "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
      key +
      "&text=" +
      text +
      "&lang=" +
      firstLangStr +
      "-" +
      secondLangStr +
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
