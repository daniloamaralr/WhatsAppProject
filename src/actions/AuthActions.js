import firebase from '../firebase_connection'


export const checkLogin = () => {

	return (dispatch) => {

        let user = firebase.auth().CurrentUser;

		if(user) {
			dispatch({
				type:'changeStatus',
				payload:{
					status:1
				}
			});
		} else {
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		}

	}

};