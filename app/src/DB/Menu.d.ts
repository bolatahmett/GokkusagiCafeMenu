import { MenuModel } from "../Model/MenuModel";
export declare const registerAll: () => void;
export declare const registerMenu: (menu: MenuModel, code: string) => void;
export declare const updateMenu: (element: MenuModel, code: string) => void;
export declare const getMenu: (code: string, onSuccess: any) => MenuModel[];
export declare const removeMenuItem: (menuItem: MenuModel) => void;
