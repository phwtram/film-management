import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 'auto',
    
  },
}));

const About = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const classes = useStyles();
  return (
    <Paper className={classes.root} style={{backgroundColor: 'transparent', color: theme.color1}}>
       <InfoIcon fontSize="large" />
       <div className="about-container">
      <Typography variant="h5" component="h3">
        About 
      </Typography>
      <Typography component="p" style={{minHeight: "80vh",  color: theme.color}}>
        Đây là website xem phim online và chia sẻ thông tin các bộ phim mới thông qua nhiều nguồn khác nhau từ các thành viên trên diễn đàn. Hàng ngàn video HD & FullHD cùng đi đôi với phụ đề vietsub, thuyết minh lồng tiếng đầy đủ đang chờ bạn khám phá.
        
        Với giao diện mới mẻ của trang web được thay đổi đơn giản thân thiện, trực quan, dễ sử dụng, cực nhanh, cực nét, cực mượt. Chúc các bạn xem phim vui vẻ !
      </Typography>
      </div>
    </Paper>
  );
};

export default About;