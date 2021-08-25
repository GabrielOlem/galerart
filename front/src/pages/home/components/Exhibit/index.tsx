import React from 'react';
import styles from './styles.module.scss';
import expo from '../../../../asserts/img/expo.png';
import photoIcon from '../../../../asserts/img/photoIcon.png';
import rightArrow from '../../../../asserts/img/rightArrow.png';
import { Image } from '@chakra-ui/react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export function Exhibit() {
  const renderCard = (expo: string, fav: boolean) => {
    const color = fav ? '#CD113B' : '#c4c4c4';
    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardExpo}>
          <div className={styles.cardExpoContent}>
            <div className={styles.redCircle} />
            <div className={styles.purpleSquare} />
            <div className={styles.expoImage}>
              <Image objectFit='cover' src={expo} alt='Expo' />
            </div>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div>
            <p>Melhor expo</p>
            <FavoriteIcon style={{ color, fontSize: '24px' }} />
          </div>
          <div>
            <Image
              boxSize='24px'
              objectFit='cover'
              src={photoIcon}
              alt='Photo icon'
            />
            <p className={styles.expoName}>ArtSoul</p>
            <p className={styles.expoData}>16 ago - 24 ago / 2021</p>
          </div>
          <div>
            <LocationOnIcon style={{ fontSize: '24px' }} />
            <p>
              Rua Tavares de Almeida, 92
              <br />
              Recife, PE
            </p>
          </div>
          <div>
            <p className={styles.expoSchedule}>Horário de funcionamento</p>
            <p className={styles.expoHour}>10:00 - 17:00</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Próximas exposições para você</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.expoContent}>
          {renderCard(expo, true)}
          {renderCard(expo, false)}
        </div>
        <div className={styles.pageExpoButton}>
          <button>
            <p>Mais exposições</p>
            <Image
              boxSize='25px'
              objectFit='cover'
              src={rightArrow}
              alt='Arrow'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Exhibit;
