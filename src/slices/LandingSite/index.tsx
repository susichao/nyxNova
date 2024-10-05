import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LandingSite`.
 */
export type LandingSiteProps = SliceComponentProps<Content.LandingSiteSlice>;

/**
 * Component for "LandingSite" Slices.
 */
const LandingSite = ({ slice }: LandingSiteProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <iframe
      src="https://www.chatbase.co/chatbot-iframe/FNA-sJaCrKcU8i1SNdCXR"
      width="100%"
      style={{ height: "100%", minHeight: 500 }}
      frameBorder="0"
      />
    </Bounded>
  );
};

export default LandingSite;
