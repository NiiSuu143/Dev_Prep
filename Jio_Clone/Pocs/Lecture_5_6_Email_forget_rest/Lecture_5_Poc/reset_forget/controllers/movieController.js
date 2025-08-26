// const { getMediaList, TMDB_ENDPOINT } = require("../utility");

// async function getCurrentMovies(req, res) {

//     const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchcurrentMovies);
//     res.status(200).json({
//         status: "success",
//         message: currentMovieList
//     })
// }

// async function getTopRatedMovies(req, res) {
//     const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchTopRated);
//     res.status(200).json({
//         status: "success",
//         message: currentMovieList
//     })
// }

// module.exports = {
//     getCurrentMovies, getTopRatedMovies
// }

const { getMediaList, TMDB_ENDPOINT } = require("../utility");

// ----------------- Home Page -----------------
async function getCurrentMovies(req, res) {
  try {
    const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchcurrentMovies);
    res.status(200).json({
      status: "success",
      message: currentMovieList,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getTrending(req, res) {
  try {
    const trendingList = await getMediaList(TMDB_ENDPOINT.fetchTrending);
    res.status(200).json({ status: "success", message: trendingList });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getPopular(req, res) {
  try {
    const popularList = await getMediaList(TMDB_ENDPOINT.fetchPopular);
    res.status(200).json({ status: "success", message: popularList });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getUpcoming(req, res) {
  try {
    const upcomingList = await getMediaList(TMDB_ENDPOINT.fetchUpcoming);
    res.status(200).json({ status: "success", message: upcomingList });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ----------------- Movies -----------------
async function getTopRatedMovies(req, res) {
  try {
    const topRatedList = await getMediaList(TMDB_ENDPOINT.fetchTopRated);
    res.status(200).json({ status: "success", message: topRatedList });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getActionMovies(req, res) {
  try {
    const actionMovies = await getMediaList(TMDB_ENDPOINT.fetchActionMovies);
    res.status(200).json({ status: "success", message: actionMovies });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getComedyMovies(req, res) {
  try {
    const comedyMovies = await getMediaList(TMDB_ENDPOINT.fetchComedyMovies);
    res.status(200).json({ status: "success", message: comedyMovies });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getHorrorMovies(req, res) {
  try {
    const horrorMovies = await getMediaList(TMDB_ENDPOINT.fetchHorrorMovies);
    res.status(200).json({ status: "success", message: horrorMovies });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getRomanceMovies(req, res) {
  try {
    const romanceMovies = await getMediaList(TMDB_ENDPOINT.fetchRomanceMovies);
    res.status(200).json({ status: "success", message: romanceMovies });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getAnimeMovies(req, res) {
  try {
    const animeMovies = await getMediaList(TMDB_ENDPOINT.fetchAnimeMovies);
    res.status(200).json({ status: "success", message: animeMovies });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ----------------- TV Shows -----------------
async function getActionTvShows(req, res) {
  try {
    const actionTv = await getMediaList(TMDB_ENDPOINT.fetchActionTvShows);
    res.status(200).json({ status: "success", message: actionTv });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getComedyTvShows(req, res) {
  try {
    const comedyTv = await getMediaList(TMDB_ENDPOINT.fetchComedyTvShows);
    res.status(200).json({ status: "success", message: comedyTv });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getMysteryTvShows(req, res) {
  try {
    const mysteryTv = await getMediaList(TMDB_ENDPOINT.fetchMysteryTvShows);
    res.status(200).json({ status: "success", message: mysteryTv });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getDramaTvShows(req, res) {
  try {
    const dramaTv = await getMediaList(TMDB_ENDPOINT.fetchDramaTvShows);
    res.status(200).json({ status: "success", message: dramaTv });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

async function getCrimeTvShows(req, res) {
  try {
    const crimeTv = await getMediaList(TMDB_ENDPOINT.fetchCrimeTvShows);
    res.status(200).json({ status: "success", message: crimeTv });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ----------------- Export -----------------
module.exports = {
  getCurrentMovies,
  getTrending,
  getPopular,
  getUpcoming,
  getTopRatedMovies,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getAnimeMovies,
  getActionTvShows,
  getComedyTvShows,
  getMysteryTvShows,
  getDramaTvShows,
  getCrimeTvShows,
};
