import React, { FunctionComponent } from 'react';
import { Organisasjon } from '../../../../../../Objekter/organisasjon';
import OrganisasjonsVisning from '../../../OrganisasjonsVisning/OrganisasjonsVisning';
import './Underenhet.less';

const AriaMenuButton = require('react-aria-menubutton');

interface Props {
    className?: string;
    underEnhet: Organisasjon;
}

const Underenhet: FunctionComponent<Props> = ({ underEnhet }) => {
    return (
        <AriaMenuButton.MenuItem
            key={underEnhet.OrganizationNumber}
            value={underEnhet.OrganizationNumber}
            text={underEnhet.Name}
            tabIndex={0}
            className={'underenhet-meny-valg'}
        >
            <OrganisasjonsVisning hovedOrganisasjon={underEnhet} className={'underenhet'} />
        </AriaMenuButton.MenuItem>
    );
};

export default Underenhet;
