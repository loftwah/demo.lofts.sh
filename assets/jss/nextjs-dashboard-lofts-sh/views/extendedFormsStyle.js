import {
  cardTitle,
  blackColor,
  hexToRgb,
} from "assets/jss/nextjs-dashboard-lofts-sh.js";
import customSelectStyle from "assets/jss/nextjs-dashboard-lofts-sh/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-dashboard-lofts-sh/customCheckboxRadioSwitch.js";

const extendedFormsStyle = {
  ...customCheckboxRadioSwitch,
  ...customSelectStyle,
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
  },
  mrAuto: {
    marginRight: "auto",
  },
  mlAuto: {
    marginLeft: "auto",
  },
};

export default extendedFormsStyle;
