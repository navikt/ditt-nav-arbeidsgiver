import React, { FunctionComponent, useContext, useEffect, useState } from 'react';

import { SyfoTilgangContext } from '../../../SyfoTilgangProvider';
import { OrganisasjonsDetaljerContext } from '../../../OrganisasjonDetaljerProvider';
import './TjenesteBoksContainer.less';
import Syfoboks from './Syfoboks/Syfoboks';
import Pamboks from './Pamboks/Pamboks';
import Innholdsboks from '../Innholdsboks/Innholdsboks';
import Arbeidstreningboks from './Arbeidstreningboks/Arbeidstreningboks';
import IAwebboks from './IAwebboks/IAwebboks';
import { OrganisasjonsListeContext } from '../../../OrganisasjonsListeProvider';
import LasterBoks from '../AltinnContainer/LasterBoks/LasterBoks';
import ManglerTilgangBoks from '../ManglerTilgangBoks/ManglerTilgangBoks';
import { Tilgang } from '../../LoginBoundary';

const TjenesteBoksContainer: FunctionComponent = () => {
    const { tilgangTilSyfoState } = useContext(SyfoTilgangContext);
    const { tilgangTilPamState, valgtOrganisasjon, tilgangTilArbeidsavtaler, visIA } = useContext(
        OrganisasjonsDetaljerContext
    );
    const { arbeidsavtaler, antallTilganger } = useContext(OrganisasjonsDetaljerContext);
    const { organisasjonerMedIAWEB } = useContext(OrganisasjonsListeContext);
    const { organisasjoner } = useContext(OrganisasjonsListeContext);
    const skalViseManglerTilgangBoks = !(organisasjoner.length > 0 || antallTilganger > 0);
    const [typeAntall, settypeAntall] = useState('');
    const [ferdigLastet, setFerdigLastet] = useState(false);

    useEffect(() => {
        setFerdigLastet(false);

        if (antallTilganger % 2 === 0) {
            settypeAntall('antall-partall');
        } else if (antallTilganger === 1) {
            settypeAntall('antall-en');
        } else {
            settypeAntall('antall-oddetall');
        }

        if (
            tilgangTilPamState !== Tilgang.LASTER &&
            tilgangTilSyfoState !== Tilgang.LASTER &&
            tilgangTilArbeidsavtaler !== Tilgang.LASTER
        ) {
            setFerdigLastet(true);
        }
    }, [
        tilgangTilSyfoState,
        tilgangTilPamState,
        tilgangTilArbeidsavtaler,
        arbeidsavtaler,
        valgtOrganisasjon,
        organisasjonerMedIAWEB,
        ferdigLastet,
        antallTilganger,
    ]);

    return (
        <>
            {' '}
            <div className={'tjenesteboks-container ' + typeAntall}>
                {!ferdigLastet && <LasterBoks />}
                {ferdigLastet && (
                    <>
                        {skalViseManglerTilgangBoks && <ManglerTilgangBoks />}

                        {tilgangTilSyfoState === Tilgang.TILGANG && (
                            <Innholdsboks className={'tjenesteboks innholdsboks'}>
                                <Syfoboks className={'syfoboks'} />
                            </Innholdsboks>
                        )}
                        {visIA && (
                            <div className={'tjenesteboks innholdsboks'}>
                                <IAwebboks />
                            </div>
                        )}
                        {tilgangTilPamState === Tilgang.TILGANG && (
                            <div className={'tjenesteboks innholdsboks'}>
                                <Pamboks />
                            </div>
                        )}
                        {arbeidsavtaler.length > 0 && tilgangTilArbeidsavtaler === Tilgang.TILGANG && (
                            <div className={'tjenesteboks innholdsboks'}>
                                <Arbeidstreningboks />
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default TjenesteBoksContainer;
