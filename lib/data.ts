export type Category = {
  emoji: string;
  title: string;
  desc: string;
  count: string;
  color: string;
};

export type Animal = {
  emoji: string;
  name: string;
  badge: string;
  badgeClass: "" | "ocean" | "bug" | "wild";
  desc: string;
  facts: string[];
  gradient: string;
};

export type Fact = {
  icon: string;
  text: string;
  animal: string;
};

export type Question = {
  q: string;
  options: string[];
  correct: number;
  emojiCorrect: string;
  emojiWrong: string;
  explanation: string;
};

export const categories: Category[] = [
  { emoji: "🦁", title: "Wild Animals", desc: "Lions, tigers, elephants & more", count: "48 animals", color: "#FFD166" },
  { emoji: "🐬", title: "Ocean Life", desc: "Dolphins, sharks, whales & fish", count: "62 animals", color: "#06D6A0" },
  { emoji: "🦅", title: "Birds", desc: "Eagles, parrots, penguins & owls", count: "35 animals", color: "#118AB2" },
  { emoji: "🐸", title: "Reptiles & Amphibians", desc: "Frogs, lizards, snakes & crocs", count: "29 animals", color: "#EF476F" },
  { emoji: "🐛", title: "Insects & Bugs", desc: "Butterflies, bees, ants & beetles", count: "41 animals", color: "#9B5DE5" },
  { emoji: "🐶", title: "Pet Friends", desc: "Dogs, cats, rabbits & hamsters", count: "18 animals", color: "#F77F00" },
];

export const animals: Animal[] = [
  {
    emoji: "🦊", name: "Red Fox", badge: "Forest", badgeClass: "",
    desc: "Foxes are super clever! They can hear a mouse under 3 feet of snow and pounce on it exactly.",
    facts: ["🌍 Found worldwide", "⚖️ 3–11 kg", "📏 45–90 cm"],
    gradient: "linear-gradient(135deg,#FFD166,#F77F00)",
  },
  {
    emoji: "🐬", name: "Bottlenose Dolphin", badge: "Ocean", badgeClass: "ocean",
    desc: "Dolphins are so smart they have names for each other! They call friends by a unique whistle.",
    facts: ["🌊 All oceans", "⚖️ 150–650 kg", "📏 2–4 m"],
    gradient: "linear-gradient(135deg,#06D6A0,#118AB2)",
  },
  {
    emoji: "🦋", name: "Monarch Butterfly", badge: "Insect", badgeClass: "bug",
    desc: "Monarchs travel up to 4,500 km every year without a map — using the sun as their compass!",
    facts: ["🌻 North America", "⚖️ 0.5 g", "📏 10 cm wingspan"],
    gradient: "linear-gradient(135deg,#EF476F,#9B5DE5)",
  },
  {
    emoji: "🐘", name: "African Elephant", badge: "Wild", badgeClass: "wild",
    desc: "Elephants never forget — they can remember the faces of hundreds of friends for decades!",
    facts: ["🌍 Africa", "⚖️ up to 6,000 kg", "📏 3–4 m tall"],
    gradient: "linear-gradient(135deg,#A8DADC,#457B9D)",
  },
];

export const facts: Fact[] = [
  { icon: "🐙", text: "An octopus has **three hearts**, blue blood, and can change colour in under a second!", animal: "Octopus" },
  { icon: "🦒", text: "A giraffe's tongue is **45–50 cm long** and dark purple to protect it from sunburn!", animal: "Giraffe" },
  { icon: "🦦", text: "Sea otters hold hands while sleeping so they don't **drift apart** in the ocean!", animal: "Sea Otter" },
  { icon: "🦩", text: "Flamingos are born **white** — they turn pink from the shrimp they eat!", animal: "Flamingo" },
  { icon: "🦈", text: "Sharks are older than trees! They've been on Earth for over **450 million years**.", animal: "Shark" },
];

export const questions: Question[] = [
  {
    q: "🦒 How tall can a giraffe grow?",
    options: ["2 metres", "4 metres", "6 metres", "8 metres"],
    correct: 2, emojiCorrect: "🎉", emojiWrong: "😅",
    explanation: "Giraffes can reach up to 6 metres — they're the tallest animals on land!",
  },
  {
    q: "🐘 How long is an elephant's pregnancy?",
    options: ["6 months", "12 months", "18 months", "22 months"],
    correct: 3, emojiCorrect: "🐘", emojiWrong: "😲",
    explanation: "Elephants have the longest pregnancy of any land mammal — about 22 months!",
  },
  {
    q: "🦈 How many teeth can a shark grow in a lifetime?",
    options: ["50", "100", "20,000", "50,000"],
    correct: 2, emojiCorrect: "🦷", emojiWrong: "😮",
    explanation: "Sharks can grow up to 20,000 teeth in a lifetime — they replace them constantly!",
  },
  {
    q: "🐙 How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correct: 2, emojiCorrect: "💙", emojiWrong: "😅",
    explanation: "Octopuses have 3 hearts — two pump blood to the gills, one to the body!",
  },
  {
    q: "🐧 Which penguin species is the smallest?",
    options: ["Emperor Penguin", "Little Blue Penguin", "Adelie Penguin", "Macaroni Penguin"],
    correct: 1, emojiCorrect: "🐧", emojiWrong: "😅",
    explanation: "The Little Blue Penguin is only about 33 cm tall!",
  },
];
