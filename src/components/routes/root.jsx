import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
