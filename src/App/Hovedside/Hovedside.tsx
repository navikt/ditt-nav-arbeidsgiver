import React, { FunctionComponent, useContext } from 'react';

import './Hovedside.less';
import TjenesteBoksContainer from './TjenesteBoksContainer/TjenesteBoksContainer';
import NyttigForDegContainer from './NyttigForDegContainer/NyttigForDegContainer';
import { AltinnContainer } from './AltinnContainer/AltinnContainer';

import { OrganisasjonsListeContext } from '../../OrganisasjonsListeProvider';
import { basename } from '../../paths';
import Lenke from 'nav-frontend-lenker';
import ikon from './infomation-circle-2.svg';
import { SkjemaveilederContainer } from './SkjemaveilederContainer/SkjemaveilederContainer';
import { SyfoTilgangContext } from '../../SyfoTilgangProvider';
import { Tilgang } from '../LoginBoundary';
import { logInfo } from '../../utils/metricsUtils';

export const loggNavigasjonTilTjeneste = (tjeneste: String) => {
    logInfo(tjeneste + ' klikket på');
};

const Hovedside: FunctionComponent = () => {
    const { organisasjoner } = useContext(OrganisasjonsListeContext);
    const { tilgangTilSyfoState } = useContext(SyfoTilgangContext);

    const skalViseManglerTilgangBoks = !(
        organisasjoner.length > 0 || tilgangTilSyfoState === Tilgang.TILGANG
    );

    return (
        <div className="hovedside">
            <TjenesteBoksContainer />
            {!skalViseManglerTilgangBoks && (
                <>
            <NyttigForDegContainer />
            <AltinnContainer />
            <SkjemaveilederContainer />
                <div className={'hovedside__informasjonstekst'}>
                    <img className={'hovedside__ikon'} src={ikon} alt="informasjonsikon" />
                    Forventet du å se flere tjenester?
                    <Lenke
                        className={'hovedside__lenke'}
                        href={basename + '/informasjon-om-tilgangsstyring'}
                    >
                        Les mer om hvordan du får tilgang
                    </Lenke>{' '}
                </div>
            </>)}
        </div>
    );
};

export default Hovedside;
