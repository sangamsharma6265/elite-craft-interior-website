export default function Loading() {
  return (
    <main id="main-content" className="ec-route-loading">
      <div className="container">
        <div role="status" className="ec-route-loading-status">
          <span className="ec-route-loading-spinner" aria-hidden="true" />

          <div>
            <p className="ec-route-loading-label">ELITE CRAFT INTERIOR</p>
            <h1>Loading your next page…</h1>
            <p>Please wait while we prepare the collection.</p>
          </div>
        </div>

        <div className="ec-route-loading-grid" aria-hidden="true">
          {[1, 2, 3].map((item) => (
            <div className="ec-route-loading-card" key={item}>
              <div className="ec-route-loading-photo" />
              <div className="ec-route-loading-line" />
              <div className="ec-route-loading-line short" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ec-route-loading {
          min-height: 70vh;
          padding: 56px 0 80px;
          background: #202622;
          color: #f8f6f1;
        }

        .ec-route-loading-status {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 38px;
        }

        .ec-route-loading-status h1 {
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.2;
          margin: 10px 0;
        }

        .ec-route-loading-status p {
          color: #cecfc5;
          line-height: 1.7;
        }

        .ec-route-loading-status .ec-route-loading-label {
          color: #c6a66d;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .ec-route-loading-spinner {
          display: block;
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border: 3px solid #c6a66d35;
          border-top-color: #c6a66d;
          border-radius: 50%;
          animation: ec-route-spin .85s linear infinite;
        }

        .ec-route-loading-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .ec-route-loading-card {
          padding-bottom: 24px;
          background: #29312a;
        }

        .ec-route-loading-photo {
          aspect-ratio: 4 / 3;
          background: #354035;
        }

        .ec-route-loading-line {
          height: 16px;
          margin: 22px 22px 0;
          background: #414a3d;
        }

        .ec-route-loading-line.short {
          width: 55%;
          height: 12px;
          margin-top: 14px;
        }

        @keyframes ec-route-spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .ec-route-loading-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .ec-route-loading-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ec-route-loading-spinner {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}