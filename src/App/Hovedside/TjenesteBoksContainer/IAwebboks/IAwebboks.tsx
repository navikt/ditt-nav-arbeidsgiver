import React from 'react';
import Lenkepanel from 'nav-frontend-lenkepanel';
import IAwebikon from './IawebIkon.svg';
import { lenkeTilSykefravarsstatistikk } from '../../../../lenker';
import { loggTjenesteTrykketPa } from '../../../../utils/funksjonerForAmplitudeLogging';
import TjenesteBoksBanner from '../TjenesteBoksBanner/TjenesteBoksBanner';
import './IAwebboks.less';

const loggAtKlikketPaIAeb = () => {
    loggTjenesteTrykketPa('IA', lenkeTilSykefravarsstatistikk,"Sykefraværsstatistikk");
};

const IAwebboks = () => {

    const valgtbedrift = () => {
        const orgnummerFraUrl = new URLSearchParams(window.location.search).get(
            'bedrift'
        );
        return orgnummerFraUrl ? `?bedrift=${orgnummerFraUrl}` : '';
    };

    return (
        <div className="IA-web-boks tjenesteboks-innhold">
            <TjenesteBoksBanner
                tittel="Sykefraværsstatistikk"
                imgsource={IAwebikon}
                altTekst=""
            />
            <Lenkepanel
                className="IA-web-boks__info"
                href={lenkeTilSykefravarsstatistikk+valgtbedrift()}
                onClick={loggAtKlikketPaIAeb}
                tittelProps="normaltekst"
                aria-label="Sykefraværsstatistikk. Oversikt over sykefravær i din virksomhet og bransje"
            >
                <div className="IA-web-boks__tekst">
                    Oversikt over sykefravær i din virksomhet og bransje
                </div>
            </Lenkepanel>
        </div>
    );
};

export default IAwebboks;
