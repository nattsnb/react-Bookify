import styles from "./venueCard.module.css";
import Typography from "@mui/material/Typography";

export function VenueCard({ venue, backgroundUrl }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.pictureFrame}
        style={{ "--background-url": `url(${backgroundUrl})` }}
      >
        `<div className={styles.heartBox}></div>
        <div className={styles.nameBox}>
            <Typography variant="boldOnCard">{venue.name}</Typography>
        </div>
        <div className={styles.arrowIcon}>
          <i className={"fas fa-angle-right"}></i>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.pricing}>
              <Typography variant="boldOnCard">{venue.pricePerNightInEURCent} zl / doba</Typography>
          </div>
          <div className={styles.localization}>
              <div><i className={"fas fa-map-marker-alt"}></i>
              </div>
              <div><Typography>{venue.location.city}</Typography></div>
          </div>
        </div>
      </div>
      <div className={styles.infoBar}>
        <div className={styles.rating}></div>
        <div className={styles.capacity}></div>
      </div>
    </div>
  );
}
