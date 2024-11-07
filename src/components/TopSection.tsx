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
        customers and let them see what your business does and what it stands
        for. There are all sorts of eye-catching websites at the moment with
        animations, scrolling effects, videos and pretty visuals. While these
        all look very attractive, some of them rely on the visuals too much, may
        be difficult to navigate and generally do not get your company message
        across, which defeats the whole point of having a website in the first
        place.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        3D pages can be very effective at increasing engagement and showing your
        company in a different light. This can be achieved in a number of ways
        from subtle animations to making the whole site a 3D interactive
        landscape. In each case it shows that your company is embracing new
        technology and giving potential new customers an inight at what you do
        or want to achieve.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }} id="projects_page">
        Here are a collection of landing pages that show the types of effects
        that you can have:
      </Typography>
    </Container>
  );
};
export default TopSection;
