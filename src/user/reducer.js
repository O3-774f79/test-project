import * as c from './Type'

const userDefault = {
    name:'John Doe',
    logged: false,
    verified: false
}

export default function mainReducer(state = userDefault, action) {
    var user = Object.assign({}, state);
    switch (action.type) {
        case c.USER.login.success:
        case c.USER.verify.success:
            user.verified = true;
            user.logged = true;
            return user;

        case c.USER.logout.success:
            user.logged = false;
            return user;
        case c.USER.verify.error:
            user.verified = true;
            return user;
        case c.USER.test:
            return [...state, user.name=action.playload.name]
        default:
            return user;
    }
}