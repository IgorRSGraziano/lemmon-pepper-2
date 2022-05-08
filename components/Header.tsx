import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { defaultContainer, defaultContent } from "styles/globals";
import { colors, sizes, fonts } from "services/styles.json";
import establishment from "services/establishment.json";

const BackgroundHeader = styled.header`
  ${defaultContainer(colors.primaryPageBackground, "300px")}
`;

const HeaderStyled = styled.div`
  ${defaultContent}
`;

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const MenuStyled = styled.ul`
  display: flex;
  gap: 20px;

  li {
    position: relative;
    transition: 0.2s;
    font-size: ${sizes.font1};

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      background-color: ${colors.highLightColor};
      left: 0;
      bottom: -2px;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: ${colors.highLightColor};
      transition: 0.2s;
    }
  }
`;

function Header() {
  return (
    <BackgroundHeader>
      <HeaderStyled>
        <NavbarStyled>
          <Link href={"/"}>
            <a>
              <Image
                src={"/icons/logo.svg"}
                width={187}
                height={51}
                alt={`${establishment.brandName}`}
              />
            </a>
          </Link>
          {/* //TODO: Após fazer outras seções, falta colocar os links para seus respectivos ID's */}
          <MenuStyled>
            <li>Ínicio</li>
            <li>Horários</li>
            <li>Localização</li>
          </MenuStyled>
        </NavbarStyled>
      </HeaderStyled>
    </BackgroundHeader>
  );
}

export default Header;
