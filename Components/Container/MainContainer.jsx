export default function MainContainer({ children }) {
  return (
    <div className="custom_container">
      <div className="px-6 md:px-2">{children}</div>
    </div>
  );
}
