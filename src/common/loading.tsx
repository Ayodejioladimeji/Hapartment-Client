const { Oval } = require("react-loader-spinner");

const Loading = (props) => {
  return (
    <div className="text-center">
      <Oval
        height={props.height || 15}
        width={props.width || 15}
        color={props.primaryColor || "white"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={props.secondaryColor || "white"}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
