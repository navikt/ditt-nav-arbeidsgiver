import React, { FunctionComponent, useContext } from 'react';
import { OrganisasjonsListeContext } from '../../../OrganisasjonsListeProvider';

import { withRouter, RouteComponentProps } from 'react-router';
import './EnkelVirksomhetsvelger.less';
import { OrganisasjonsDetaljerContext } from '../../../OrganisasjonDetaljerProvider';

import { NedChevron } from 'nav-frontend-chevron';
import { tomAltinnOrganisasjon } from '../../../Objekter/Organisasjoner/OrganisasjonerFraAltinn';
const AriaMenuButton = require('react-aria-menubutton');

interface Props {
    className?: string;
}

const EnkelVirksomhetsvelger: FunctionComponent<
    Props & RouteComponentProps<{ className: string }>
> = props => {
    const { organisasjoner } = useContext(OrganisasjonsListeContext);
    const { valgtOrganisasjon } = useContext(OrganisasjonsDetaljerContext);
    const settUrl = (orgnr: string) => {
        props.history.push('/' + orgnr);
    };

    const OrganisasjonsMenyKomponenter = organisasjoner.map(function(organisasjon, index) {
        return (
            <>
                {organisasjon.Name !== valgtOrganisasjon.Name && (
                    <AriaMenuButton.MenuItem
                        key={index}
                        value={organisasjon.OrganizationNumber}
                        text={organisasjon.Name}
                        className="organisasjons-meny__organisasjon"
                    >
                        <div className="organisasjons-meny__navn">{organisasjon.Name}</div>
                    </AriaMenuButton.MenuItem>
                )}
            </>
        );
    });

    return (
        <div className="organisasjons-meny">
            <AriaMenuButton.Wrapper
                className="organisasjons-meny__wrapper"
                onSelection={(value: string) => settUrl(value)}
                style={{ marginTop: 20 }}
            >
                {valgtOrganisasjon !== tomAltinnOrganisasjon && (
                    <AriaMenuButton.Button className="organisasjons-meny__button">
                        {valgtOrganisasjon.Name + ', ' + valgtOrganisasjon.OrganizationNumber}
                        <div className={'organisasjons-meny__chevron'}>
                            <NedChevron />
                        </div>
                    </AriaMenuButton.Button>
                )}
                <AriaMenuButton.Menu className={'organisasjons-meny'}>
                    {OrganisasjonsMenyKomponenter}
                </AriaMenuButton.Menu>
            </AriaMenuButton.Wrapper>
        </div>
    );
};

export default withRouter(EnkelVirksomhetsvelger);
