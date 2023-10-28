const { Oval } = require("react-loader-spinner");

const Loading = (props) => {
  return (
    <div className="text-center">
      <Oval
        height={props.height}
        width={props.width}
        color={props.primaryColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={props.secondaryColor}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
