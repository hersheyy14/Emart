import { ShareSocial } from "react-share-social";
import "./share.css";

const Share = () => {
  return (
    <div className="share-container">
      <ShareSocial
        url={window.location.href}
        socialTypes={["facebook", "twitter", "email", "linkedin", "whatsapp"]}
      />
    </div>
  );
};

export default Share;
