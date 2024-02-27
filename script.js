function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/AVATAR.jpg")
  } else {
    img.setAttribute("src", "./assets/AVATAR.jpg")
  }

   const alt = document.querySelector(".alt")
   if (html.classList.contains("light")) {
     alt.setAttribute(
       "alt",
       "Logo da Remodel Art"
     )
   } else {
     alt.setAttribute(
       "alt",
       "Logo da Remodel Art"
     )
   }

  }
