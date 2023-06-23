import Lottie from "lottie-react";
import facebook from "../assets/socialmedia/facebook/data.json";
import instagram from "../assets/socialmedia/instagram/data.json";
import linkedin from "../assets/socialmedia/linkedin/data.json";
import twitter from "../assets/socialmedia/twitter/data.json";
import whatsapp from "../assets/socialmedia/whatsapp/data.json";

const SocialMedia = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      <div id="facebook">
        <a
          href="https://www.facebook.com/saitej.saaho?mibextid=LQQJ4d"
          target="blank"
        >
          <Lottie className="w-28 h-28" animationData={facebook} />
        </a>
      </div>
      <div id="instagram">
        <a
          href="https://instagram.com/k.s.saitej?igshid=OGQ5ZDc2ODk2ZA==https://instagram.com/k.s.saitej?igshid=OGQ5ZDc2ODk2ZA=="
          target="blank"
        >
          <Lottie className="w-28 h-28" animationData={instagram} />
        </a>
      </div>
      <div id="linkedin">
        <a href="https://www.linkedin.com/in/kssaiteja/" target="blank">
          <Lottie className="w-28 h-28" animationData={linkedin} />
        </a>
      </div>
      <div id="twitter">
        <a href="https://twitter.com/saitej8262" target="blank">
          <Lottie className="w-28 h-28" animationData={twitter} />
        </a>
      </div>
      <div id="whatsapp">
        <a href="https://wa.me/+919390418860" target="blank">
          <Lottie className="w-28 h-28" animationData={whatsapp} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
