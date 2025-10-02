import { create } from 'zustand';

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const useChairStore = create((set) => ({
  // Chair configuration state
  material: "leather",
  legs: 1,
  chairColor: chairColors[0],
  cushionColor: cushionColors[0],
  
  // Available options
  chairColors,
  cushionColors,
  
  // Actions
  setMaterial: (material) => set({ material }),
  setLegs: (legs) => set({ legs }),
  setChairColor: (chairColor) => set({ chairColor }),
  setCushionColor: (cushionColor) => set({ cushionColor }),
  
  // Reset to defaults
  reset: () => set({
    material: "leather",
    legs: 1,
    chairColor: chairColors[0],
    cushionColor: cushionColors[0],
  }),
}));
