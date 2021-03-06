import React from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import './FeilmeldingContainer.less';

interface Props {
    visFeilmelding: boolean;
    visSyfoFeilmelding: boolean;
}

export const FeilmeldingContainer = (props: Props) => {
    return (
        <>
            {props.visFeilmelding && (
                <AlertStripe type="feil" className="feilStripe">
                    Vi opplever ustabilitet med Altinn. Hvis du mener at du har roller i Altinn kan
                    du prøve å{' '}
                    <Lenke href={'https://arbeidsgiver.nav.no/min-side-arbeidsgiver'}>
                        laste siden på nytt
                    </Lenke>
                </AlertStripe>
            )}
            {props.visSyfoFeilmelding && (
                <AlertStripe type="feil" className="feilStripe">
                    Vi har problemer med å hente informasjon om eventuelle sykmeldte du skal følge
                    opp. Vi jobber med å løse saken så raskt som mulig
                </AlertStripe>
            )}
        </>
    );
};
