import React from "react";
import "./styles.css";
import { useState } from "react";
document.body.classList.add("background-red");

const bookDB = {
  Action_and_Adventure: [
    {
      name: "Life of Pi",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "The storyline revolves around an Indian teenager named Pi Patel,about how at 16 he survives a shipwreck and is adrift in the Pacific Ocean on a lifeboat with a Bengal tiger."
    },
    {
      name: "The Three Musketeers",
      rating: "⭐⭐⭐⭐",
      Description:
        " This book relates the adventures of four fictional swashbuckling heroes who lived under the French kings Louis XIII and Louis XIV, who reigned during the 17th and early 18th centuries."
    },
    {
      name: "The Call of the Wild",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "The Call of the Wild is a short adventure novel by Jack London, published in 1903 and set in Yukon, Canada, during the 1890s Klondike Gold Rush, when strong sled dogs were in high demand. "
    }
  ],

  Fantasy: [
    {
      name: "The Water Dancer",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "This novel, set during the era of slavery, follows a young black man who discovers that his memories trigger a mysterious power of teleportation that can help escaped slaves flee."
    },
    {
      name: "The Argumentative Indian by Amartya Sen",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "This book majoraly tells India’s history and how that history has influenced and shaped its cultural identity"
    },
    {
      name: " Circe",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "With unforgettably vivid characters, mesmerizing language, and page-turning suspense, Circe is a triumph of storytelling, an intoxicating epic of family rivalry, palace intrigue, love and loss, as well as a celebration of indomitable female strength in a man's world."
    }
  ],
  Horror: [
    {
      name: "Carrie",
      rating: "⭐⭐⭐⭐⭐",
      Description:
        "Set primarily in the then-future year of 1979, it revolves around the eponymous Carrie White, a friendless, bullied high-school girl from an abusive religious household who uses her newly discovered telekinetic powers to exact revenge on those who torment her."
    },
    {
      name: "The Haunting of Hill House",
      rating: "⭐⭐⭐⭐",
      Description:
        "Steven Crain is an author known for The Haunting of Hill House, an autobiographical novel about his childhood experience while residing in the haunted mansion with parents Hugh and Olivia, and younger siblings Shirley, Theo, Nell and Luke. ... Theo falls in love with a woman Trish."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action_and_Adventure");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Good Books</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are the books . Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            class="button"
            style={{ color: "white" }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div clss="show-list" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li class="rec" key={book.name}>
              {" "}
              <div style={{ fontSize: "larger", color: "white" }}>
                {" "}
                {book.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.5rem 0rem" }}>
                {" "}
                {book.rating}{" "}
              </div>
              <div> {book.Description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
