import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const TopSection = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 15, mb: 5 }}>
      <Typography variant="h3" sx={{ mt: 3, mb: 2 }}>
        3D Landing Pages
      </Typography>
      <Divider variant="middle" sx={{ background: "yellow", mb: 2 }} />
      <Typography variant="h6" sx={{ mt: 3 }}>
        <p>
          If you are a startup company or a solopreneur then you'll know how
          important the first impression of your business is.
        </p>{" "}
        <p>
          You'll need a website that not only looks good but gets your message
          across. You don't want to look the same as everybody else, you need
          visitors to hang around and become more engaged.
        </p>{" "}
        <p>
          Compelling and engaging websites convert more visitors to customers
          and this means that your business can start to realise it's potential.
        </p>
        <p>
          Even worse - you may already have a website that's driving visitors
          away! You may offer wonderful products and services, but no one is
          getting to see them as your site is too complex or just plain boring.
        </p>
        <p>
          This is where the power of 3D can really help. Typical websites are
          flat, 2D spaces, but we live in a 3D world and the same can be true of
          your website.
        </p>
        <p>
          3D technology can look both very impressive and informative - it can
          offer a novel way to interact whilst also showing a glimpse of what
          you do.
        </p>
        <p>Here are just a few examples of what is possible:</p>
      </Typography>
    </Container>
  );
};
export default TopSection;
