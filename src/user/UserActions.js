import * as c from './Type'

export class UserActions {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.login  = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.verify = this.verify.bind(this);
        this.userToken = 'user';
    }
    login() {
        localStorage.setItem(this.userToken, true);
        return this.dispatch({type: c.USER.login.success});
    }
    logout() {
        localStorage.removeItem(this.userToken);
        return this.dispatch({type: c.USER.logout.success});
    }
    verify() {
        const user = localStorage.getItem(this.userToken);
        if (user) {
            return this.dispatch({type: c.USER.verify.success});
        }
        return this.dispatch({type: c.USER.verify.error});
    }

}
export const test = () => {
    return {
        type: c.USER.test,
        payload: {
            name: "moo"
        }
      }
}