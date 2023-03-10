import headerImage from "../img/cory_128.png";

export default function Header() {
  return (
    <header>
        <img className="header-img" src={headerImage} />
        <div className="header-text-section">
            <h1>Cory der GroΓe</h1>
            <p className="header-subtitle">Web Developer & Language Learner</p>
            <div className="hr"></div>
            <p className="header-text">Nat πΊπΈ / B2 π©πͺ / A1 π»π¦ π―π΅</p>
        </div>
    </header>
  );
}