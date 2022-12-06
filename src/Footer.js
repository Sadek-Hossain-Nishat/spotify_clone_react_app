import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumlogo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="footer_songinfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>

          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
