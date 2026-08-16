/**
 * Renders one or more schema.org JSON-LD objects into a <script> tag.
 * Server component — safe to drop into any page or layout.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
