// src --> js --> footer.js
export function createFooter() {
  const footer = document.querySelector("footer");
  footer.classList.add("footer-origin-box");

  footer.innerHTML = `
  <hr class="footer-barrier">
  <div class="footer-box-l1">
    <div class="footer-box-l2">
      ARCLIGHT MK II Portfolio Theme<br>© 2025 Milad Saadat<br>Licensed under the MIT License
    </div>
  </div>
  `;
}
