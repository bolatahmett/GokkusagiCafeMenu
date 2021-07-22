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
    { Title: "Sıcak içecekler", Description: "Sıcak içecekler", ImageSrc: './../../../images/sicakicecek.jpg', RedirectUrl: "SicakIcecek", Menu: SicakIcecekMenu, IsBase: 1 },
    { Title: "Soğuk içecekler", Description: "Soğuk içecekler", ImageSrc: './../../../images/sogukicecek.jpg', RedirectUrl: "SogukIcecek", Menu: SogukIcecekMenu, IsBase: 1 },
    { Title: "Vitamin Bar", Description: "Vitamin Bar", ImageSrc: './../../../images/vitaminbar.jpg', RedirectUrl: "VitaminBar", Menu: VitaminBarMenu, IsBase: 1 },
    { Title: "Tost Çeşitleri", Description: "Tost Çeşitleri", ImageSrc: './../../../images/tost.jpg', RedirectUrl: "TostCesitleri", Menu: TostMenu, IsBase: 1 },
    { Title: "Burgerler", Description: "Burgerler", ImageSrc: "./../../../images/burgers.png", RedirectUrl: "Burgerler", Menu: BurgerMenu, IsBase: 1 },
    { Title: "Mangaldan", Description: "Mangaldan", ImageSrc: './../../../images/mangal.jpg', RedirectUrl: "Mangaldan", Menu: MangalMenu, IsBase: 1 },
    { Title: "Pizza Çeşitleri", Description: "Pizza Çeşitleri", ImageSrc: './../../../images/pizza.jpg', RedirectUrl: "PizzaCesitleri", Menu: PizzaMenu, IsBase: 1 },
    { Title: "Makarna", Description: "Makarna", ImageSrc: './../../../images/makarna.jpg', RedirectUrl: "Makarna", Menu: MakarnaMenu, IsBase: 1 },
    { Title: "Sandviçler", Description: "Sandviçler", ImageSrc: './../../../images/sandvic.jpg', RedirectUrl: "Sandvic", Menu: SandvicMenu, IsBase: 1 },
    { Title: "Salatalar", Description: "Salatalar", ImageSrc: './../../../images/salata.jpg', RedirectUrl: "Salatalar", Menu: SalataMenu, IsBase: 1 },
    { Title: "Aparetifler", Description: "Aparetifler", ImageSrc: './../../../images/aperatif.jpg', RedirectUrl: "Aperatifler", Menu: AperatifMenu, IsBase: 1 },
    { Title: "Tatlılar", Description: "Tatlılar", ImageSrc: './../../../images/tatlılar.jpg', RedirectUrl: "Tatlilar", Menu: TatliMenu, IsBase: 1 },
];
