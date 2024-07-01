import MainContainer from "../Container/MainContainer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}
