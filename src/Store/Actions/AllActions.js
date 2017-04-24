import { Constants } from '../Constants'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'

export class AuthActions {

    //LoggedIn
    static hasLoggedIn(email) {
        const action = {
            type: Constants.HAS_SIGNED_IN,
            email
        }
        return action;
    }


    //SignIn
    static userSignIn() {
        return {
            type: Constants.SIGN_IN,

        }
    }

    static userSignInSuccess(authUserData) {
        return {
            type: Constants.SIGN_IN_SUCCESS,
            authUserData
        }

    }

    static userSignInFailed(error) {
        return {
            type: Constants.SIGN_IN_FAILED,
            error
        }

    }

    static userLogOut() {
        return  {
            type: Constants.LOGOUT
        }
    }

    static userLogOutSuccess() {
        const action = {
            type: Constants.LOG_OUT_SUCCESS
        }
        return action;
    }

}


export class ProductActions{

static addProduct() {
        return {
            type: Constants.ADD_PRODUCT
        }
    }


    static addProductSuccess(addProductData) {
        return {
            type: Constants.ADD_PRODUCT_SUCCESS,
            addProductData
        }
    }


    static addProductFailed(error) {
        return {
            type: Constants.ADD_PRODUCT_FAILED,
            error
        }
    }

    static viewProduct() {
        return {
            type: Constants.VIEW_PRODUCT
        }
    }


    static viewProductSuccess(viewProductData, productObject) {
        return {
            type: Constants.VIEW_PRODUCT_SUCCESS,
            viewProductData,
            productObject
        }
    }


    static viewProductFailed(error) {
        return {
            type: Constants.VIEW_PRODUCT_FAILED,
            error
        }
    }
}
