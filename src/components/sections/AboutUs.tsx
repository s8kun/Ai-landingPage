import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Info } from "../cards/Info";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row lg:gap-12 gap-10 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-2">
          <Title>{t("aboutSection.title")}</Title>
          <Paragraph>{t("aboutSection.description")}</Paragraph>
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title={t("aboutCard.mission.title")}
              description={t("aboutCard.mission.description")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title={t("aboutCard.vision.title")}
              description={t("aboutCard.vision.description")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
