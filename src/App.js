import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const audioData1 = [
    {
      id: "Heater-1",
      name: "Q",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "Heater-2",
      name: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "Heater-3",
      name: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "Heater-4",
      name: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "Clap",
      name: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "Open-HH",
      name: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Kick-n",
      name: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "Kick",
      name: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "Closed-HH",
      name: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const audioData2 = [
    {
      id: "Chord_1",
      name: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      id: "Chord_2",
      name: "B",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      id: "Chord_3",
      name: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      id: "Give_us_a_light",
      name: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      id: "Dry_Ohh",
      name: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3v",
    },
    {
      id: "Open-HH",
      name: "F",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "punchy_kick_1",
      name: "G",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      id: "side_stick_1",
      name: "H",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      id: "Brk_Snr",
      name: "I",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const [currentAudio, setCurrentAudio] = useState({});
  const [currAudioData, setCurrAudioData] = useState(audioData1);
  const [power, setPower] = useState(true);
  const [audio, setAudio] = useState("one");

  const handleCurrentAudio = (e, item) => {
    if (item) {
      playSound(item.name);
      setCurrentAudio(item);
    }
  };
  const playSound = (selector) => {
    console.log(selector);
    const audio = document.getElementById(selector);
    audio.play();
  };

  const handleChangeMusicType = (e) => {
    if (audio == "one") {
      setAudio("two");
      setCurrAudioData(audioData2);
    } else if (audio == "two") {
      setAudio("one");
      setCurrAudioData(audioData1);
    }
  };
  const handlePower = (e) => {
    setPower(!power);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  }, []);

  return (
    <div className="App">
      <div className="heading">DRUM MACHINE</div>
      <div id="drum-machine">
        <div className={`pad_bank ${power ? "active" : "deactive"}`}>
          <div className="wrapper">
            {currAudioData?.map((item) => (
              <div
                className="drum-pad"
                id={item.id}
                key={item.id}
                style={{
                  backgroundColor: audio == "one" ? "#59b661" : "#aa6969",
                }}
                onClick={(e) => {
                  handleCurrentAudio(e, item);
                }}
              >
                <audio className="clip" id={item.name} src={item.audio}></audio>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="controls_container">
          <div className="control_wrapper">
            <div
              className="control power_control"
              onClick={(e) => {
                handlePower(e);
              }}
            >
              <p>Power</p>
              <div className="select">
                <div
                  className={`inner ${
                    !power ? "float-left bg-gray" : "float-right bg-red"
                  }`}
                ></div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    padding: "5px",
                    position: "relative",
                    top: "5px",
                    left: "5px",
                  }}
                >
                  {!power ? "Off" : "On"}
                </span>
              </div>
            </div>
            <div id="display">{currentAudio?.id?.toUpperCase()}</div>
            <div
              className="control change_music"
              onClick={(e) => {
                handleChangeMusicType(e);
              }}
            >
              <p>Change Music Type</p>
              <div className="select">
                <div
                  className={`inner ${
                    audio == "one"
                      ? "float-left bg-green"
                      : "float-right bg-red"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
