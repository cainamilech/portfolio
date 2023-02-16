import { useState, useEffect } from "react";

import icons from "./assets/modules/FixedIcons.module.scss";

import whats from "./assets/svgs/whatsapp.svg";
import arrow from "./assets/svgs/arrow.svg";

const FixedIcons = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={icons["icons"]}>
      <a
        href="https://wa.me/5548996802068"
        target="_blank"
        rel="noreferrer"
        className={icons["icons__whats"]}
      >
        <figure>
          <img src={whats} alt="Ícone WhatsApp" />
        </figure>
      </a>
      {scrollTop > 0 ? (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={icons["icons__arrow"]}
        >
          <figure>
            <img src={arrow} alt="Ícone subir ao topo" />
          </figure>
        </div>
      ) : undefined}
    </div>
  );
};

export { FixedIcons };
