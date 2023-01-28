import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {getUserProfile, UserProfileType} from '../../redux/profilePage-reducer';
import {withRouter} from '../common/WithRouter/WithRouter';
import {Navigate} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerClassType> {
    componentDidMount() {
        let userId = Number(this.props.params.userId);
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    };

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>;
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}


type ProfileContainerClassType = MapStatePropsType & MapDispatchPropsType & {
    params: Record<string, string>
}

type MapStatePropsType = {
    profile: UserProfileType
    isAuth: boolean
};
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    };
};
export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));