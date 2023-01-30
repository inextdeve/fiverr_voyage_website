import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const Post = ({ id, img, country, company, start, end }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${country.country}, ${country.city}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company} ,{`Started: ${start}, Ended: ${end}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Encore plus</Button>
      </CardActions>
    </Card>
  );
};
export default Post;
