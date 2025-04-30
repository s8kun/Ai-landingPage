import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { useTranslation } from "react-i18next";

export const CalltoAction = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {t("cta.headline")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                {t("cta.highlight")}
              </span>
            </h1>
            <Paragraph className="pt-10 mt-4">{t("cta.description")}</Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl dark:text-white mt-4">
              <Button>{t("cta.button")}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
