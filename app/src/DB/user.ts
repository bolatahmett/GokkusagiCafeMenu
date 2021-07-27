import { database } from "../firebase";

export const registerUser = (user: IUserModel) => {
    var userKey = database.ref("user/" + user.IdentifyNumber).push().key;
    var dbUser = { ...user, key: userKey };
    database.ref("user/" + user.IdentifyNumber).set(dbUser);
}

export const loginUser = (user: ILoginModel, onSuccess: any) => {
    var ref = database.ref("user")
    ref.orderByChild('IdentifyNumber')
        .equalTo(user.IdentifyNumber)
        .once('value')
        .then(function (snapshot) {
            var value = snapshot.val()[user.IdentifyNumber];
            if (value.Password === user.Password) {
                onSuccess(value);
            } else {
                alert("bulamadım");
            }
        });
}