// import Expression from "Component/Expression";
// import Drag from "Component/Drag";
// import ResizeBox from "Component/ResizeBox";
// import QuillReact from "Component/QuillReact";
// import ReactVideo from "Component/ReactVideo";
// import BMap from "Component/BMap";
// import Cors from "Component/Cors";
// import NoLower from "Component/NoLower";
import LowerCode from "Component/LowerCode";

const Example = () => {
  return (
    <div>
      {/* <Cors /> */}
      {/* <BMap /> */}
      {/* <Expression
        insertFields={[
          {
            code: "SALES_REPORT_AMOUNT",
            dim_type: "2",
            name: "销量上报金额",
            value: "1001201",
          },
          {
            code: "SALES_REPORT_COUNT",
            dim_type: "2",
            name: "销量上报数量",
            value: "1001202",
          },
        ]}
      /> */}
      {/* <QuillReact value="123" style={{ height: "600px" }} /> */}
      {/* <Drag /> */}
      {/* <ResizeBox /> */}
      {/* <ReactVideo
        url="https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4"
        playing={false}
        muted={false}
      /> */}
      {/* <NoLower /> */}
      <LowerCode />
    </div>
  );
};

export default Example;
