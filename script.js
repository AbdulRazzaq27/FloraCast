// Flower data based on months with festivals, flower usage, and customer types
const flowersAndFestivals = {
    January: {
      flowers: ["Marigold", "Roses", "Hibiscus"],
      festival: "Makar Sankranti",
      festivalDescription: "Makar Sankranti is a harvest festival celebrated with kite flying, bonfires, and pujas. Marigolds and roses are used for decoration during the puja, while hibiscus is used for offerings.",
      customerTrends: [
        "Farmers buying flowers for offerings and decorations.",
        "Local florists purchasing flowers in bulk for local festivals."
      ]
    },
    February: {
      flowers: ["Yellow Marigold", "Sunflowers", "Mustard Flowers"],
      festival: "Vasant Panchami",
      festivalDescription: "Vasant Panchami marks the arrival of spring and is dedicated to Goddess Saraswati. Yellow flowers like marigolds are used for decorations and offerings to the goddess.",
      customerTrends: [
        "Educational institutions buying flowers for Saraswati Puja.",
        "Devotees purchasing marigolds for worship and decoration."
      ]
    },
    March: {
      flowers: ["Tulips", "Daffodils", "Marigold", "Roses"],
      festival: "Holi",
      festivalDescription: "Holi is the festival of colors. Bright flowers like marigolds and roses are used for rangolis, and tulips and daffodils symbolize the vibrant spirit of the festival.",
      customerTrends: [
        "Families buying flowers for rangolis and home decorations.",
        "Event planners purchasing flowers for large-scale Holi celebrations."
      ]
    },
    April: {
      flowers: ["Lilies", "Jasmine", "Kanakambara", "Marigold"],
      festival: "Ugadi",
      festivalDescription: "Ugadi marks the beginning of the New Year in some regions of India. Marigold flowers and jasmine are used to decorate homes and for puja offerings.",
      customerTrends: [
        "Retailers buying flowers for festival decorations.",
        "Families purchasing flowers for pooja offerings."
      ]
    },
    May: {
      flowers: ["Peonies", "Marigold", "Hydrangeas"],
      festival: "Buddha Purnima",
      festivalDescription: "Buddha Purnima is celebrated to honor Lord Buddha. Flowers like peonies and marigolds are used to decorate Buddha statues and temples.",
      customerTrends: [
        "Temple authorities purchasing flowers for decoration and offerings.",
        "Devotees buying flowers for spiritual rituals."
      ]
    },
    June: {
      flowers: ["Sunflowers", "Dahlias", "Roses"],
      festival: "Ramzan (Eid)",
      festivalDescription: "Eid is celebrated at the end of the month-long fast during Ramzan. Sunflowers and roses are used for home decorations and offering in mosques.",
      customerTrends: [
        "Muslim families purchasing flowers for Eid prayers.",
        "Florists supplying bulk flowers for community celebrations."
      ]
    },
    July: {
      flowers: ["Lotus", "Jasmine", "Water Lilies"],
      festival: "Guru Purnima",
      festivalDescription: "Guru Purnima is dedicated to honoring teachers and spiritual leaders. Lotus flowers are used for rituals and offerings.",
      customerTrends: [
        "Schools and educational institutions purchasing lotus flowers.",
        "Devotees buying flowers for Guru Purnima rituals."
      ]
    },
    August: {
      flowers: ["Lilly", "Marigold", "Roses"],
      festival: "Independence Day",
      festivalDescription: "Independence Day is celebrated with patriotic fervor. Flowers like marigolds and roses are used for flag hoisting ceremonies and decorations.",
      customerTrends: [
        "Government institutions purchasing flowers for ceremonies.",
        "Patriotic-themed flower decorations for public and private events."
      ]
    },
    September: {
      flowers: ["Chrysanthemums", "Marigolds", "Lotus"],
      festival: "Ganesh Chaturthi",
      festivalDescription: "Ganesh Chaturthi celebrates the birth of Lord Ganesha. Flowers like marigolds and chrysanthemums are used for decorating Ganesha idols and the pooja area.",
      customerTrends: [
        "People buying flowers for Ganesha idol decorations.",
        "Florists providing flowers for large-scale community celebrations."
      ]
    },
    October: {
      flowers: ["Marigold", "Lily", "Chrysanthemum"],
      festival: "Durga Puja",
      festivalDescription: "Durga Puja is one of the most widely celebrated festivals in India. Marigolds, lilies, and chrysanthemums are used for temple decorations and rituals.",
      customerTrends: [
        "Florists purchasing bulk flowers for decorations.",
        "Devotees and temples buying flowers for Durga Puja offerings."
      ]
    },
    November: {
      flowers: ["Jasmine", "Chrysanthemums", "Roses"],
      festival: "Diwali",
      festivalDescription: "Diwali, the festival of lights, is celebrated with decorations, rangolis, and pujas. Jasmine, chrysanthemums, and roses are used for lighting up homes and offering prayers.",
      customerTrends: [
        "Families buying flowers for Diwali decorations.",
        "Florists and event planners supplying flowers for Diwali events."
      ]
    },
    December: {
      flowers: ["Poinsettias", "Camellias", "Holly"],
      festival: "Christmas",
      festivalDescription: "Christmas is celebrated with decorations and feasts. Poinsettias and camellias are commonly used for Christmas tree decorations and in home decor.",
      customerTrends: [
        "Retailers buying flowers for Christmas decorations.",
        "Shoppers purchasing poinsettias for home decor and gifting."
      ]
    }
  };
  
  // Function to show flowers, festivals, customer trends, and descriptions based on selected month
  function showFlowersAndFestivals() {
    const month = document.getElementById("month").value;
    const resultDiv = document.getElementById("result");
  
    if (flowersAndFestivals[month]) {
      const data = flowersAndFestivals[month];
      resultDiv.innerHTML = `
        <h2>Flowers in demand for ${month}</h2>
        <p><strong>Flowers:</strong> ${data.flowers.join(", ")}</p>
        <h3>Festival: ${data.festival}</h3>
        <p>${data.festivalDescription}</p>
        <h4>Customer Trends:</h4>
        <div class="customer-trends">
          <ul>
            ${data.customerTrends.map(trend => `<li>${trend}</li>`).join("")}
          </ul>
        </div>
      `;
    } else {
      resultDiv.innerHTML = "Please select a valid month.";
    }
  }
  
