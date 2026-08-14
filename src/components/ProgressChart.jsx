export default function ProgressChart({ points }) {
  return (
    <div className="chart-wrap">
      <svg
        viewBox="0 0 330 185"
        role="img"
        aria-label="Gráfica de tendencia de peso"
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[30, 70, 110, 150].map((y) => (
          <line
            key={y}
            x1="18"
            x2="312"
            y1={y}
            y2={y}
            stroke="rgba(255,255,255,.1)"
          />
        ))}

        <polygon points={`${points} 312,170 18,170`} fill="url(#area)" />
        <polyline
          points={points}
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.split(' ').map((point, index) => {
          const [x, y] = point.split(',');
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3.5"
              fill="#18181b"
              stroke="#ffffff"
              strokeWidth="2"
            />
          );
        })}

        {['Jun', 'Jul', 'Ago', 'Sep'].map((label, index) => (
          <text
            key={label}
            x={[18, 112, 205, 296][index]}
            y="183"
            textAnchor={index === 3 ? 'end' : 'start'}
            className="chart-label"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}