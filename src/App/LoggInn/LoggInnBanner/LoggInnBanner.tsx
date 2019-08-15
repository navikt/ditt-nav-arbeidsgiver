import React, { FunctionComponent } from "react";
import "./LoggInnBanner.less";
import { Systemtittel } from "nav-frontend-typografi";

const LoggInnBanner: FunctionComponent = () => {
  return (
    <div className={"logg-inn-banner"}>
      <Systemtittel>Min side - Arbeidsgiver </Systemtittel>
    </div>
  );
};

export default LoggInnBanner;
