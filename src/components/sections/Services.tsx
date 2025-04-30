import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Service } from "../cards/Service";
import { service } from "../../utils/service";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>{t("Our AI Services")}</Title>
          <Paragraph>
            {t(
              "Unlock the potential of advanced machine learning, natural language processing, and predictive analytics. Our services include:"
            )}
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {service.map((item, index) => (
            <Service
              key={index}
              title={t(item.title)}
              description={t(item.description)}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
