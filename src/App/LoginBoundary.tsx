import React, { FunctionComponent, useEffect, useState } from 'react';
import { LoggInn } from './LoggInn/LoggInn';

import { veilarbStepup } from '../lenker';
import environment from '../utils/environment';
import hentVeilarbStatus from '../api/veilarbApi';

export enum Innlogget {
    LASTER,
    IKKE_INNLOGGET,
    INNLOGGET,
}

function setEssoCookieLocally() {
    document.cookie = 'nav-esso=0123456789..*; path=/; domain=localhost;';
}
async function getEssoToken() {
    let veilarbStatusRespons = await hentVeilarbStatus();
    if (!veilarbStatusRespons.erInnlogget) {
        window.location.href = veilarbStepup();
    }
}
const LoginBoundary: FunctionComponent = props => {
    const [innlogget, setInnlogget] = useState(Innlogget.LASTER);

    function localLogin() {
        if (document.cookie.includes('selvbetjening-idtoken')) {
            setInnlogget(Innlogget.INNLOGGET);
        } else {
            setInnlogget(Innlogget.IKKE_INNLOGGET);
        }
        setEssoCookieLocally();
    }

    useEffect(() => {
        setInnlogget(Innlogget.LASTER);
        const getLoginStatus = async () => {
            if (environment.MILJO === 'prod-sbs' || environment.MILJO === 'dev-sbs') {
                let veilarbStatusRespons = await hentVeilarbStatus();
                if (
                    veilarbStatusRespons.harGyldigOidcToken &&
                    veilarbStatusRespons.nivaOidc === 4
                ) {
                    setInnlogget(Innlogget.INNLOGGET);
                    await getEssoToken();
                } else if (!veilarbStatusRespons.harGyldigOidcToken) {
                    setInnlogget(Innlogget.IKKE_INNLOGGET);
                }
            } else {
                localLogin();
            }
        };
        getLoginStatus();
    }, []);

    if (innlogget === Innlogget.INNLOGGET) {
        return <> {props.children} </>;
    }
    if (innlogget === Innlogget.IKKE_INNLOGGET) {
        return <LoggInn />;
    } else {
        return null;
    }
};

export default LoginBoundary;
