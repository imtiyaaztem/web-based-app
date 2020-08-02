import Img2 from "./Img/Img2.jpg";
import Img3 from "./Img/Img3.jpg";
import Img4 from "./Img/Img4.jpg";
import Img5 from "./Img/Img5.jpg";
import Img6 from "./Img/Img6.jpg";
import Img7 from "./Img/Img7.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "./Action/cart-act";

const initState = {
  items: [
    {
      id: 1,
      title: "GT35 Turbo, GT4540/GT3582",
      desc:
        "GT35 tubo without internal wastegate and T3 connections. HP rating:300-500 COM Wheel:61/82 TUR Wheel:67.8/62.2 Com.A/R:.70 Tur.A/R:.82 ",
      price: 8000,
      img: Img2,
    },
    {
      id: 2,
      title: "Billet Intake Manifold/ Forward Facing Plenum – 1JZ-GTE",
      desc:
        "This Intake Manifold Kit Includes:Billet CNC Aluminium Manifold Suit 1JZ-GTE non VVTI & VVTI models90mm Throttle Body Dual Feed Fuel Rail Suit Top Feed 14mm Full Length Injectors Vac Line PortsWater Line Kit",
      price: 14599,
      img: Img3,
    },
    {
      id: 3,
      title: "Toyota 2JZ stage 3 camshafts",
      desc:
        "BRIAN CROWER 93-98 TOYOTA SUPRA STAGE 3 272 CAMSHAFTS CAMS FOR 2JZ 2JZ-GTE TURBO",
      price: 12000,
      img: Img4,
    },
    {
      id: 4,
      title: "VW 2L 16 ABF COMPLETE ENGINE",
      desc:
        "VW 2L 16V long block engine,Engine has complete ARP kit, it has 48mm ITB'S",
      price: 25000,
      img: Img5,
    },
    {
      id: 5,
      title: "2JZGTE Built Long Block",
      desc:
        "2JZGTE Built Long Block BRE 2JZGTE head with ARP head studs, BC 264 cams, stainless valves, BC springs & retainers,  Billet Cam gears, Gates black timing belt.BRE Modified Toyota oil pump, Toyota water pump, Borg Warner 67mm turbo,Stainless exhaust manifold , BRE Sheet Metal intake with Billet 90mm throttle body & Toyota TPS adapter.Bored cylinders on Rottler Block CNC machining center.Finished honed on Sunnen SV-10 Diamond Cylinder Hone With our Torque Plate,Align honed main housing bore w/ARP main studs on Sunnen Line Hone,Deck surface cut with CNC CBN to insure perfect gasket sealing,ACL Race series rod & main bearings,Engine was completed with Toyota OEM head gasket.",
      price: 75000,
      img: Img6,
    },
    {
      id: 6,
      title: "Mazda 13B rotary",
      desc:
        "Mazda 13B rotary, turbocharged and intercooled form, used in the second-generation RX-7. Engine is still stock and has been refurbished",
      price: 85000,
      img: Img7,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartRed = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);

    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 200,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 200,
    };
  } else {
    return state;
  }
};

export default cartRed;
