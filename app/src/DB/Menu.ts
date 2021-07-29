import { database } from "../firebase";
import { MenuModel } from "../Model/MenuModel";
import { mainMenu } from "./MainMenu";

export const registerAll = () => {

    mainMenu.forEach((element: MenuModel) => {
        var menuKey = database.ref("MainMenu" + "/").push().key;
        var dbMenu = { ...element, key: menuKey };
        database.ref("MainMenu" + "/" + element.Code).set(dbMenu);
    });
}

export const registerMenu = (menu: MenuModel, code: string) => {
    var menuKey = database.ref(menu.Code + "/").push().key;
    var dbMenu = { ...menu, key: menuKey };
    database.ref(menu.Code + "/" + menuKey).set(dbMenu);
}

export const updateMenu = (element: MenuModel, code: string) => {
    var dbMenu = { ...element };
    database.ref("MainMenu" + "/" + element.Code).set(dbMenu);
}

export const getMenu = (code: string, onSuccess: any) => {
    debugger;
    let result: MenuModel[] = []

    var ref = database.ref(code);
    ref.once('value')
        .then(function (snapshot) {
            snapshot.forEach((e) => {
                result.push(e.val() as MenuModel);
            });

            onSuccess(result);
        });
    return result;
}

export const removeMenuItem = (menuItem: MenuModel) => {
    database.ref(menuItem.Code + "/" + menuItem.key).remove();
}