import React, { useState } from 'react';
import './big-box.css';
import './ring';
import Ring from './ring';
import axios from 'axios';








const BigBox = () => {
  const [inputData, setInputData] = useState("J'ai beaucoup aimé cette application");
  const [outputData, setOutputData] = useState('');
  const [outputPerc, setOutputPerc] = useState('');
  const [outputSentence, setOutputSentence] = useState('');
  const [outputColor, setOutputColor] = useState('#C0C0C0');
  const [isOpened, setIsOpened] = useState(true);


  const handleClick = async () => {
    if (inputData === "") { 
      console.log("nami"); 
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
    console.log("hahaha")
    //const response = await axios.post('/http://127.0.0.1:5000/predict', { input_data: inputData });
    axios.post('http://192.168.43.135:50100/predict', {
    "text" : inputData
  })
  .then((response) => {
    const specificData = response.data.percentages[0][0];
    const perc = 100-Math.round(response.data.percentages[0][0]);
    setOutputData(perc);
    if (perc >= 50){
      setOutputPerc(perc);
      setOutputColor("#0aab6b");
      setOutputSentence("Sentiment Positif ");
    } else {
      setOutputPerc(100- perc);
      setOutputColor("#FF0000");
      setOutputSentence("Sentiment Négatif ");
    }
    console.log(specificData);
      // Handle data
  })
  .catch((error) => {
    console.log(error);
  })




    //setOutputData(response.data.output);
  };


  return (
    <div>
    <div className="titles">
    <h1 className="big-title">Analyseur de Sentiments</h1>
    <h3 className="small-title" > Analysezzz les sentiments de vos textes en un clic </h3>
    </div>
    <div className="container">
    <div>
    </div>
        <div class="left">
            <h3 className="left-title">Tester avec votre texte</h3>
            <br />
            <textarea type="text" class="input-box" value={inputData} onChange={(event) => setInputData(event.target.value)} />
            <br />
            <br />
            <br />
            <button class="button" onClick={handleClick} >
            Analyser
            </button>
        </div>
      <div className="right">
         <h3 className="left-title">Résultats</h3>
         { isOpened ? null : ( <div className={"results-container"} >
            <Ring percent={outputPerc} size={100} color={outputColor} />
            <br />
            <div className="results-container-text">
                <text style={{fontSize:20, marginBottom: 12, color: outputColor}}>{outputSentence}</text>
                <text style={{fontSize:19, marginBottom: 4, color: "#C0C0C0", marginRight: 7, }}>Ce texte semble avoir un {outputSentence.toLowerCase()}</text>
            </div>
        </div>)}
      </div>
    </div>
    </div>
  );
};
export default BigBox;