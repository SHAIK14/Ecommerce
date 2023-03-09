import { useContext } from "react";
import { createPortal } from "react-dom";
import ModalContext from "../store/modal-context";
import AlertModal from "./AlertModal";
// import AuthModal from "./AuthModal";
import CartModal from "./CartModal";

function ModalPortal() {
  const ctx = useContext(ModalContext);
  const { title: alertTitle, body, theme } = ctx.alertModalData || {};
  // const { title: authTitle, changePasswordOnly } = ctx.authModalData || {};

  return (
    <>
      {ctx.showAlertModal &&
        createPortal(
          <AlertModal title={alertTitle} body={body} theme={theme} />,
          document.getElementById("popups")
        )}
      {/* {ctx.showAuthModal && createPortal(
        <AuthModal title={authTitle} changePasswordOnly={changePasswordOnly} />,
        document.getElementById("popups")
      )} */}
      {ctx.showCartModal &&
        createPortal(<CartModal />, document.getElementById("popups"))}
    </>
  );
}

export default ModalPortal;
