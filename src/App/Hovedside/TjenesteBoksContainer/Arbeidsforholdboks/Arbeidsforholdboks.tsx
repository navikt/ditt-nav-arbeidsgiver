import React from 'react';
import Lenkepanel from 'nav-frontend-lenkepanel';
import arbeidsforholdikon from './arbeidsforholdikon.svg';
import TjenesteBoksBanner from '../TjenesteBoksBanner/TjenesteBoksBanner';
import { arbeidsforholdLink } from '../../../../lenker';
import { loggTjenesteTrykketPa } from '../../../../utils/funksjonerForAmplitudeLogging';

const Arbeidsforholdboks = () => {

    const loggAtKlikketPaArbeidsfohold = () => {
        loggTjenesteTrykketPa('Arbeidsforhold');
    };

    const valgtbedrift = () => {
        const orgnummerFraUrl = new URLSearchParams(window.location.search).get(
            'bedrift'
        );
        return orgnummerFraUrl ? `?bedrift=${orgnummerFraUrl}` : '';
    };

    return (
        <div className="arbeidsforholdboks tjenesteboks-innhold" onClick={loggAtKlikketPaArbeidsfohold}>
            <TjenesteBoksBanner
                tittel="Arbeidsforhold"
                imgsource={arbeidsforholdikon}
                altTekst=""
            />
            <Lenkepanel
                className="arbeidsforholdboks__arbeidsforhold"
                href={arbeidsforholdLink() + valgtbedrift()}
                tittelProps="normaltekst"
            >
                Se arbeidsforhold rapportert til Arbeidsgiver- og arbeidstakerregisteret (Aa-registeret)
            </Lenkepanel>
        </div>
    );
};

export default Arbeidsforholdboks;