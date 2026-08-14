export default function MetricCard({
  icon: Icon,
  value,
  label,
  delta,
  testId,
}) {
  return (
    <div className="glass-card metric" data-testid={testId}>
      <Icon className="metric-icon" size={18} />
      <strong>{value}</strong>
      <label>{label}</label>
      <div className="delta">{delta}</div>
    </div>
  );
}