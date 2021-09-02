const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <a className="icon-link icon-adjust">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/paper-pin.png`} />
        </a>
        <a className="icon-link">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/ellipse.png`} />
        </a>
        <span className="icon-separator"></span>
        <a className="icon-link">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/type.png`} />
        </a>
        <a className="icon-link">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/copy.png`} />
        </a>
        <a className="icon-link">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/link.png`} />
        </a>
        <a className="icon-link">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/download.png`} />
        </a>
        <a className="icon-link">
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/delete.png`} />
        </a>
        <a className="icon-link" onClick={handleClose}>
          <img src={`${process.env.PUBLIC_URL}/assets/toolbar-icons/more_vert.png`} />
        </a>
      </section>
    </div>
  );
};

export default Modal;