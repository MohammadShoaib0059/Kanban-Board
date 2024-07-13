import Avatar from "@mui/material/Avatar";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: "30px",
      height: "30px",
    },
    children: initials,
  };
}

const AvatarWithBackground = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => {
  return <Avatar {...stringAvatar(name)} title={title} />;
};

export default AvatarWithBackground;
