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

export const callingWaiter = (user: IUserModel) => {
    var key = database.ref("waitercall").push().key;
    var dbUser = { key: key, deskno: user.DeskNo, DateTime: new Date() };
    database.ref("waitercall/" + user.DeskNo).set(dbUser);
}

export const getWaiterCall = (onSuccess: any) => {
    var ref = database.ref("waitercall")
    ref.once('value').then((dataSnapshot) => {
        return dataSnapshot.numChildren()
    }).then((count) => {
        ref.on('child_added', (snapshot) => {

            debugger;
            if (count > 0) {
                count--
                return;
            }
            var data = snapshot.key;
            onSuccess(data);
        });
    });
}



const getRandomInt = (min: any, max: any) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
