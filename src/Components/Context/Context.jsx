import { createContext, useState } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const [handleModal, setHandleModal] = useState(false);
  const [talks, setTalks] = useState([
    {
      id: 1,
      title: "FAANG da intership imkoniyatlar",
      date: "2022-03-20",
      image:
        "https://azimjon.com/media/2022/03/20/photo_2022-03-20_12.30.15.jpeg",
    },
    {
      id: 2,
      title: "FAANG: rejectdan Offergacha",
      date: "2021-12-11",
      image: "https://azimjon.com/media/2021/12/18/faang.png",
    },
    {
      id: 3,
      title: "Internet qanday ishlaydi",
      date: "2021-09-22",
      image: "https://azimjon.com/media/2021/12/18/how-internet-works.png",
    },
    {
      id: 4,
      title: "Bir qator python kod nimalarga qodir",
      date: "2021-09-13",
      image: "https://azimjon.com/media/2021/12/18/one-line-python.png",
    },
    {
      id: 5,
      title: "Yaxshi dasturchi hislatlari",
      date: "2021-08-27",
      image:
        "https://azimjon.com/media/2021/12/18/yaxshi-dasturchi-hislatlari.png",
    },
    {
      id: 6,
      title: "Programmble Google Assistant",
      date: "2020-12-26",
      image:
        "https://azimjon.com/media/2021/12/18/Screenshot_2021-12-18_at_14.30.52.png",
    },
  ]);

  return (
    <Context.Provider value={{ handleModal, setHandleModal, talks, setTalks }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
