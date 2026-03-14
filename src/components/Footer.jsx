function Footer() {
  const socials = [
    { name: "Facebook", abbr: "f" },
    { name: "Instagram", abbr: "ig" },
    { name: "TikTok", abbr: "tt" },
    { name: "Twitter", abbr: "x" },
  ];
// esto hay que cambiarlo pq esta feo, 
// pero por ahora es un placeholder para mostrar que 
// habra redes sociales proximamente, cada una con su icono y nombre.
  return (
    <footer className="site-footer">
      <div>
        <h4>Route 66</h4>
        <img
          className="footer-logo"
          src="/assets/references/logo-contraste.7ddc12ebe66a8491be1140703728458f.svg"
          alt="Logo Route 66"
        />
      </div>
      <div>
        <h5>Sobre nosotros</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a 
          eros augue. Sed et dictum ipsum, sit amet placerat lorem. Etiam viverra 
          auctor placerat. Suspendisse iaculis libero eget consectetur elementum. 
        </p>
      </div>

      <div>
        <h5>Redes</h5>
        <p className="social-hint">Canales oficiales proximamente</p>
        <ul className="social-list" aria-label="Redes sociales">
          {socials.map((social) => (
            <li key={social.name} className="social-item">
              <span className="social-icon" aria-hidden="true">
                {social.abbr}
              </span>
              <span>{social.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
