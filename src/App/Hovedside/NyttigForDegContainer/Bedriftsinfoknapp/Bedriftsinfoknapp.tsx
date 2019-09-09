import React, { FunctionComponent, useContext } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import bedriftinfoikon from './infoombedriftikon.svg';
import './Bedriftsinfoknapp.less';
import Lenkepanel from 'nav-frontend-lenkepanel';
import { OrganisasjonsDetaljerContext } from '../../../../OrganisasjonDetaljerProvider';
import { Link } from "react-router-dom";

const Bedriftsinfoknapp: FunctionComponent = () => {
    const { valgtOrganisasjon } = useContext(OrganisasjonsDetaljerContext);
    return (
        <Lenkepanel
            href={'/bedriftsinformasjon'}
            className={'bedriftsinfo-knapp'}
            tittelProps={'undertittel'}
            linkCreator={(props: any) => <Link to={props.href + '?bedrift='+ valgtOrganisasjon.OrganizationNumber} {...props} >{props.children}</Link>}
        >
            <div className={'bedriftsinfo-knapp__wrapper'}>
                <img className={'bedriftsinfo-knapp__ikon'} src={bedriftinfoikon} alt="" />
                <Undertittel className={'bedriftsinfo-knapp__tekst'}>
                    Informasjon om din bedrift
                </Undertittel>
            </div>
        </Lenkepanel>
    );
};

export default Bedriftsinfoknapp;
