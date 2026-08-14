import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

export default function SectionHeader({
  title,
  eyebrow,
  href,
  testId,
}) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {href ? (
        <Link href={href} data-testid={testId}>
          {eyebrow}
          <ChevronRight size={13} style={{ verticalAlign: 'middle' }} />
        </Link>
      ) : (
        <span className="eyebrow">{eyebrow}</span>
      )}
    </div>
  );
}