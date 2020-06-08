import React from "react";
import { Route, Redirect } from "react-router-dom";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function PrivateRoute({ component: Component, ...rest }) {

    const GETUSER = gql`
        {
            getUser {
                id,
                loginid
            }
        }
    `;

    const { loading, error, data } = useQuery(GETUSER);

    if (loading) {
        console.log('...LOADING...')
        return <div>...LOADING...</div>
    }

    if (error) {
        console.log('...ERROR...', error)
        // return <div>...ERROR...</div>
        return <Route
            {...rest}
            render={<Redirect to="/login" />}
        />
    }

    if (data) {
        // console.log("Component", Component)
        // console.log("Rest", { ...rest })
        console.log("data", data)
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                (data && data.getUser && data.getUser.loginid) ? (
                    <Component  {...props} />
                ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    );
}