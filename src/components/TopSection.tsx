import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const TopSection = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 15, mb: 5 }}>
      <Typography variant="h3" sx={{ mt: 3 }}>
        3D Landing Pages
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        The look and feel of your website is vital if you want to attract
        customers and get them to beleive in your product or services. Some
        webpages are more eye-catchig then others, although this does not
        necessarily make them better.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }} id="projects_page">
        Here are a collection of landing pages that show the types of effects
        that you can have:
      </Typography>
    </Container>
  );
};
export default TopSection;
