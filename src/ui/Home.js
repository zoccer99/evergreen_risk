import React, { useEffect, useState } from "react";
import { Button, Container, Jumbotron, Stack } from "react-bootstrap";
import { QuenstionBox } from "../components/QuenstionBox";
import { ResultBox } from "./ResultBox";
import { StartScreen } from "./StartScreen";

export const Home = () => {
  const [showModal, setShowModal] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [goal, setGoal] = useState();
  const [age, setAge] = useState();
  const [longevity, setLongevity] = useState();
  const [reaction, setReaction] = useState();
  const [risk, setRisk] = useState();

  const [result, setResult] = useState();

  const startRiskCalculation = () => {
    setShowModal({
      0: true,
      1: false,
      2: false,
      3: false,
      4: false,
    });
  };

  const selectToPostFormat = (selectValue) => {
    //GOAL
    if (selectValue === "Kapitalerhalt") {
      return "RetainWealth";
    }
    if (selectValue === "Vermögensaufbau") {
      return "GrowWealth";
    }
    if (selectValue === "Altersvorsorge") {
      return "Retirement";
    }

    //AGE
    if (selectValue === "unter 36 Jahren") {
      return "Below36";
    }
    if (selectValue === "36 - 55 Jahre") {
      return "Below56";
    }
    if (selectValue === "über 55 Jahre") {
      return "Above55";
    }

    //longevity
    if (selectValue === "weniger als 5 Jahre") {
      return "Below5";
    }
    if (selectValue === "5 - 15 Jahre") {
      return "Below15";
    }
    if (selectValue === "mehr als 15 Jahre") {
      return "Above15";
    }
    //REACTION
    if (selectValue === "Alles verkaufen") {
      return "SellAll";
    }
    if (selectValue === "Cool bleiben") {
      return "KeepCool";
    }
    if (selectValue === "Mehr investieren") {
      return "InvestMore";
    }
  };

  const postRequest = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      goal: selectToPostFormat(goal),
      age: selectToPostFormat(age),
      selfTest: parseInt(risk),
      duration: selectToPostFormat(longevity),
      behaviour: selectToPostFormat(reaction),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const res = await fetch(
        "https://sandbox.onboarding-api.evergreen.de/risk-rate/calculate",
        requestOptions
      );
      const result = await res.json();
      setResult(result);
      console.log(result["calculatedRiskRate"]);
    } catch {
      alert("Irgendetwas ist schief gelaufen...");
    }
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <StartScreen />
        <QuenstionBox
          modalState={showModal}
          index={0}
          show={showModal[0]}
          question="Was ist dein Anlageziel?"
          description="Anlageziele in der Finanzplanung sind sehr wichtig, um sicherzustellen, dass man seine finanziellen Ziele erreicht. Es ist wichtig, dass man ein klares Ziel hat, bevor man sein Geld investiert. Zum Beispiel kann man sich vornehmen, eine bestimmte Summe in einem bestimmten Zeitraum zu sparen oder zu investieren. Man kann auch ein Ziel haben, eine bestimmte Rendite zu erzielen. Es ist wichtig, dass man sich überlegt, welche Art von Anlage man machen möchte und wie viel Risiko man bereit ist einzugehen. "
          answers={["Kapitalerhalt", "Vermögensaufbau", "Altersvorsorge"]}
          result={setGoal}
          next={setShowModal}
        />
        <QuenstionBox
          modalState={showModal}
          index={1}
          show={showModal[1]}
          question="Wie alt bist Du?"
          description="
          Als es um Finanzplanung geht, ist das Alter ein wichtiger Faktor. Je älter man wird, desto mehr Verantwortung trägt man für die eigene finanzielle Zukunft. Es ist wichtig, dass man sich frühzeitig Gedanken über seine finanzielle Zukunft macht und einen Plan erstellt, um sicherzustellen, dass man im Alter finanziell abgesichert ist."
          answers={["unter 36 Jahren", "36 - 55 Jahre", "über 55 Jahre"]}
          result={setAge}
          next={setShowModal}
        />
        <QuenstionBox
          modalState={showModal}
          index={2}
          show={showModal[2]}
          question="Wie lange planst du dein Geld anzulegen?"
          description="Anlagedauer ist ein wichtiger Aspekt der Finanzplanung. Es ist wichtig, dass man sich überlegt, wie lange man sein Geld anlegen möchte. Dies hängt von verschiedenen Faktoren ab, wie z.B. dem Risiko, das man eingehen möchte, und der Rendite, die man erzielen möchte."
          answers={["weniger als 5 Jahre", "5 - 15 Jahre", "mehr als 15 Jahre"]}
          result={setLongevity}
          next={setShowModal}
        />
        <QuenstionBox
          modalState={showModal}
          index={3}
          show={showModal[3]}
          question="Angenommen Deine Anlage verliert 10 % an Wert. Wie reagierst Du?"
          description="Risiko bei Wertverlust ist ein wichtiger Aspekt der Finanzplanung. Es ist wichtig, dass man sich bewusst ist, dass Investitionen nicht immer Gewinne abwerfen. Es ist möglich, dass man Geld verliert, wenn man in eine Investition investiert. Deshalb ist es wichtig, dass man sich über die Risiken bewusst ist, die mit einer Investition verbunden sind. Man sollte sich auch überlegen, wie man das Risiko minimieren kann, indem man verschiedene Strategien anwendet."
          answers={["Alles verkaufen", "Cool bleiben", "Mehr investieren"]}
          result={setReaction}
          next={setShowModal}
        />
        <QuenstionBox
          modalState={showModal}
          index={4}
          show={showModal[4]}
          question="Wie schätzt Du Deine Risikobereitschaft selbst ein (1 - 10)?"
          description="Persönliche Risikobereitschaft ist ein wichtiger Aspekt der Finanzplanung. Es ist wichtig, dass man sich bewusst macht, welche Risiken man eingehen möchte und welche nicht. Jeder hat ein anderes Risikoprofil, das sich auf seine finanzielle Situation und seine Ziele auswirkt. Einige Menschen sind bereit, mehr Risiko einzugehen, um höhere Renditen zu erzielen, während andere lieber sicherere Investitionen bevorzugen."
          answers={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          result={setRisk}
          next={setShowModal}
        />

        <Stack gap={2} className="w-50 w-md-50 mx-auto">
          <Button
            className="evergreen_button "
            onClick={() => startRiskCalculation()}
          >
            Risikoeinschätzung starten
          </Button>

          {showModal[5] && (
            <Button className="evergreen_button" onClick={() => postRequest()}>
              Ergebnisse anfragen
            </Button>
          )}
        </Stack>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {result && (
          <ResultBox
            className="w-75"
            calculatedRisk={result["calculatedRiskRate"]}
            yin={result["riskValues"]["yin"]}
            yang={result["riskValues"]["yang"]}
            return={result["riskValues"]["return"]}
            volality={result["riskValues"]["volatility"]}
          />
        )}
      </div>
    </div>
  );
};
