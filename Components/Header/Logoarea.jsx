export default function Logoarea({ classes, handleCloseSidebar }) {
  return (
    <div className={classes} onClick={handleCloseSidebar}>
      <h3>Sass-folio</h3>
    </div>
  );
}
