import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          About Us
        </Typography>
        {/* <Typography color={medium}>Create Ad</Typography> */}
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://imgs.search.brave.com/PA7Ynqhc42P0idNpzVja-1vq82Lq5dn5aXiZDWJOzW4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y29sbGVnZXByYXZl/c2guY29tLzIwMTUv/MTEvSUlJVC1VbmEt/TG9nby5wbmc"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Project-Hub</Typography>
        {/* <Typography color={medium}>mikacosmetics.com</Typography> */}
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        "IIITU Project Hub" is an easy-to-use website that helps you to upload
        all your projects on a single platform. This website can help to
        maintain the projects of all the students of the institution on a single
        platform. This website can be very helpful for organisations like CDC
        (Carrer Development Cell) which allows them to showcase their institute
        students talent to companies at a single place.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
