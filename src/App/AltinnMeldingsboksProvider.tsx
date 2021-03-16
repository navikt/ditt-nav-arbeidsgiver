import React, { FunctionComponent, useEffect, useState } from 'react';
import { autentiserAltinnBruker, hentAltinnRaporteeIdentiteter, ReporteeMessagesUrls } from '../api/altinnApi';
import Spinner from './Spinner';

export const AltinnMeldingsboksContext = React.createContext<ReporteeMessagesUrls>({});

const noMessagesUrl: ReporteeMessagesUrls = {};

export const AltinnMeldingsboksProvider: FunctionComponent = (props) => {
    const [reporteeMessagesUrls, setReporteeMessagesUrls] = useState<'laster' | ReporteeMessagesUrls>('laster');

    useEffect(() => {
        hentAltinnRaporteeIdentiteter().then(result => {
            if (result instanceof Error) {
                autentiserAltinnBruker(window.location.href);
                setReporteeMessagesUrls(noMessagesUrl);
            } else {
                setReporteeMessagesUrls(result);
            }
        });
    }, []);

    if (reporteeMessagesUrls === 'laster') {
        return <Spinner/>
    } else {
        return <AltinnMeldingsboksContext.Provider value={reporteeMessagesUrls}>
            {props.children}
        </AltinnMeldingsboksContext.Provider>
    }
};