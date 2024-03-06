import './footer.css'

export const Footer = () => {
  return `
    <footer id="footer">
      <div>
        <p>© 2024 TheOz Shop. <span translate="yes">All rights reserved.</span></p>
      </div>
      <div>
        <ul class="flex social-icons">
          <li>
            <a href="https://github.com/EnkryptedAim" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i></a></li>
          <li>
            <a href="https://www.linkedin.com/in/miguel-angel-godinez/" target="_blank" rel="noopener">
              <i class="fa-brands fa-linkedin-in"></i></a></li>
          <li>
            <a href="#" target="_blank" rel="noopener">
              <i class="fa-brands fa-facebook"></i></a></li>
          <li>
            <a href="https://www.instagram.com/miguegodinez13/" target="_blank" rel="noopener">
              <i class="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="right-footer">
        <p>POWERED BY ENKRYPTED</p>
        <a href="/"><img src="https://res.cloudinary.com/duzguojrd/image/upload/v1709653673/PROYECTO2%20BUENO/zgqnhkecg957qvicurt7.png" alt="Logo"></a>
      </div>
    </footer>
  `
}
