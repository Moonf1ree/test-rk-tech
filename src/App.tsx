import Checkbox from "./components/Checkbox";
import styles from "./App.module.css";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import clsx from "clsx";

function App() {
  const [disabled, setIsDisabled] = useState<boolean>(true);
  const [catImage, setCatImage] = useState<string | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [autorefresh, setAutorefresh] = useState<boolean>(false);

  const fetchCat = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?api_key=ff1263e9-6f9b-4fcc-bfe7-c61f7728d13c"
      );

      if (!response.ok) {
        throw new Error("Не получилось зафетчить кота");
      }

      const data = await response.json();
      if (!data[0]?.url) {
        throw new Error("Неправильный формат данных");
      }
      setCatImage(data[0].url);
    } catch (err) {
      console.error("Ошибка фетчинга", err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autorefresh && !disabled) {
      fetchCat();

      intervalId = setInterval(fetchCat, 5000);
      console.log(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autorefresh, disabled]);

  return (
    <div className={styles["development-block"]}>
      <div className={styles["checkbox-wrapper"]}>
        <Checkbox
          label="Enabled"
          checked={!disabled}
          onChange={() => {
            setIsDisabled(!disabled);
          }}
        />
        <Checkbox
          onChange={() => {
            setIsDisabled(!disabled);
            setAutorefresh(true);
          }}
          label="Auto-refresh every 5 seconds"
        />
      </div>
      <Button
        disabled={disabled || loading}
        onClick={fetchCat}
        className={clsx(
          styles["app-button"],
          disabled && styles["button-disabled"]
        )}
      >
        {loading ? "Loading" : "Get cat"}
      </Button>
      <div className={styles["cat-container"]}>
        {catImage && (
          <img
            src={catImage}
            alt="Картинка случайного кота"
            className={styles["cat-image"]}
          />
        )}
      </div>
    </div>
  );
}

export default App;
