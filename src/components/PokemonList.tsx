import React, { useEffect, useState } from "react";
import { Detail } from "../interfaces";

interface Props {
  id: number;
  name: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  image: string;
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList = (props: Props) => {
  const { id, name, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);
  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpened: false,
    });
  };
  return (
    <div>
      {isSelected ? (
        <section className="pokemon-detail">
          <div className="pokemon-detail-container">
            <p onClick={closeDetail} className="pokemon-detail-close">
              X
            </p>
            <div className="pokemon-detail-info">
              <img src={image} alt="pokemon" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="pokemon-detail-skill">
              <div className="pokemon-detail-abilitity">
                <p>Abilities:</p>
                {abilities?.map((ab: any) => {
                  return <div>{ab.ability.name}</div>;
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
