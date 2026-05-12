export default function AlsoViewed() {
  return (
    <div className="also-viewed">
      <h4>Customers Who &nbsp;Viewed This Item Also</h4>
      <div className="also-viewed-carousel">
        <span className="av-arrow">&lsaquo;</span>
        <div className="av-items">
          {[1, 2, 3, 4].map((i) => (
            <div className="av-item" key={i}>
              <img src={`/images/related_${i}.jpg`} alt="Related product" width={75} height={65} />
              <div className="av-item-info">
                <div className="av-price">$2,549.15</div>
                <div className="av-title">HotSpring Portable Spa</div>
                <div className="av-model">HS-SPA-2024</div>
              </div>
            </div>
          ))}
        </div>
        <span className="av-arrow">&rsaquo;</span>
      </div>
    </div>
  );
}
