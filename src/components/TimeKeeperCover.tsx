import '../styles/time-keeper-cover.css'

type TimeKeeperCoverProps = {
  subtitle?: string
  showFooter?: boolean
}

export function TimeKeeperCover({ subtitle = 'Reporting & reliability', showFooter = true }: TimeKeeperCoverProps) {
  return (
    <div className="time-keeper-cover" role="img" aria-label={`Time Keeper — ${subtitle}. Editorial illustration of records organized into groups.${showFooter ? ' SQL, student grouping, regression testing.' : ''}`}>
      <div className="time-keeper-cover-heading" aria-hidden="true">
        <span className="time-keeper-cover-title">Time Keeper</span>
        <em className="time-keeper-cover-subtitle">{subtitle}</em>
      </div>
      <svg className="time-keeper-cover-motif" viewBox="0 0 320 104" fill="none" aria-hidden="true" focusable="false">
        <g stroke="currentColor" strokeWidth="1.2">
          <rect x="12" y="5" width="58" height="9" />
          <rect x="24" y="22" width="58" height="9" />
          <rect x="4" y="39" width="58" height="9" />
          <rect x="18" y="56" width="58" height="9" />
          <rect x="8" y="73" width="58" height="9" />
          <rect x="26" y="90" width="58" height="9" />
          <path d="M100 52h38m0 0V26h44m-44 26v26h44" />
          <path d="M198 4h-8v44h8m104-44h8v44h-8M198 56h-8v44h8m104-44h8v44h-8" />
          <rect x="204" y="9" width="92" height="7" />
          <rect x="204" y="23" width="92" height="7" />
          <rect x="204" y="37" width="92" height="7" />
          <rect x="204" y="61" width="92" height="7" />
          <rect x="204" y="75" width="92" height="7" />
          <rect x="204" y="89" width="92" height="7" />
        </g>
      </svg>
      {showFooter ? (
        <div className="time-keeper-cover-label" aria-hidden="true">
          SQL · <span>Student grouping</span> · <span>Regression testing</span>
        </div>
      ) : <div className="time-keeper-cover-footer-space" aria-hidden="true" />}
    </div>
  )
}
