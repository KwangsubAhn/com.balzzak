import React from 'react';
import MainLayout from './layouts/MainLayout';

/**
 * This component is to define any pre set variables before rendering like user data, cookies and etc
 */
function Root(props: any) {
    const { children } = props;

    return (
        <MainLayout>
            { children }
        </MainLayout>
    );
}

export default Root;