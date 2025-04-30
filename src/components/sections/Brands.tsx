import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import discordLogo from "../../assets/logos/discord.png";
import openaiLogo from "../../assets/logos/openai.png";
import paypalLogo from "../../assets/logos/paypal.png";
import slackLogo from "../../assets/logos/slack.png";
import spotifyLogo from "../../assets/logos/spotify.png";
import youtubeLogo from "../../assets/logos/youtube.png";
import { useTranslation } from "react-i18next";

const logos = [
  { name: "discord", src: discordLogo },
  { name: "openai", src: openaiLogo },
  { name: "paypal", src: paypalLogo },
  { name: "slack", src: slackLogo },
  { name: "spotify", src: spotifyLogo },
  { name: "youtube", src: youtubeLogo },
];
export const Brands = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>{t("Trust")}</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={logo.src}
                width={100}
                height={60}
                alt={logo.name}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
