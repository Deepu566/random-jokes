const joke = document.querySelector(".joke");
const nextJoke = document.querySelector(".nextJoke")

let newJoke;

const getjokes = async () => {
    const res = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    let res1 = await res.json();
    newJoke = res1.joke;
    joke.textContent = newJoke
}
getjokes();

nextJoke.addEventListener('click', () => {
    getjokes()
})
