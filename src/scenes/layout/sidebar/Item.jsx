// /* eslint-disable react/prop-types */
// import { MenuItem } from "react-pro-sidebar";
// import { Link, useLocation } from "react-router-dom";

// const Item = ({ title, path, icon }) => {
//   const location = useLocation();
//   return (
//     <MenuItem
//       component={<Link to={path} />}
//       to={path}
//       icon={icon}
//       rootStyles={{
//         color: path === location.pathname && "#6870fa",
//       }}
//     >
//       {title}
//     </MenuItem>
//   );
// };

// export default Item;









import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Item = ({ title, path, icon, colors }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Box
        display="flex"
        alignItems="center"
        gap="12px"
        sx={{
          color: colors.gray[100],
          padding: "10px",
          "&:hover": {
            backgroundColor: colors.primary[500],
            borderRadius: "5px",
          },
        }}
      >
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Link>
  );
};

export default Item;
