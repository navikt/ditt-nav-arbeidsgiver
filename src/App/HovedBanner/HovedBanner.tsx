import React, { FunctionComponent, useContext, useEffect, useCallback } from 'react';
import './HovedBanner.less';
import { Sidetittel } from 'nav-frontend-typografi';
import { OrganisasjonsListeContext } from '../../OrganisasjonsListeProvider';
import { OrganisasjonsDetaljerContext } from '../../OrganisasjonDetaljerProvider';
import {
    tomAltinnOrganisasjon,
    Organisasjon,
} from '../../Objekter/Organisasjoner/OrganisasjonerFraAltinn';
import { withRouter, RouteComponentProps } from 'react-router';
import Virksomhetsvelger from './Virksomhetsvelger/Virksomhetsvelger';
import EnkelVirksomhetsvelger from './EnkelVirksomhetsvelger/EnkelVirksomhetsvelger';

interface Props {
    tittel?: string;
}

const Banner: FunctionComponent<Props & RouteComponentProps<{ orgnummer: string }>> = props => {
    const { organisasjoner, organisasjonstre, visNyMeny } = useContext(OrganisasjonsListeContext);
    const { endreOrganisasjon, valgtOrganisasjon } = useContext(OrganisasjonsDetaljerContext);

    const endreOrgCallback = useCallback(
        orgnr => {
            const organisasjon = organisasjoner.find(org => org.OrganizationNumber === orgnr);
            if (organisasjon && organisasjon !== valgtOrganisasjon) {
                endreOrganisasjon(organisasjon);
            }
        },
        [endreOrganisasjon, organisasjoner, valgtOrganisasjon]
    );

    useEffect(() => {
        const forrigeOrganisasjon: Organisasjon = valgtOrganisasjon;
        let orgnrFraUrl = props.location.pathname.split('/')[1];
        const orgnrErSattIUrl = orgnrFraUrl && orgnrFraUrl.length > 0;
        if (orgnrErSattIUrl && orgnrFraUrl !== forrigeOrganisasjon.OrganizationNumber) {
            const organisasjonFraListe = organisasjoner.find(
                organisasjon => orgnrFraUrl === organisasjon.OrganizationNumber
            );
            if (organisasjonFraListe) {
                endreOrgCallback(organisasjonFraListe.OrganizationNumber);
            }
        } else if (organisasjoner[0] && valgtOrganisasjon === tomAltinnOrganisasjon) {
            endreOrgCallback(organisasjoner[0].OrganizationNumber);
            props.history.push('/' + organisasjoner[0].OrganizationNumber);
        }
    }, [
        organisasjoner,
        valgtOrganisasjon,
        props.history,
        props.location.pathname,
        endreOrgCallback,
    ]);

    return (
        <div className={'banner'}>
            <div className={'banner__senter'}>
                <Sidetittel className={'banner__sidetittel'}>Min side - Arbeidsgiver</Sidetittel>
                {organisasjoner.length !== 0 && (
                    <div className="banner__drop-down-container">
                        {visNyMeny && (
                            <Virksomhetsvelger
                                organisasjoner={organisasjoner}
                                organisasjonstre={organisasjonstre}
                                valgtOrganisasjon={valgtOrganisasjon}
                            />
                        )}
                        {!visNyMeny && <EnkelVirksomhetsvelger />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default withRouter(Banner);
