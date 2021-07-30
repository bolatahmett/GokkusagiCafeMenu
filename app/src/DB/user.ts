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
    ref.orderByChild('customerKey')
        .equalTo(user.Password)
        .once('value')
        .then(function (snapshot) {
            registerUser(user);
            onSuccess(user);
        });
}

export const registerCustomerKey = () => {
    var key = database.ref("customeruserkeys").push().key;
    const customerKey = getRandomInt(1000, 9999);
    var dbUser = { key: key, customerKey: customerKey, DateTime: new Date() };
    database.ref("customeruserkeys/" + customerKey).set(dbUser);
    return customerKey;
}

const getRandomInt = (min: any, max: any) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
