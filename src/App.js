import './App.css';
import PartyMember from './components/PartyMember';

function App() {
  return (
    <>
    <PartyMember image="./characterArt/durotar.jpg" name="Durotar" description="This is Durotar, a Half-Orc Barbarian from the Contested Lands" />
    <PartyMember image="./characterArt/vesh.jpg" name= "Vesh" description="This is Vesh, an Eladrin Bard from the Feywild" />
    <PartyMember image="./characterArt/tachi.jpg" name= "Tachi" description = "This is Tachi, a Gnome Artificer Originally from the United Clans of Carcosa" />
    <PartyMember image= "./characterArt/nordri.png" name= "Nordri" description = "This is Nordri, a Dwarven Paladin Originally from the United Clans of Carcosa" />
    <PartyMember image = "./characterArt/solanin.jpg" name= "Solanin" description =  "This is Solanin, a Druid Satryress from the Feywild" /> 
    </>
  );
}

export default App;
