import {AuthActions, ProductActions} from './AllActions'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'
import firebase from 'firebase';


export function LoginWithFacebook(){
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            var user = result.user;
            console.log("LoginSuccess");
            dispatch(AuthActions.userSignInSuccess(user))
            browserHistory.replace('/home')
        })
                .catch((error) => {
                console.log("login error", error)
                dispatch(AuthActions.userSignInFailed(error))
            })
    }
}

export function RegisterUser(SignUpData) {
    console.log("RegisterUser(SignUpData)", SignUpData)
    return (dispatch) => {
        dispatch(AuthActions.userSignUp());
        firebaseApp.auth().createUserWithEmailAndPassword(SignUpData.email, SignUpData.password)
            .then((data) => {
                const userRef = firebaseApp.database().ref('userInfo');
                userRef.push({
                    uid: data.uid,
                    email: data.email,
                    name: SignUpData.fullname
                }
                    , signUpSuccessData => {
                        dispatch(AuthActions.userSignUpSuccess({ uid: data.uid, email: SignUpData.email, name: SignUpData.fullname }));
                        browserHistory.replace('/home');

                    });
            })
            .catch((error) => {
                console.log("Something Went Wrong, Please Try Again ", error);
                dispatch(AuthActions.userSignUpFailed(error));
            });
    }
}

export function LoginUser(LogInData) {
    console.log("LoginUser(LogInData)", LogInData)
    return (dispatch) => {
        dispatch(AuthActions.userSignIn());
        firebaseApp.auth().signInWithEmailAndPassword(LogInData.email, LogInData.password)
            .then((data) => {
                return firebaseApp.database().ref('/userInfo' + data.uid).once('value', snapshot => {
                    let userData = snapshot.val();
                    console.log("userData", userData);
                    dispatch(AuthActions.userSignInSuccess(userData))
                    browserHistory.replace('/home')
                })

            })
            .catch((error) => {
                console.log("login error", error)
                dispatch(AuthActions.userSignInFailed(error))
            })
    }
}


export function AddNewProduct(AddNewProductData) {

    return (dispatch) => {
        dispatch(ProductActions.addProduct());
        firebaseApp.database().ref('products').push(AddNewProductData)
            .then((data) => {
                console.log("Product Added Successfully")
                dispatch(ProductActions.addProductSuccess(data));
                browserHistory.replace('/home/view-products');
            })
            .catch((error) => {
                console.log("Error in adding product", error)
                dispatch(ProductActions.addProductFailed(error))
            })
    }
}

export function ViewProducts() {
    return ((dispatch) => {
        dispatch(ProductActions.viewProduct());
        let ref = firebaseApp.database().ref().child('/products');
        ref.once('value', function (snapshot) {
            let productList = [];
            snapshot.forEach(childSnapshot => {
                var productObject = childSnapshot.val();
                productObject.key = childSnapshot.key;
                productList.push(productObject)
            })
            dispatch(ProductActions.viewProductSuccess(productList))
        })
            .catch((error) => {
                dispatch(ProductActions.viewProductFailed(error))
                console.log("error in getting Products", error)
            })
    })
}

