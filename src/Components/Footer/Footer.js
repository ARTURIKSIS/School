import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__label">Контактная информация:</p>
        <ul className="footer__list">
          <li className="footer__list-element">Телефон: +7хххххххххх</li>
          <li className="footer__list-element">Почта: XXXXXXXXXX</li>
          <li className="footer__list-element">Телеграмм: XXXXXXXXXX</li>
          <li className="footer__list-element">Адрес: XXXXXXXXXX</li>
        </ul>
      </div>
      <div className="footer__logo"></div>
    </div>
  );
}
export default Footer;
