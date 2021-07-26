import { MenuModel } from "../Model/MenuModel";
import { AperatifMenu } from "./AperatifMenu";
import { BurgerMenu } from "./BurgerMenu";
import { MakarnaMenu } from "./MakarnaMenu";
import { MangalMenu } from "./MangalMenu";
import { PizzaMenu } from "./PizzaMenu";
import { SalataMenu } from "./SalataMenu";
import { SandvicMenu } from "./SandvicMenu";
import { SicakIcecekMenu } from "./SicakIcecekMenu";
import { SogukIcecekMenu } from "./SogukIcecekMenu";
import { TatliMenu } from "./TatliMenu";
import { TostMenu } from "./TostMenu";
import { VitaminBarMenu } from "./VitaminBar";

export const mainMenu: MenuModel[] = [
    { Title: "Sıcak içecekler", Description: "Sıcak içecekler", ImageSrc: './../../../images/sicakicecek.jpg', Code: "SicakIcecek", Menu: SicakIcecekMenu, IsBase: 1 },
    { Title: "Soğuk içecekler", Description: "Soğuk içecekler", ImageSrc: './../../../images/sogukicecek.jpg', Code: "SogukIcecek", Menu: SogukIcecekMenu, IsBase: 1 },
    { Title: "Vitamin Bar", Description: "Vitamin Bar", ImageSrc: './../../../images/vitaminbar.jpg', Code: "VitaminBar", Menu: VitaminBarMenu, IsBase: 1 },
    { Title: "Tost Çeşitleri", Description: "Tost Çeşitleri", ImageSrc: './../../../images/tost.jpg', Code: "TostCesitleri", Menu: TostMenu, IsBase: 1 },
    { Title: "Burgerler", Description: "Burgerler", ImageSrc: "./../../../images/burgers.png", Code: "Burgerler", Menu: BurgerMenu, IsBase: 1 },
    { Title: "Mangaldan", Description: "Mangaldan", ImageSrc: './../../../images/mangal.jpg', Code: "Mangaldan", Menu: MangalMenu, IsBase: 1 },
    { Title: "Pizza Çeşitleri", Description: "Pizza Çeşitleri", ImageSrc: './../../../images/pizza.jpg', Code: "PizzaCesitleri", Menu: PizzaMenu, IsBase: 1 },
    { Title: "Makarna", Description: "Makarna", ImageSrc: './../../../images/makarna.jpg', Code: "Makarna", Menu: MakarnaMenu, IsBase: 1 },
    { Title: "Sandviçler", Description: "Sandviçler", ImageSrc: './../../../images/sandvic.jpg', Code: "Sandvic", Menu: SandvicMenu, IsBase: 1 },
    { Title: "Salatalar", Description: "Salatalar", ImageSrc: './../../../images/salata.jpg', Code: "Salatalar", Menu: SalataMenu, IsBase: 1 },
    { Title: "Aparetifler", Description: "Aparetifler", ImageSrc: './../../../images/aperatif.jpg', Code: "Aperatifler", Menu: AperatifMenu, IsBase: 1 },
    { Title: "Tatlılar", Description: "Tatlılar", ImageSrc: './../../../images/tatlılar.jpg', Code: "Tatlilar", Menu: TatliMenu, IsBase: 1 },
];
