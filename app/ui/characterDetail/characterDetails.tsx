import React from "react";
import styles from "./characterDetails.module.scss";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader/CardHeader";
import CardTitle from "../../../components/Card/CardHeader/CardTitle/CardTitle";
import CardContent from "../../../components/Card/CardContent/CardContent";
import { Location, Origin, PersonalData } from "@/types/character";



interface CharacterDetailsProps {
  data: PersonalData | Origin | Location;
  title: string
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ data, title }) => {
  if (!data) {
    return null; 
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={styles.cardContent}>
          {Object.entries(data).map(([key, value]) => (
            <div className={styles.cardContent__item} key={key}>
              <label htmlFor={key} className={styles.cardContent__item_label}>{key}</label>
              <div className={styles.cardContent__item_text} id={key}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterDetails;
