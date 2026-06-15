import { customTemplates } from "@/components/template/templateRegistry";

export default function TemplateRenderer({ template, accent, font, relatedHref, themeOverride, language }) {
  const layout = template.layout || {};
  const CustomTemplate = layout.custom ? customTemplates[layout.custom] : null;
  const commonProps = { template, accent, font, relatedHref, themeOverride, language };

  if (CustomTemplate) {
    return <CustomTemplate {...commonProps} />;
  }

  const DefaultTemplate = customTemplates.fitpro;
  return <DefaultTemplate {...commonProps} />;
}
