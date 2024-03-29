// React Components
import React from "react";

// Images
import EnsoLogo from "../../images/enso-logo.png";
import SpanishLogo from "../../images/spanish-language.png";
import EnglishLogo from "../../images/english-language.png";

// Styles imported
import styles from "./navbar.module.scss";

// Multi language
import { withNamespaces } from "react-i18next";
import i18n from "../../i18n";

const NavBar = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.LogoContainer}>
        <img className={styles.LogoImage} src={EnsoLogo} alt="Enso Logo" />
        <div>
          <h2>enso</h2>
          <h3>co-living</h3>
        </div>
      </div>

      <div className={styles.ToggleButtonContainer}>
        <button
          onClick={() => changeLanguage("es")}
          className={styles.ToggleLanguageButton}
        >
          <img
            src={SpanishLogo}
            alt="Spanish language logo"
            className={styles.LanguageLogo}
          />
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className={styles.ToggleLanguageButton}
        >
          <img
            src={EnglishLogo}
            alt="English language logo"
            className={styles.LanguageLogo}
          />
        </button>
      </div>
    </div>
  );
};

export default withNamespaces()(NavBar);
