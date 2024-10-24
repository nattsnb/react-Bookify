import styles from "./results.module.css";

export function Results() {
  const screenWidth = screen.width;
  const bannerHeight = screenWidth * 0.522;
  console.log(screenWidth);
  console.log(bannerHeight);
  return (
    <div className={styles.page}>
      <div className={styles.banner}>BANNER PLACEHOLDER</div>
    </div>
  );
}
