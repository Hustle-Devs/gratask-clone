import { integrations } from "@/data/integrations";
import IntegrationCard from "./IntegrationCard";

export default function IntegrationsGrid() {
  return (
    <section className="py-16">
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-custom">
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            name={integration.name}
            logo={integration.logo}
            description={integration.description}
          />
        ))}
      </div>
    </section>
  );
}
