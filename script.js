const joke = document.querySelector(".joke");
const nextJoke = document.querySelector(".nextJoke")
const answer = document.querySelector(".answer")
const question = document.querySelector(".question")



const getjokes = async () => {
    const res = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    let res1 = await res.json();
    let newJoke = res1.joke.split("?");
    question.textContent = newJoke[1] ? newJoke[0] + "?" : newJoke[0];
    answer.textContent = newJoke[1]
}
getjokes();

nextJoke.addEventListener('click', () => {
    getjokes()
})
