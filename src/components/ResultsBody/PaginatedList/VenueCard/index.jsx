import styles from "./venueCard.module.css";

export function VenueCard({ venue, backgroundUrl }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.pictureFrame}
        style={{ "--background-url": `url(${backgroundUrl})` }}
      >
        `<div className={styles.heartBox}></div>
        <div className={styles.nameBox}></div>
        <div className={styles.arrowIcon}></div>
        <div className={styles.infoBox}>
          <div className={styles.pricing}></div>
          <div className={styles.localization}></div>
        </div>
      </div>
      <div className={styles.infoBar}>
        <div className={styles.rating}></div>
        <div className={styles.capacity}></div>
      </div>
    </div>
  );
}
