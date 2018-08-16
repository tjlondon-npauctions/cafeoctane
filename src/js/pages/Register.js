import Layout from '../common/layout/Layout';
import React from 'react';

export default class Register extends React.Component {
    state = {
        events: Object,
    };

    render() {
        return (
        <Layout>
            <div className="register content">
                <div className="container">
                    <div className="box">
                        <h3>Let's sign you up</h3>

                        <a className="facebookButton" href="/auth/login/facebook">Login with Facebook</a>

                        <a className="googleButton" href="/auth/login/google">Login with Google</a>
                    </div>
                </div>
            </div>
        </Layout>
        )
    }
}