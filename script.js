window.addEventListener("beforeunload", function(e) {
  e.target.localStorage.clear()
})