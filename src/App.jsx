import React from "react";
import CardProduct from "./components/CardProduct";
import { Row, Col } from "antd";

function App() {
  const data = [
    {
      id: 1,
      titel: "Pistol",
      des: "ma meA pistol is a type of handgun, characterised by a barrel with an integral chamber. The word pistol derives from the Middle French pistolet, meaning a small gun or knife, and first appeared in the English language c. 1570 when early handguns were produced in Europe.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pistol_used_by_%22Squeaky%22_Fromme.JPG/1200px-Pistol_used_by_%22Squeaky%22_Fromme.JPG",
    },
    {
      id: 2,
      titel: "Machine guns",
      des: "It is generally crew-operated ('heavy machine gun'), but some forms may be fired by single individuals ('light machine gun').",
      url: "https://www.therange702.com/wp-content/uploads/2022/12/A512-scaled-1000.jpg",
    },
    {
      id: 3,
      titel: "Rifle",
      des: "A rifle is a long-barreled firearm designed for accurate shooting and higher stopping power, with a barrel that has a helical or spiralling pattern of grooves cut into the bore wall.",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Rifles_at_the_National_Firearms_Museum.jpg",
    },
    {
      id: 4,
      titel: "Shotgun",
      des: "A shotgun is a long-barreled firearm designed to shoot a straight-walled cartridge known as a shotshell, which discharges numerous small spherical projectiles called shot, or a single solid projectile called a slug.",
      url: "https://m.media-amazon.com/images/I/61wp6Tyc+uL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 5,
      titel: "Carbine",
      des: "Rifle or Carbine. Is a shoulder-fired long gun, with a series of spiral grooves cut inside the barrel rifling imparting spin to the projectile",
      url: "http://t3.gstatic.com/images?q=tbn:ANd9GcQvro5rDdU-A9XzdDAt-56hBQ18q53WAkPANFf-Fn146oLLDnCu",
    },
    {
      id: 6,
      titel: "Semi-automatic",
      des: "Semi-Automatic Rifle. Semi-automatic rifles have only one moving part, as opposed to fully automatic rifles, which have many moving parts.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/FSA-1917-detoured.jpg/250px-FSA-1917-detoured.jpg",
    },
    {
      id: 7,
      titel: "Bolt Action",
      des: "BOLT ACTION. A bolt action firearm operates like opening and closing a door bolt. The bolt solidly locks into the breech, making it accurate and dependable",
      url: "https://wholeeartheducation.com/wp-content/uploads/2023/07/BOLT-ACTION-PHASES-IN-FIRING-1-666x1024.jpg",
    },
    {
      id: 8,
      titel: "Cap gun",
      des: "However, the classification depends on the exact design of the air gun. Air rifles manufactured to resemble an assault rifle could be non-restricted,",
      url: "https://i0.wp.com/acwm.org/wp-content/uploads/3-4.png?fit=500%2C500&ssl=1",
    },
    {
      id: 9,
      titel: "Fully automatic",
      des: "FULLY AUTOMATIC. Self-loading is achieved in the same way of semi automatic, but the weapon keeps firing rounds as long as the trigger remains",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJvRJ-fbBM1-QPH1ecX-MdKOTruRuOWARba0h4KMARzGS31ptu",
    },
    {
      id: 10,
      titel: "Airguns",
      des: "Airguns are real guns. They are cheap, accessible to buy on impulse, and no background checks are required. The power of airguns is measured in muzzle",
      url: "https://image.invaluable.com/housePhotos/Milestone/00/741600/H19536-L318648007.jpg",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <Col xs={24} sm={12} md={8} lg={6}>
          <CardProduct data={item} />
        </Col>
      ))}
    </div>
  );
}

export default App;
