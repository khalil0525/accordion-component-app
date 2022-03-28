import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";

//Here we create some dummy data that we will use to dynamically render AccordionItems in Accordion
const dummyData = [
  {
    number: "1",
    title: "Logitech G Driving Force Shifter",
    description:
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels. Add realistic shifting to your racing wheel setup and to the latest PC and console racing titles.",
    specifications: [
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels: Adds realistic shifting to your racing rig",
      "Built to last: Durable solid steel gear shifter and hand stitched leather boot and knob cover and six speeds with push down reverse gear",
      "Secure mounting: Built in clamps mount shifter securely to a table or racing rig. Connection Type: Shifter connection DB9 (female)",
      "Weight with cable: 1.66 pound (0.76 kilogram)",
    ],
  },
  {
    number: "2",
    title: "PXN V9 Steering Wheel PC Gaming Racing Wheel",
    description:
      "Pressure-sensitive brake, accelerator and clutch pedals let you accelerate, brake and change gears with the feel of an actual car.",
    specifications: [
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels: Adds realistic shifting to your racing rig",
      "Built to last: Durable solid steel gear shifter and hand stitched leather boot and knob cover and six speeds with push down reverse gear",
      "Secure mounting: Built in clamps mount shifter securely to a table or racing rig. Connection Type: Shifter connection DB9 (female)",
      "Weight with cable: 1.66 pound (0.76 kilogram)",
    ],
  },
  {
    number: "3",
    title: "Wheel Driving Sim, PC Racing Wheel Dual-Motor Vibrate",
    description:
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels. Add realistic shifting to your racing wheel setup and to the latest PC and console racing titles.",
    specifications: [
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels: Adds realistic shifting to your racing rig",
      "Built to last: Durable solid steel gear shifter and hand stitched leather boot and knob cover and six speeds with push down reverse gear",
      "Secure mounting: Built in clamps mount shifter securely to a table or racing rig. Connection Type: Shifter connection DB9 (female)",
      "Weight with cable: 1.66 pound (0.76 kilogram)",
    ],
  },
  {
    number: "4",
    title: "The sim racing shifter for G29 and G920 Driving Force",
    description:
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels. Add realistic shifting to your racing wheel setup and to the latest PC and console racing titles.",
    specifications: [
      "The sim racing shifter for G29 and G920 Driving Force Racing Wheels: Adds realistic shifting to your racing rig",
      "Built to last: Durable solid steel gear shifter and hand stitched leather boot and knob cover and six speeds with push down reverse gear",
      "Secure mounting: Built in clamps mount shifter securely to a table or racing rig. Connection Type: Shifter connection DB9 (female)",
      "Weight with cable: 1.66 pound (0.76 kilogram)",
    ],
  },
];
function App() {
  return (
    <div className="App">
      {/* Here we are passing some dummyData as a prop "data" */}
      <Accordion data={dummyData} />
    </div>
  );
}
export default App;
