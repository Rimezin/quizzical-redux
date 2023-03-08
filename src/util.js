//// Utilities - Helper Functions ////

const Util = {
  randomFromArray: (array) => {
    return array[Math.floor(Math.random() * array.length)];
  },

  isEmpty: (item) => {
    switch (typeof item) {
      case "undefined":
        return true;
      case "null":
        return true;
      case "object":
        if (Array.isArray(item)) {
          return item.length === 0;
        } else if (item === null) {
          return true;
        } else {
          return Object.keys(item).length === 0;
        }
      case "string":
        return item === "";
      case "number":
        return item <= 0;
      default:
        return false;
    }
  },

  // Multiple variable check //
  isAnyEmpty: (array) => {
    let returnValue = false;
    array.forEach((item) => {
      if (Util.isEmpty(item)) {
        returnValue = true;
      }
    });
    return returnValue;
  },

  handleShare: () => {
    const shareData = {
      title: "Quizzical",
      text: "A trivia game you never knew you needed!",
      url: "https://rimezin.github.io/quizzical-redux/",
    };

    try {
      navigator.share(shareData);
      console.log("SHARE | shared successfully");
    } catch (err) {
      console.log("SHARE | Error: " + err);
    }
  },

  // Determine Date //
  date: {
    getFormattedDate: () => {
      let date = new Date();
      date = `${
        date.getUTCMonth() + 1
      }/${date.getUTCDate()}/${date.getUTCFullYear()} - ${date.getUTCHours()}:${date.getUTCMinutes()} (UTC)`;
      return date;
    },
  },

  // This shuffle array function from coolaj86 on Stack Overflow.
  shuffleArray: (array) => {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  },
};

export { Util };
