import { database } from "../firebase";

export const registerUser = (user: IUserModel) => {
    var userKey = database.ref("user/" + user.PhoneNumber).push().key;
    var dbUser = { ...user, key: userKey };
    database.ref("user/" + user.PhoneNumber).set(dbUser);
}

export const loginUser = (user: ILoginModel, onSuccess: any) => {
    var ref = database.ref("user")
    ref.orderByChild('PhoneNumber')
        .equalTo(user.PhoneNumber)
        .once('value')
        .then(function (snapshot) {
            var value = snapshot.val()[user.PhoneNumber];
            if (value.Password === user.Password) {
                onSuccess(value);
            } else {
                alert("bulamadım");
            }
        });
}

export const loginCustomerUser = (user: IUserModel, onSuccess: any) => {
    var ref = database.ref("customeruserkeys")
    ref.orderByChild('key')
        .equalTo(user.Password)
        .once('value')
        .then(function (snapshot) {
            registerUser(user);
            onSuccess();
        });
}

export const registerCustomerKey = () => {
    var userKey = database.ref("customeruserkeys").push().key;
    var dbUser = { key: userKey, DateTime: new Date() };
    database.ref("customeruserkeys/" + userKey).set(dbUser);
    return userKey;
}
