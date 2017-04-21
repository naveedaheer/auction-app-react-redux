import AllActions from './AllActions'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'
import firebase from 'firebase';


export function LoginWithFacebook(){
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            var user = result.user;
            console.log("LoginSuccess");
            dispatch(AllActions.userSignInSuccess(user))
            browserHistory.replace('/home')
        })
                .catch((error) => {
                console.log("login error", error)
                dispatch(AllActions.userSignInFailed(error))
            })
    }
}

export function RegisterUser(SignUpData) {
    console.log("RegisterUser(SignUpData)", SignUpData)
    return (dispatch) => {
        dispatch(AllActions.userSignUp());
        firebaseApp.auth().createUserWithEmailAndPassword(SignUpData.email, SignUpData.password)
            .then((data) => {
                const userRef = firebaseApp.database().ref('userInfo');
                userRef.push({
                    uid: data.uid,
                    email: data.email,
                    name: SignUpData.fullname
                }
                    , signUpSuccessData => {
                        dispatch(AllActions.userSignUpSuccess({ uid: data.uid, email: SignUpData.email, name: SignUpData.fullname }));
                        browserHistory.replace('/home');

                    });
            })
            .catch((error) => {
                console.log("Something Went Wrong, Please Try Again ", error);
                dispatch(AllActions.userSignUpFailed(error));
            });
    }
}

export function LoginUser(LogInData) {
    console.log("LoginUser(LogInData)", LogInData)
    return (dispatch) => {
        dispatch(AllActions.userSignIn());
        firebaseApp.auth().signInWithEmailAndPassword(LogInData.email, LogInData.password)
            .then((data) => {
                return firebaseApp.database().ref('/userInfo' + data.uid).once('value', snapshot => {
                    let userData = snapshot.val();
                    console.log("userData", userData);
                    dispatch(AllActions.userSignInSuccess(userData))
                    browserHistory.replace('/home')
                })

            })
            .catch((error) => {
                console.log("login error", error)
                dispatch(AllActions.userSignInFailed(error))
            })
    }
}