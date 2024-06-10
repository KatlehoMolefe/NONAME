import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import {
  Divider,
  List,
  ListItemButton,
  ListItemDecorator,
} from "@mui/joy";

export default function MyGroups() {
  return (
    <Card
      sx={{
        width: 320,
        mt: 2,
        maxWidth: "100%",
        boxShadow: "sm",
      }}
    >
      <CardContent>
        <Typography level="h3" variant="plain">
          My Group(s)
        </Typography>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemDecorator>
              <Avatar size="sm">T1</Avatar>
            </ListItemDecorator>
            Test 1
          </ListItemButton>
          <ListItemButton>
            <ListItemDecorator>
            <Avatar size="sm">T2</Avatar>
            </ListItemDecorator>
            Test 1
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  );
}
