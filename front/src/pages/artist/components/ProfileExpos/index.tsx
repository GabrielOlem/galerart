import React from 'react';
import arte1 from '../../../../asserts/img/arte1.png';
import paint from '../../../../asserts/img/paint.png';
import rightArrow from '../../../../asserts/img/rightArrow.png';
import photoIcon from '../../../../asserts/img/photoIcon.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Image } from '@chakra-ui/react';
import styles from './styles.module.scss';

function ProfileExpos() {
  const cardExpo = () => {
    return (
      <div className={styles.cardExpo}>
        <p className={styles.expoTitle}>Melhor expo</p>
        <div className={styles.expoData}>
          <div>
            <Image
              boxSize='20px'
              objectFit='cover'
              src={photoIcon}
              alt='Photo icon'
            />
            <p>ArtSoul</p>
          </div>
          <p>16 ago - 24 ago / 2021</p>
        </div>
        <div className={styles.expoLocation}>
          <LocationOnIcon style={{ fontSize: '24px' }} />
          <p>
            Rua Tavares de Almeida, 92
            <br />
            Recife, PE
          </p>
        </div>
        <div className={styles.expoSchedule}>
          <p className={styles.expoScheduleMessage}>Horário de funcionamento</p>
          <p className={styles.expoHour}>10:00 - 17:00</p>
        </div>
        <div className={styles.expoButton}>
          <button>
            <p>Ver exposição</p>
            <Image
              boxSize='16px'
              objectFit='cover'
              src={rightArrow}
              alt='Arrow'
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Exposições que participa</p>
      <div className={styles.content}>
        {cardExpo()}
        {cardExpo()}
        {cardExpo()}
        {cardExpo()}
        {cardExpo()}
        {cardExpo()}
      </div>
    </div>
  );
}

export default ProfileExpos;
