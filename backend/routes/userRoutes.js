const express = require("express");
const router = express.Router();
const axios = require("axios");

// ✅ Test route — manually check Gutendex
router.get("/check-gutendex", async (req, res) => {
  try {
    const response = await axios.get("https://gutendex.com/books/?search=tolstoy");

    if (response.data?.results?.length) {
      return res.status(200).json({
        success: true,
        count: response.data.results.length,
        data: response.data.results.slice(0, 5),
      });
    }

    return res.status(404).json({
      success: false,
      message: "No data found from Gutenberg API",
    });
  } catch (err) {
    console.error("❌ Error fetching data:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch data from Gutenberg API",
    });
  }
});


// ✅ Main route — Fetch all or search from Gutendex only
router.get("/books", async (req, res) => {
  const { search } = req.query;

  try {
    // If no search term, show popular or recent books from Gutendex
    const url = search && search.trim() !== ""
      ? `https://gutendex.com/books?search=${encodeURIComponent(search)}`
      : "https://gutendex.com/books";

    const response = await axios.get(url);

    const formattedBooks = (response.data?.results || []).map((book) => ({
      _id: book.id, // fake ID for frontend mapping
      title: book.title,
      author: book.authors?.[0]?.name || "Unknown Author",
      genre: book.subjects?.[0] || "N/A",
      imageURI: book.formats?.["image/jpeg"] || "",
      source: "gutenberg",
    }));

    return res.status(200).json(formattedBooks);
  } catch (err) {
    console.error("❌ Error fetching books:", err.message);
    return res.status(500).json({ message: "Failed to fetch books" });
  }
});


// ✅ Fetch single book by title (Gutendex only)
router.get("/books/title/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const response = await axios.get(
      `https://gutendex.com/books?search=${encodeURIComponent(title)}`
    );

    if (!response.data?.results?.length) {
      return res.status(404).json({ message: "Book not found on Gutendex" });
    }

    const book = response.data.results[0]; // take first match
    const formattedBook = {
      _id: book.id,
      title: book.title,
      author: book.authors?.[0]?.name || "Unknown Author",
      genre: book.subjects?.[0] || "N/A",
      imageURI: book.formats?.["image/jpeg"] || "",
      description: book.bookshelves?.[0] || "No description available",
      readLink:
        book.formats?.["text/html; charset=utf-8"] ||
        book.formats?.["text/html"] ||
        "",
      source: "gutenberg",
    };

    return res.status(200).json(formattedBook);
  } catch (err) {
    console.error("❌ Error fetching Gutendex book:", err.message);
    return res.status(500).json({ message: "Failed to fetch book by title" });
  }
});

module.exports = router;




