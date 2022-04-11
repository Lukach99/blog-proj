/* async function fetchPosts(num) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  console.log(res);
  const pEl = document.createElement("p");
  pEl.innerText = res[num].body;
  document.body.append(pEl);
}

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (event) => {
  fetchPosts(getRandomInt(0, 100));
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
 */

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

const data = await fetchPosts();

console.log(data);
