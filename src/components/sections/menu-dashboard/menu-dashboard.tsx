"use client";

import style from "./menu-dashboard.module.scss";
import React, { useEffect } from "react";
import { Button, Stack } from "@mui/material";
import logo from "@/assets/imgs/logo.svg";
import mainIcon from "@/assets/imgs/icon.svg";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useRouter } from "next/router";

export type DataSectionMenuDashBoard = {
  initialPage: string;
};

type DataMenuOption = {
  text: string;
  link: string;
  icon: JSX.Element;
  active: boolean;
  setPage: (page: string) => void;
};

function MenuOption({ icon, link, text, active, setPage }: DataMenuOption) {
  return (
    <Link
      className={`${style.menuOption} ${active ? style.active : ""}`}
      href={`/painel/${link}`}
      onClick={() => {
        setPage(link);
      }}
    >
      <div className={style.containerIcon}>
        {React.cloneElement(icon, {
          className: `${icon.props} ${style.icon}`,
        })}
      </div>
      <span>{text}</span>
    </Link>
  );
}

export default function SectionMenuDashBoard(data: DataSectionMenuDashBoard) {
  const { initialPage } = data;

  const [page, setPage] = React.useState<string>(initialPage);

  return (
    <section id={style.SectionMenuDashBoard}>
      <div className={style.headerMenu}>
        <img className={style.mainIcon} src={mainIcon.src} alt="Icone" />
        <img className={style.logo} src={logo.src} alt="Logo" />
      </div>

      <div className={style.bodyMenu}>
        {(
          [
            { text: "Home", link: "", icon: <HomeIcon /> },
            { text: "Vendas", link: "vendas", icon: <LocalAtmIcon /> },
            { text: "Produtos", link: "produtos", icon: <StoreIcon /> },
            {
              text: "Marketplace",
              link: "marketplace",
              icon: <LocalGroceryStoreIcon />,
            },
            { text: "Finanças", link: "financas", icon: <AttachMoneyIcon /> },
            {
              text: "Minhas Compras",
              link: "minhas-compras",
              icon: <InventoryIcon />,
            },
          ] as Array<DataMenuOption>
        ).map(({ text, link, icon }, index) => {
          return (
            <MenuOption
              key={index}
              text={text}
              link={link}
              icon={icon}
              active={link === page}
              setPage={setPage}
            />
          );
        })}
      </div>

      {/* <div className={style.footerMenu}>
        <li>
          <Button variant="contained">Tema claro/escuro</Button>
        </li>
        <li>
          <Link href="/painel/configuracoes">Ir para Configurações</Link>
        </li>
        <li>
          <Link href="/painel/perfil">Ir para Perfil</Link>
        </li>
      </div> */}
    </section>
  );
}
