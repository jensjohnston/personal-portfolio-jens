const toggleTag = document.querySelector(".burger")
const mainTag = document.querySelector("nav")

console.log("dw")

toggleTag.addEventListener("click", function (event) {
  
	console.log("hello")

  mainTag.classList.toggle("-translate-x-full")


  if (mainTag.classList.contains("-translate-x-full")) {
		toggleTag.innerHTML = `<img src="burger.svg">`
  } else {
    toggleTag.innerHTML = `<img src="close.svg">`
  }
  
  event.preventDefault()
})