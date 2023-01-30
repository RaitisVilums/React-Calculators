import "./toogle-btn.styles.scss";

const ToogleButton = (props) => {
  const { changeStatus, status } = props;

  return (
    <div
      className={`btn-burger ${status ? " active" : ""}`}
      onClick={changeStatus}
    />
  );
};

export default ToogleButton;
