import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
    const handleAddWatchlist = (e) => {
        e.preventDefault();
        context.AddToWatchlist(movie);
    };

    return(
        <IconButton aria-label="add to watchlist" onClick={handleAddWatchlist}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToPlaylistIcon;