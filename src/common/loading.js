const { MagnifyingGlass } = require("react-loader-spinner");

const Loading = () => {
  return (
    <div className="text-center">
      <MagnifyingGlass
        visible={true}
        height="60"
        width="60"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="green"
      />
    </div>
  );
};

export default Loading;
