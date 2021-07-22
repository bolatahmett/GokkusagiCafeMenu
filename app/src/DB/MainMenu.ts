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
    { Title: "Burgerler", Description: "Burgerler", ImageSrc: "./../../../images/burgers.png", RedirectUrl: "Burgerler", Menu: BurgerMenu },
    { Title: "Mangaldan", Description: "Mangaldan", ImageSrc: './../../../images/mangal.jpg', RedirectUrl: "Mangaldan", Menu: MangalMenu },
    { Title: "Tost Çeşitleri", Description: "Tost Çeşitleri", ImageSrc: './../../../images/tost.jpg', RedirectUrl: "TostCesitleri", Menu: TostMenu },
    { Title: "Pizza Çeşitleri", Description: "Pizza Çeşitleri", ImageSrc: './../../../images/pizza.jpg', RedirectUrl: "PizzaCesitleri", Menu: PizzaMenu },
    { Title: "Makarna", Description: "Makarna", ImageSrc: './../../../images/makarna.jpg', RedirectUrl: "Makarna", Menu: MakarnaMenu },
    { Title: "Sandviçler", Description: "Sandviçler", ImageSrc: './../../../images/sandvic.jpg', RedirectUrl: "Sandvic", Menu: SandvicMenu },
    { Title: "Salatalar", Description: "Salatalar", ImageSrc: './../../../images/salata.jpg', RedirectUrl: "Salatalar", Menu: SalataMenu },
    { Title: "Aparetifler", Description: "Aparetifler", ImageSrc: './../../../images/aperatif.jpg', RedirectUrl: "Aperatifler", Menu: AperatifMenu },
    { Title: "Tatlılar", Description: "Tatlılar", ImageSrc: './../../../images/tatlılar.jpg', RedirectUrl: "Tatlilar", Menu: TatliMenu },
    { Title: "Soğuk içecekler", Description: "Soğuk içecekler", ImageSrc: './../../../images/sogukicecek.jpg', RedirectUrl: "SogukIcecek", Menu: SogukIcecekMenu },
    { Title: "Sıcak içecekler", Description: "Sıcak içecekler", ImageSrc: './../../../images/sicakicecek.jpg', RedirectUrl: "SicakIcecek", Menu: SicakIcecekMenu },
    { Title: "Vitamin Bar", Description: "Vitamin Bar", ImageSrc: './../../../images/vitaminbar.jpg', RedirectUrl: "VitaminBar", Menu: VitaminBarMenu, },
];
