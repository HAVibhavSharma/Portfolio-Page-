import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import styles from "./SocialFollow.module.css";
function SocialFollow() {
  return (
    <>
      <div className={styles.flexbox}>
        <SocialMediaIconsReact
          borderColor="whitesmoke"
          icon="github"
          iconColor="black"
          backgroundColor="whitesmoke"
          url="https://some-website.com/my-social-media-url"
          size="28"
        />
        <SocialMediaIconsReact
          borderColor="whitesmoke"
          icon="twitter"
          iconColor="black"
          backgroundColor="whitesmoke"
          url="https://some-website.com/my-social-media-url"
          size="28"
        />
        <SocialMediaIconsReact
          borderColor="whitesmoke"
          icon="linkedin"
          iconColor="black"
          backgroundColor="whitesmoke"
          url="https://some-website.com/my-social-media-url"
          size="28"
        />
        <SocialMediaIconsReact
          borderColor="whitesmoke"
          icon="mail"
          iconColor="black"
          backgroundColor="whitesmoke"
          url="https://some-website.com/my-social-media-url"
          size="28"
        />
      </div>
    </>
  );
}
export default SocialFollow;
