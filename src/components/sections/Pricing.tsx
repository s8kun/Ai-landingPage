import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { pricingPlans } from "../../utils/pricingPlans";
import { Button } from "../shared/Button";
import { useTranslation } from "react-i18next";

export const Pricing = () => {
  const { t } = useTranslation();
  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>{t("pricing.title")}</Title>
        <Paragraph className="mt-4">{t("pricing.description")}</Paragraph>
      </Container>
      <Container className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="relative group h-full">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                      {t("pricing.bestValue")}
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {t(plan.title)}
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-heading-1">
                    {t(plan.price)}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, keyfeatures) => (
                      <li
                        key={keyfeatures}
                        className="flex items-center gap-x-3"
                      >
                        <span className="text-primary">✅</span>
                        <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                      {t("pricing.choosePlan")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
