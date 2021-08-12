const ErrorMessage = ({ childern }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 21,
        marginBottom:10,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
      >
          {childern}
    </div>
  );
};

export default ErrorMessage;
