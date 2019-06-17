import fetchMock from "fetch-mock";

fetchMock.get("ditt-nav-arbeidsgiver/api/organisasjoner", [
    {
        "Name": "BALLSTAD OG EIDSLANDET",
        "Type": "Business",
        "OrganizationNumber": "811076422",
        "ParentOrganizationNumber": "811076112",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "BALLSTAD OG HAMARØY",
        "Type": "Business",
        "OrganizationNumber": "811076732",
        "ParentOrganizationNumber": "811076112",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "BALLSTAD OG HORTEN",
        "Type": "Enterprise",
        "OrganizationNumber": "811076112",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "BALLSTAD OG SÆTERVIK",
        "Type": "Business",
        "OrganizationNumber": "811076902",
        "ParentOrganizationNumber": "811076112",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "BAREKSTAD OG YTTERVÅG REGNSKAP",
        "Type": "Enterprise",
        "OrganizationNumber": "810514442",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "BIRI OG VANNAREID REVISJON",
        "Type": "Enterprise",
        "OrganizationNumber": "910998250",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "EIDSNES OG AUSTRE ÅMØY",
        "Type": "Business",
        "OrganizationNumber": "910521551",
        "ParentOrganizationNumber": "910998250",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "ERLING ENGENES",
        "Type": "Person",
        "OrganizationNumber": null,
        "OrganizationForm": null,
        "Status": null
    },
    {
        "Name": "FRØNNINGEN OG LAUVSTAD REVISJON",
        "Type": "Enterprise",
        "OrganizationNumber": "910223208",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "HARSTAD OG TYSSEDAL REVISJON",
        "Type": "Enterprise",
        "OrganizationNumber": "810989572",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "HAVNNES OG ÅGSKARDET",
        "Type": "Enterprise",
        "OrganizationNumber": "910646176",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "KJØLLEFJORD OG ØKSFJORD",
        "Type": "Enterprise",
        "OrganizationNumber": "910175777",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "KYSTBASEN ÅGOTNES OG ILSENG REGNSKAP",
        "Type": "Enterprise",
        "OrganizationNumber": "910514318",
        "ParentOrganizationNumber": "910175777",
        "OrganizationForm": "ASA",
        "Status": "Active"
    },
    {
        "Name": "RAMNES OG TYSSEDAL REGNSKAP",
        "Type": "Business",
        "OrganizationNumber": "910804456",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "RODAL LOUIS",
        "Type": "Person",
        "OrganizationNumber": null,
        "OrganizationForm": null,
        "Status": null
    },
    {
        "Name": "SANDVÆR OG HOV",
        "Type": "Business",
        "OrganizationNumber": "910793829",
        "OrganizationForm": "BEDR",
        "ParentOrganizationNumber": "910720120",
        "Status": "Active"
    },
    {
        "Name": "SKOTSELV OG HJELSET",
        "Type": "Enterprise",
        "OrganizationNumber": "910720120",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "STOL PÅ TORE",
        "Type": "Enterprise",
        "OrganizationNumber": "810771852",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "SØR-HIDLE OG STRAUMGJERDE",
        "Type": "Enterprise",
        "OrganizationNumber": "910167200",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "TROMVIK OG SPARBU REVISJON",
        "Type": "Business",
        "OrganizationNumber": "910989626",
        "ParentOrganizationNumber": "910167200",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "Tore sitt testselskap",
        "Type": "Enterprise",
        "OrganizationNumber": "910820834",
        "OrganizationForm": "AS",
        "Status": "Active"
    },
    {
        "Name": "UGGDAL OG STEINSDALEN",
        "Type": "Business",
        "OrganizationNumber": "910521616",
        "ParentOrganizationNumber": "910820834",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "VALESTRANDSFOSSEN OG SØRLI REVISJON",
        "Type": "Business",
        "OrganizationNumber": "810989602",
        "ParentOrganizationNumber": "910820834",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    },
    {
        "Name": "VESTBY OG LOEN REVISJON",
        "Type": "Business",
        "OrganizationNumber": "910989642",
        "ParentOrganizationNumber": "910820834",
        "OrganizationForm": "BEDR",
        "Status": "Active"
    }
]).spy();

fetchMock.get("express:/ditt-nav-arbeidsgiver/api/roller/:id", [
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 4,
        "RoleName": "Access manager",
        "RoleDescription": "Administration of access"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 6,
        "RoleName": "Accounting employee",
        "RoleDescription": "Access to accounting related forms and services"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 85,
        "RoleName": "Auditor certifies validity of VAT compensation",
        "RoleDescription": "Certification by auditor of RF-0009"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 15,
        "RoleName": "Client administrator",
        "RoleDescription": "Administration of access to client roles for accountants and auditors"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 3380,
        "RoleName": "ECKEYROLE",
        "RoleDescription": "Nøkkelrolle for virksomhetsertifikatbrukere"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 12,
        "RoleName": "Energy, environment and climate",
        "RoleDescription": "Access to services related to energy, environment and climate"
    },
    {
        "RoleId": 226780,
        "RoleType": "External",
        "RoleDefinitionId": 195,
        "RoleName": "General manager",
        "RoleDescription": "External role (from The Central Coordinating Register for Legal Entities)"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 131,
        "RoleName": "Health-, social- and welfare services",
        "RoleDescription": "Access to health-, social- and welfare related services"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 8,
        "RoleName": "Limited signing rights",
        "RoleDescription": "Signing access for selected forms and services"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 5603,
        "RoleName": "Mail/archive",
        "RoleDescription": "Access to read correpondences"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 134,
        "RoleName": "Municipal services",
        "RoleDescription": "Role for municipal services"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 5576,
        "RoleName": "Parallel signing",
        "RoleDescription": "Right to sign elements from other reportees"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 87,
        "RoleName": "Patents, trademarks and design",
        "RoleDescription": "Access to services related to patents, trademarks and design"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 24448,
        "RoleName": "Plan- og byggesak",
        "RoleDescription": "Rollen er forbeholdt skjemaer og tjenester som er godkjent av Direktoratet for byggkvalitet (DiBK)."
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 272,
        "RoleName": "Primary industry and foodstuff",
        "RoleDescription": "Import, processing, production and/or sales of primary products and other foodstuff"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 11,
        "RoleName": "Reporter/sender",
        "RoleDescription": "Access to selected forms and services"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 3,
        "RoleName": "Salaries and personnel employee",
        "RoleDescription": "Access to services related to salaries and personnel"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 130,
        "RoleName": "Signer of Coordinated register notification",
        "RoleDescription": "Applies to singing on behalf of entities/businesses"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 10,
        "RoleName": "Transport",
        "RoleDescription": "Access to services related to transport"
    },
    {
        "RoleType": "Altinn",
        "RoleDefinitionId": 86,
        "RoleName": "Økokrim reporting",
        "RoleDescription": "Access to services from The Norwegian National Authority for Investigation and Prosecution of Economic and Environmental Crime"
    }
]).spy();