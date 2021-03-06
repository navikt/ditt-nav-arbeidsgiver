import React from 'react';
import Lenkepanel from 'nav-frontend-lenkepanel';
import { lenkeTilSykefravarsstatistikk } from '../../../../lenker';
import { loggTjenesteTrykketPa } from '../../../../utils/funksjonerForAmplitudeLogging';
import TjenesteBoksBanner from '../TjenesteBoksBanner/TjenesteBoksBanner';
import IAwebikon from './IawebIkon.svg';
import './IAwebboks.less';

const loggAtKlikketPaIAeb = () => {
    loggTjenesteTrykketPa('IA', lenkeTilSykefravarsstatistikk, 'Sykefraværsstatistikk');
};

const IAwebboks = () => {
    const valgtbedrift = () => {
        const orgnummerFraUrl = new URLSearchParams(window.location.search).get('bedrift') ?? '';
        return orgnummerFraUrl === '' ? '' : `?bedrift=${orgnummerFraUrl}`;
    };

    return (
        <div className="IA-web-boks tjenesteboks-innhold">
            <TjenesteBoksBanner tittel="Sykefraværsstatistikk" imgsource={IAwebikon} altTekst="" />
            <Lenkepanel
                className="IA-web-boks__info"
                href={lenkeTilSykefravarsstatistikk + valgtbedrift()}
                onClick={loggAtKlikketPaIAeb}
                tittelProps="normaltekst"
            >
                <div className="IA-web-boks__tekst">
                    Har du høyere eller lavere sykefravær sammenlignet med din bransje? Se tallene
                    og tips om hvordan du kan påvirke sykefraværet ditt
                </div>
            </Lenkepanel>
        </div>
    );
};

export default IAwebboks;
