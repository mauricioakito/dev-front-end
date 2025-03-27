import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import HandleScroll from "../../utils/handleScroll";
import { BlockScroll } from "../../utils/blockScroll";

const headerOptions = [
  {
    href: "#about",
    text: "Sobre",
  },
  {
    href: "#services",
    text: "Serviços",
  },
  {
    href: "#portfolio",
    text: "Portfólio",
  },
  {
    href: "#experiences",
    text: "Experiências",
  },
  {
    href: "#recommendation",
    text: "Recomendações",
  },
  {
    href: "#contact",
    text: "Contato",
  },
];

const HeaderLinks = ({
  setIsOpen,
}: {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.headerLinks}>
      <button
        className={styles.closeIcon}
        onClick={() => setIsOpen && setIsOpen(false)}
      >
        <IoClose size="2rem" color="#fff" />
      </button>
      {headerOptions.map((item) => {
        return (
          <a href={item.href} onClick={() => setIsOpen && setIsOpen(false)}>
            {item.text}
          </a>
        );
      })}
    </div>
  );
};

const Mobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  HandleScroll(setScrolled);

  useEffect(() => {
    BlockScroll(isOpen)
  }, [isOpen])
  

  return (
    <header
      className={classNames(styles.headerMobile, {
        [styles.hasScrolled]: scrolled,
      })}
    >
      <div className={styles.outerLinks}>
        <a href="https://mauricioakito.github.io/dev-front-end">
          <img
            className={styles.imageHeader}
            src="favicon.svg"
            alt="Maurício Kitazawa"
          />
        </a>
        <button className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
          <IoMdMenu size="2rem" color={!scrolled ? "#fff" : "#000" } />
        </button>
      </div>
      <div
        className={classNames(styles.internalContainer, {
          [styles.drawerOpen]: isOpen,
        })}
      >
        <HeaderLinks setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

const Desktop = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  HandleScroll(setScrolled);

  return (
    <header
      className={classNames({
        [styles.hasScrolled]: scrolled,
      })}
    >
      <div className={styles.internalContainer}>
        <a href="https://mauricioakito.github.io/dev-front-end">
          <img
            className={styles.imageHeader}
            src="favicon.svg"
            alt="Maurício Kitazawa"
          />
        </a>
        <HeaderLinks />
      </div>
    </header>
  );
};

export const Header = {
  Mobile,
  Desktop,
};
