import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Header() {
  const user = useSelector(state => state.user);


  return (
    <Box sx={{ flexGrow: 1 }} >
      <Box id="main-header-box" 
      position="static relative" backgroundColor="#a9b386" 
      width="100%">
        <Toolbar >
          {/* <Link to="/"> */}
          <Typography
            variant="h6"
            component="div"
            color="white"
            fontFamily="Sacramento"
            fontSize="30px"
            sx={{ flexGrow: 1 }}>
            Thoughtful
          </Typography>

          {/* </Link> */}
          <div>
            <Link to="/profile">
              {/* if user is signed in, icon should be userimage */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ "color": "white" }}

              >
                {!user ? (
                <AccountCircleIcon />) : 
                 (<Avatar
                    alt={user.firstName}
                    src={user.profilePicture}/>)} 
              </IconButton>
            </Link>

            <Link to="/prompt">
              <IconButton
                size="large"
                aria-label="prompt"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ "color": "white" }}
              >
                <VolunteerActivismIcon />
              </IconButton>
            </ Link>

          </div>
        </Toolbar>
      </Box>
    </Box>
  );
}







// export default function Header({ user, isSignedIn }) {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar id="appbar" position="static">
//         <Toolbar >
//           {/* <Link to="/"> */}
//             <Typography variant="h6" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
//               Thoughtful
//             </Typography>

//           {/* </Link> */}
//           <div>
//             <Link to="/sign-in">
//               {/* if user is signed in, icon should be userimage */}
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 color="inherit"
//               >
//                 {/* {!isSignedIn ? ( */}
//                   <AccountCircleIcon />
//                 {/* ) : ( */}
//                   {/* <Avatar
//                     alt={user.firstName}
//                     src={user.profilePicture}
//                   /> */}
//                 {/* )} */}
//               </IconButton>
//             </Link>

//             <IconButton
//               size="large"
//               aria-label="prompt"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               color="inherit"
//             >
//               <LoyaltyIcon />
//             </IconButton>

//           </div>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
