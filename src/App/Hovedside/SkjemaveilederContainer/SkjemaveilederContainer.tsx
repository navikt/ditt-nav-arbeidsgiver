import React from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { skjemaForArbeidsgiverURL } from '../../../lenker';
import AltinnLenke from '../AltinnContainer/AltinnLenke/AltinnLenke';
import './SkjemaveilederContainer.less';

export const SkjemaveilederContainer = () => {
    return (
        <div className="skjemaveileder-container">
            <Undertittel id="skjemaveileder-tittel" className="skjemaveileder-tittel">
                Alle søknader og skjemaer
            </Undertittel>
            <ul aria-labelledby="skjemaveileder-tittel">
                <AltinnLenke
                    href={skjemaForArbeidsgiverURL}
                    tekst="Sende skjema eller ettersende dokumenter"
                    className="skjemaveileder-lenkepanel"
                    nyFane={false}
                >
                    Sende skjema eller ettersende dokumenter
                </AltinnLenke>
            </ul>
        </div>
    );
};
