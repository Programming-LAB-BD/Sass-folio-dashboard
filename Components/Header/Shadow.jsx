export default function Shadow({ handleCloseSidebar }) {
  return (
    <div
      onClick={handleCloseSidebar}
      className="fixed w-screen h-screen bg-full_screen_shadow z-40 hidden"
    ></div>
  );
}
