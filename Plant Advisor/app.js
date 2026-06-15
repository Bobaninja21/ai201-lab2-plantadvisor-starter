const exampleQuestions = [
  "How do I care for my pothos?",
  "My monstera leaves are turning yellow. What's wrong?",
  "How often should I water my snake plant in winter?",
  "I just got a fiddle leaf fig. Where should I put it?",
  "What's the difference between overwatering and underwatering a peace lily?",
  "My orchid finished blooming. Will it bloom again?",
  "How do I fix a succulent that's stretching toward the light?",
  "My calathea has brown edges. Is it the humidity?",
  "What are some good low-light plants for my apartment?",
  "Why does my boston fern keep losing fronds?",
  "How do I care for my string of pearls?"
];

const plants = {
  "pothos": {
    "display_name": "Pothos",
    "scientific_name": "Epipremnum aureum",
    "aliases": ["golden pothos", "devil's ivy", "hunter's robe", "silver vine"],
    "difficulty": "easy",
    "watering": {
      "frequency": "every 1–2 weeks",
      "description": "Allow the top inch of soil to dry out between waterings. Drooping leaves are a reliable signal it's time to water.",
      "overwatering_signs": ["yellowing leaves", "mushy stems", "root rot", "gnats in soil"],
      "underwatering_signs": ["wilting", "dry brown leaf tips", "crispy edges", "soil pulling away from pot edges"]
    },
    "light": {
      "requirement": "low to bright indirect",
      "description": "Highly adaptable. Thrives in bright indirect light but tolerates low light. Direct sun will scorch the leaves.",
      "avoid": "direct sunlight"
    },
    "humidity": "tolerant of average household humidity (40–60%)",
    "temperature": "65–85°F (18–29°C)",
    "fertilizing": "monthly during spring and summer with a balanced liquid fertilizer; stop in fall and winter",
    "common_issues": [
      "yellowing leaves from overwatering",
      "leggy and sparse growth in low light",
      "brown tips from inconsistent watering or dry air"
    ],
    "seasonal_notes": {
      "spring": "Resume fertilizing. Increase watering frequency as growth picks up.",
      "summer": "Water more frequently. Watch for fungus gnats if soil stays too wet.",
      "fall": "Taper off fertilizer. Start reducing watering frequency.",
      "winter": "Water sparingly. Bright indirect light becomes more important. No fertilizer."
    }
  },
  "snake_plant": {
    "display_name": "Snake Plant",
    "scientific_name": "Dracaena trifasciata",
    "aliases": ["sansevieria", "mother-in-law's tongue", "saint george's sword", "viper's bowstring hemp"],
    "difficulty": "easy",
    "watering": {
      "frequency": "every 2–6 weeks depending on season",
      "description": "One of the most drought-tolerant houseplants. Allow soil to dry completely between waterings. When in doubt, wait.",
      "overwatering_signs": ["mushy base", "yellowing leaves at the base", "root rot", "soft spots on leaves"],
      "underwatering_signs": ["wrinkled or curling leaves", "dry brown tips", "leaves leaning outward"]
    },
    "light": {
      "requirement": "low to bright indirect",
      "description": "Survives almost anywhere. Grows fastest in bright indirect light but is genuinely one of the best low-light plants.",
      "avoid": "prolonged direct sunlight in summer"
    },
    "humidity": "low humidity tolerant — thrives in typical dry indoor environments",
    "temperature": "60–80°F (15–27°C); avoid temperatures below 50°F",
    "fertilizing": "2–3 times per year during the growing season; never in winter",
    "common_issues": [
      "root rot from overwatering — the most common cause of death",
      "brown tips from fluoride in tap water or physical damage",
      "slow growth in low light (normal, not a problem)"
    ],
    "seasonal_notes": {
      "spring": "Repot if root-bound. Begin light fertilizing.",
      "summer": "Water slightly more often. Check for spider mites in hot dry conditions.",
      "fall": "Reduce watering significantly.",
      "winter": "Water once a month or less. Keep away from cold drafts."
    }
  },
  "zz_plant": {
    "display_name": "ZZ Plant",
    "scientific_name": "Zamioculcas zamiifolia",
    "aliases": ["zanzibar gem", "zuzu plant", "eternity plant", "aroid palm"],
    "difficulty": "easy",
    "watering": {
      "frequency": "every 2–3 weeks",
      "description": "The rhizomes store water, making it very forgiving. Let soil dry completely before watering.",
      "overwatering_signs": ["yellowing leaves", "mushy rhizomes", "root rot"],
      "underwatering_signs": ["leaves dropping", "wrinkled stems", "leaf yellowing starting from the bottom"]
    },
    "light": {
      "requirement": "low to moderate indirect",
      "description": "One of the best low-light plants. Grows slowly but steadily even in dim rooms. Avoid direct sunlight.",
      "avoid": "direct sunlight — will scorch and bleach leaves"
    },
    "humidity": "tolerant of low humidity; no special requirements",
    "temperature": "65–75°F (18–24°C)",
    "fertilizing": "monthly in spring and summer with diluted balanced fertilizer",
    "common_issues": [
      "yellowing from overwatering",
      "very slow growth (normal — be patient)",
      "all parts are toxic if ingested — keep away from pets and children"
    ],
    "seasonal_notes": {
      "spring": "Begin fertilizing. May push out new growth.",
      "summer": "Water slightly more often. Can handle heat well.",
      "fall": "Reduce fertilizing and watering.",
      "winter": "Minimal water needed. Growth will slow or stop entirely."
    }
  },
  "spider_plant": {
    "display_name": "Spider Plant",
    "scientific_name": "Chlorophytum comosum",
    "aliases": ["airplane plant", "ribbon plant", "hen and chickens plant"],
    "difficulty": "easy",
    "watering": {
      "frequency": "every 1–2 weeks",
      "description": "Keep soil evenly moist during the growing season, slightly drier in winter. Sensitive to fluoride — use filtered or distilled water if possible.",
      "overwatering_signs": ["root rot", "brown mushy roots", "wilting despite wet soil"],
      "underwatering_signs": ["pale leaves", "drooping", "dry soil pulling from pot edges"]
    },
    "light": {
      "requirement": "bright indirect",
      "description": "Thrives in bright indirect light. Tolerates moderate indirect light but variegation may fade. Avoid direct sun.",
      "avoid": "direct sunlight — scorches leaves and fades variegation"
    },
    "humidity": "average household humidity; benefits from occasional misting",
    "temperature": "65–80°F (18–27°C)",
    "fertilizing": "monthly during growing season with balanced fertilizer",
    "common_issues": [
      "brown leaf tips from fluoride in tap water or dry air",
      "fading variegation in low light",
      "spiderettes (babies) growing from long stems — these can be propagated easily"
    ],
    "seasonal_notes": {
      "spring": "Resume fertilizing. Great time to propagate spiderettes.",
      "summer": "Water more frequently. May produce more spiderettes.",
      "fall": "Reduce fertilizing.",
      "winter": "Water less frequently. Avoid cold windowsills."
    }
  },
  "peace_lily": {
    "display_name": "Peace Lily",
    "scientific_name": "Spathiphyllum wallisii",
    "aliases": ["spathiphyllum", "white sails plant", "spathe flower"],
    "difficulty": "easy",
    "watering": {
      "frequency": "every 1–2 weeks",
      "description": "Likes consistently moist (not wet) soil. Peace lilies will dramatically droop when thirsty — and bounce back quickly once watered. This drooping is a helpful signal, not permanent damage.",
      "overwatering_signs": ["yellowing leaves", "brown leaf tips", "root rot", "gnats"],
      "underwatering_signs": ["dramatic drooping", "wilted leaves", "dry soil"]
    },
    "light": {
      "requirement": "low to medium indirect",
      "description": "One of the few flowering plants that does well in low light. Flowers best with medium indirect light. Avoid direct sun.",
      "avoid": "direct sunlight — will scorch and yellow leaves"
    },
    "humidity": "prefers high humidity (50%+); mist regularly or use a pebble tray",
    "temperature": "65–85°F (18–29°C); very sensitive to cold drafts",
    "fertilizing": "monthly during spring and summer; withhold in fall and winter",
    "common_issues": [
      "browning tips from dry air or inconsistent watering",
      "yellowing leaves from overwatering",
      "failure to bloom in low light conditions",
      "toxic to pets — keep away from cats and dogs"
    ],
    "seasonal_notes": {
      "spring": "Most likely to bloom in spring. Resume fertilizing.",
      "summer": "Increase watering. Watch for spider mites in hot, dry conditions.",
      "fall": "Reduce fertilizing. Begin reducing watering frequency.",
      "winter": "Keep away from cold windows. Water sparingly."
    }
  },
  "aloe_vera": {
    "display_name": "Aloe Vera",
    "scientific_name": "Aloe vera",
    "aliases": ["aloe", "true aloe", "medicinal aloe", "burn plant"],
    "difficulty": "easy",
    "watering": {
      "frequency": "every 2–3 weeks in summer, monthly in winter",
      "description": "Water deeply and infrequently. Allow soil to dry completely between waterings. Aloe stores water in its leaves and will rot quickly in soggy soil.",
      "overwatering_signs": ["mushy, translucent leaves", "brown soft spots", "leaves falling off", "root rot"],
      "underwatering_signs": ["leaves curling inward", "thin or shriveled leaves", "dry brown tips"]
    },
    "light": {
      "requirement": "bright indirect to some direct sun",
      "description": "Loves lots of light. Does well in a south or west-facing window. Can handle a few hours of direct morning sun.",
      "avoid": "intense afternoon direct sun in summer — can cause sunburn"
    },
    "humidity": "tolerates low humidity; prefers dry conditions",
    "temperature": "55–80°F (13–27°C); protect from frost",
    "fertilizing": "once in spring with diluted cactus fertilizer; rarely needs fertilizing",
    "common_issues": [
      "root rot from overwatering — the primary cause of death",
      "sunburn from sudden exposure to intense direct sun",
      "pups (offsets) crowding the pot — divide when this happens",
      "leggy growth reaching for light"
    ],
    "seasonal_notes": {
      "spring": "Resume watering. Fertilize once. Repot if needed.",
      "summer": "Water more but ensure soil dries fully. Protect from intense afternoon sun.",
      "fall": "Reduce watering significantly.",
      "winter": "Water monthly or less. Keep above 50°F. No fertilizer."
    }
  },
  "monstera": {
    "display_name": "Monstera",
    "scientific_name": "Monstera deliciosa",
    "aliases": ["swiss cheese plant", "split-leaf philodendron", "ceriman", "fruit salad plant"],
    "difficulty": "moderate",
    "watering": {
      "frequency": "every 1–2 weeks",
      "description": "Water thoroughly when the top 2 inches of soil feel dry. Monsteras like to dry out slightly between waterings but shouldn't stay bone dry.",
      "overwatering_signs": ["yellowing lower leaves", "root rot", "drooping with wet soil", "mushy stems"],
      "underwatering_signs": ["drooping", "curling leaves", "slow growth", "dry edges"]
    },
    "light": {
      "requirement": "bright indirect",
      "description": "Thrives in bright indirect light. Leaf fenestration (the iconic holes) only develops well with sufficient light. Can tolerate medium indirect light but growth and splitting will be reduced.",
      "avoid": "direct sunlight — scorches leaves"
    },
    "humidity": "prefers high humidity (50%+); mist, use a pebble tray, or group with other plants",
    "temperature": "65–85°F (18–29°C); avoid temperatures below 60°F",
    "fertilizing": "monthly during spring and summer with balanced fertilizer; reduce in fall and stop in winter",
    "common_issues": [
      "yellowing leaves from overwatering or nutrient deficiency",
      "leaves without holes from insufficient light",
      "root rot in heavy or consistently wet soil",
      "aerial roots — normal, can be tucked into soil or a moss pole"
    ],
    "seasonal_notes": {
      "spring": "Most active growth period. Fertilize monthly. Good time to repot.",
      "summer": "Water more frequently. May need staking as it grows. Watch for spider mites.",
      "fall": "Taper fertilizer. Begin reducing watering.",
      "winter": "Minimal water. No fertilizer. Keep away from cold drafts."
    }
  },
  "rubber_plant": {
    "display_name": "Rubber Plant",
    "scientific_name": "Ficus elastica",
    "aliases": ["rubber fig", "rubber bush", "rubber tree", "indian rubber bush"],
    "difficulty": "moderate",
    "watering": {
      "frequency": "every 1–2 weeks",
      "description": "Water when the top inch of soil feels dry. Rubber plants hate inconsistency — try to water on a regular schedule. Wipe leaves with a damp cloth occasionally to remove dust.",
      "overwatering_signs": ["yellowing lower leaves", "drooping", "root rot", "leaf drop"],
      "underwatering_signs": ["drooping", "dry soil", "lower leaves dropping", "leaves curling"]
    },
    "light": {
      "requirement": "bright indirect",
      "description": "Does best with several hours of bright indirect light daily. Darker-leaved varieties tolerate lower light better than lighter ones.",
      "avoid": "direct sun — can bleach the leaves; sudden changes in light cause leaf drop"
    },
    "humidity": "average household humidity is fine; prefers 40–60%",
    "temperature": "60–80°F (15–27°C); avoid cold drafts and temperatures below 55°F",
    "fertilizing": "monthly during growing season; no fertilizer in winter",
    "common_issues": [
      "dramatic leaf drop from temperature changes, drafts, or repotting stress",
      "yellowing lower leaves from overwatering",
      "leggy growth in insufficient light",
      "sap from cuts can irritate skin — wear gloves when pruning"
    ],
    "seasonal_notes": {
      "spring": "Active growth period. Fertilize monthly.",
      "summer": "Water regularly. Good time to prune for shape.",
      "fall": "Taper fertilizer. Begin reducing water.",
      "winter": "Water sparingly. Keep away from cold windows. No fertilizer."
    }
  }
};

const seasons = {
  "spring": {
    "name": "Spring",
    "months": ["March", "April", "May"],
    "description": "The growing season is beginning. Most houseplants are waking up and starting to push new growth after the dormancy of winter. This is the time to resume regular care routines.",
    "watering": "Begin increasing watering frequency as plants resume active growth. Check soil moisture more often — growth means more water uptake.",
    "fertilizing": "Resume regular fertilizing for most plants. Use a balanced liquid fertilizer at half strength for the first application of the season.",
    "light": "Increasing day length helps indoor plants. Clean dust from leaves to maximize light absorption. If you moved plants away from windows in winter, this is a good time to move them back.",
    "repotting": "Ideal time to repot root-bound plants — doing so in spring gives plants the entire growing season to establish in their new container.",
    "pests": "As temperatures warm, pest activity increases. Inspect plants carefully when resuming watering. Look for spider mites, fungus gnats, and mealybugs especially.",
    "general_tip": "Don't rush spring care. Wait until you see new growth before dramatically increasing watering or fertilizing — some plants wake up slower than others."
  },
  "summer": {
    "name": "Summer",
    "months": ["June", "July", "August"],
    "description": "Peak growing season. Most houseplants are at their most active. Heat and air conditioning both create care challenges.",
    "watering": "Water more frequently — some plants may need water twice as often as in winter. Check soil every few days. Hot weather and air conditioning both dry soil faster.",
    "fertilizing": "Continue regular fertilizing on schedule. This is when plants need nutrients most. Do not over-fertilize — more is not better.",
    "light": "Long days provide maximum light. Be careful about direct afternoon sun through windows, which can be intense enough to burn leaves even on light-loving plants.",
    "repotting": "Acceptable time to repot if needed, but spring is preferred. Avoid repotting during heat waves — stress compounds stress.",
    "pests": "Peak pest season. Spider mites thrive in hot, dry conditions. Fungus gnats appear with overwatering. Check plants weekly. Isolate any infected plant immediately.",
    "general_tip": "Watch for heat stress signs (drooping, scorching) and air conditioning stress (similar symptoms but from cold air drafts). Location relative to AC vents matters more in summer."
  },
  "fall": {
    "name": "Fall",
    "months": ["September", "October", "November"],
    "description": "Growth is slowing down. Most houseplants are beginning to prepare for winter dormancy. This is the time to taper care routines, not end them abruptly.",
    "watering": "Gradually reduce watering frequency as temperatures drop and plants slow down. Overwatering in fall is a common cause of winter root rot.",
    "fertilizing": "Begin tapering off fertilizer by October. Most plants should receive no fertilizer by November. Fertilizing in fall pushes soft, vulnerable new growth before winter.",
    "light": "Decreasing day length means plants may need to be moved closer to windows. Clean windows and wipe leaves to maximize light capture as days shorten.",
    "repotting": "Avoid repotting in fall — plants are heading into a rest period and won't have time to establish.",
    "pests": "Pest pressure decreases as temperatures drop. Do a final thorough inspection before bringing any outdoor plants back inside for winter.",
    "general_tip": "Fall is the most commonly mismanaged season — people continue summer watering schedules into fall and end up with root rot by winter. Adjust gradually as you notice slower growth."
  },
  "winter": {
    "name": "Winter",
    "months": ["December", "January", "February"],
    "description": "Dormancy or near-dormancy for most houseplants. Light is at its lowest, temperatures are cool, and most plants should receive minimal care. The most common winter mistake is caring too much.",
    "watering": "Water significantly less — most plants need water once every 2–4 weeks, or when soil is fully dry. Check before you water, not on a schedule.",
    "fertilizing": "No fertilizing for most plants. Fertilizing in winter pushes weak, etiolated growth that makes plants more vulnerable to pests and disease.",
    "light": "Shortest days of the year. Move plants to your brightest windows. Remove anything blocking window light. Consider a grow light for light-demanding plants or those far from windows.",
    "repotting": "Never repot in winter. Plants are dormant and won't recover well. Wait until spring growth begins.",
    "pests": "Dry indoor heating creates ideal conditions for spider mites. Check plants monthly even if you're barely touching them. Mealybugs can persist through winter on neglected plants.",
    "general_tip": "Benign neglect is actually the right strategy for many plants in winter. Check in, water when soil is dry, keep away from cold drafts and heating vents, and let them rest."
  }
};

function getSeasonFromDate(date = new Date()) {
  const month = date.getMonth() + 1;
  if ([12, 1, 2].includes(month)) return "winter";
  if ([3, 4, 5].includes(month)) return "spring";
  if ([6, 7, 8].includes(month)) return "summer";
  return "fall";
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function buildChatMessage(role, html) {
  const wrapper = document.createElement("div");
  wrapper.className = `chat-message ${role}`;
  wrapper.innerHTML = html;
  return wrapper;
}

function appendChatMessage(role, text) {
  const chatLog = document.getElementById("chat-log");
  const html = role === "user"
    ? `<strong>You</strong><div>${text}</div>`
    : `<strong>Plant Advisor</strong><div>${text}</div>`;
  chatLog.appendChild(buildChatMessage(role, html));
  chatLog.scrollTop = chatLog.scrollHeight;
}

function renderPlantList() {
  const list = document.getElementById("plant-list");
  list.innerHTML = Object.values(plants)
    .sort((a, b) => a.display_name.localeCompare(b.display_name))
    .map((plant) => `<li>${plant.display_name}</li>`)
    .join("");
}

function renderExampleList() {
  const list = document.getElementById("example-list");
  list.innerHTML = exampleQuestions
    .map(
      (question) =>
        `<li><button type="button" class="example-button">${question}</button></li>`
    )
    .join("");

  document.querySelectorAll(".example-button").forEach((button) => {
    button.addEventListener("click", () => {
      const textarea = document.getElementById("user-input");
      textarea.value = button.textContent;
      textarea.focus();
    });
  });
}

function formatList(items) {
  if (!items || !items.length) return "None.";
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function getSeasonInfo(seasonKey) {
  const season = seasons[seasonKey];
  return season
    ? `
      <p><strong>${season.name} care notes:</strong> ${season.description}</p>
      <p><strong>Watering:</strong> ${season.watering}</p>
      <p><strong>Fertilizing:</strong> ${season.fertilizing}</p>
      <p><strong>Light:</strong> ${season.light}</p>
      <p><strong>Pests:</strong> ${season.pests}</p>
      <p>${season.general_tip}</p>`
    : "";
}

function answerQuestion(question) {
  const lower = question.toLowerCase();
  const plantMatch = Object.values(plants).find((plant) => {
    const name = plant.display_name.toLowerCase();
    return (
      lower.includes(name) ||
      lower.includes(plant.scientific_name.toLowerCase()) ||
      plant.aliases.some((alias) => lower.includes(alias.toLowerCase()))
    );
  });

  if (!plantMatch) {
    return `I could not find a matching plant in the local database. Try asking about one of the listed plants, or mention a common nickname like "devil's ivy".`;
  }

  const seasonKey = getSeasonFromDate();
  const seasonNote = plantMatch.seasonal_notes[seasonKey];
  const seasonInfo = getSeasonInfo(seasonKey);

  return `According to the care data for ${plantMatch.display_name}, which is <em>${plantMatch.scientific_name}</em>, here is the guidance:<br>
    <strong>Difficulty:</strong> ${plantMatch.difficulty}<br>
    <strong>Watering frequency:</strong> ${plantMatch.watering.frequency}<br>
    <strong>Watering notes:</strong> ${plantMatch.watering.description}<br>
    <strong>Light:</strong> ${plantMatch.light.requirement}<br>
    <strong>Light avoid:</strong> ${plantMatch.light.avoid}<br>
    <strong>Humidity:</strong> ${plantMatch.humidity}<br>
    <strong>Temperature:</strong> ${plantMatch.temperature}<br>
    <strong>Fertilizing:</strong> ${plantMatch.fertilizing}<br>
    <strong>Common issues:</strong> ${formatList(plantMatch.common_issues)}<br>
    <strong>${seasonKey.charAt(0).toUpperCase() + seasonKey.slice(1)} note:</strong> ${seasonNote}<br>
    ${seasonInfo}`;
}

function setupForm() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = input.value.trim();
    if (!question) return;

    appendChatMessage("user", question.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const answerHtml = answerQuestion(question);
    appendChatMessage("bot", answerHtml);
    input.value = "";
  });
}

function initialize() {
  renderPlantList();
  renderExampleList();
  setupForm();
}

window.addEventListener("DOMContentLoaded", initialize);
