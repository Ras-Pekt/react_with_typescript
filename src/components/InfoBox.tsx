import { InfoBoxprops } from "../schema/Props";

const InfoBox = (props: InfoBoxprops) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  } else if (mode === "warning") {
    const { severity } = props;
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  } else {
    return null;
  }
};

export default InfoBox;
