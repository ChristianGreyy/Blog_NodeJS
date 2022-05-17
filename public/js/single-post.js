// console.log(document.querySelector(".content-post").innerHTML);

if (document.querySelector(".content-post")) {
  const str = document.querySelector(".content-post").innerText;
  document.querySelector(".content-post").innerHTML = str;
}
